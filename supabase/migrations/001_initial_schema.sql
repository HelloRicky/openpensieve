-- OpenPensieve Database Schema
-- Initial migration: sessions, messages, tags, and usage tracking

-- Sessions table: stores OpenClaw session metadata
CREATE TABLE IF NOT EXISTS sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT UNIQUE NOT NULL,
    started_at TIMESTAMPTZ NOT NULL,
    ended_at TIMESTAMPTZ,
    duration_seconds INTEGER,
    message_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages table: stores individual messages from transcripts
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
    role TEXT NOT NULL, -- 'user', 'assistant', 'system'
    content TEXT NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    tokens_used INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tags table: categorization for sessions/messages
CREATE TABLE IF NOT EXISTS tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL,
    color TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Session tags junction table
CREATE TABLE IF NOT EXISTS session_tags (
    session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
    confidence FLOAT, -- AI-generated confidence score
    PRIMARY KEY (session_id, tag_id)
);

-- Usage stats: aggregated daily statistics
CREATE TABLE IF NOT EXISTS usage_stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date DATE NOT NULL UNIQUE,
    total_sessions INTEGER DEFAULT 0,
    total_messages INTEGER DEFAULT 0,
    total_duration_seconds INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI suggestions table: stores generated insights
CREATE TABLE IF NOT EXISTS suggestions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT NOT NULL,
    type TEXT NOT NULL, -- 'insight', 'pattern', 'reminder'
    relevance_score FLOAT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    dismissed BOOLEAN DEFAULT FALSE
);

-- Indexes for performance
CREATE INDEX idx_messages_session ON messages(session_id);
CREATE INDEX idx_messages_timestamp ON messages(timestamp);
CREATE INDEX idx_sessions_started ON sessions(started_at);
CREATE INDEX idx_usage_stats_date ON usage_stats(date);

-- Enable Row Level Security
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE suggestions ENABLE ROW LEVEL SECURITY;

-- RLS Policies (allow all for self-hosted single-user setup)
-- In production, you should restrict these based on auth.uid()
CREATE POLICY "Allow all on sessions" ON sessions FOR ALL USING (true);
CREATE POLICY "Allow all on messages" ON messages FOR ALL USING (true);
CREATE POLICY "Allow all on tags" ON tags FOR ALL USING (true);
CREATE POLICY "Allow all on session_tags" ON session_tags FOR ALL USING (true);
CREATE POLICY "Allow all on usage_stats" ON usage_stats FOR ALL USING (true);
CREATE POLICY "Allow all on suggestions" ON suggestions FOR ALL USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for sessions
CREATE TRIGGER sessions_updated_at
    BEFORE UPDATE ON sessions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- Insert default tags
INSERT INTO tags (name, color) VALUES
    ('work', '#3b82f6'),
    ('ideas', '#a855f7'),
    ('family', '#ec4899'),
    ('reflection', '#10b981'),
    ('learning', '#f59e0b'),
    ('coding', '#6366f1'),
    ('planning', '#8b5cf6')
ON CONFLICT (name) DO NOTHING;
