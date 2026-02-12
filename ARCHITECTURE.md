# Pensieve Architecture

## Overview

Pensieve is a personal reflection dashboard that processes OpenClaw session transcripts and presents them with AI-generated insights, tags, and analytics.

## Tech Stack

### Frontend
- **SvelteKit** — Fast, reactive UI framework with SSR support
- **TypeScript** — Type safety and better DX
- **Vite** — Fast dev server and build tool

### Backend
- **Supabase** — PostgreSQL database + Auth + Edge Functions
  - Real-time subscriptions for live updates
  - Row Level Security for data protection
  - Edge Functions for serverless API endpoints

### AI/ML
- **OpenAI API** — GPT-4 for generating insights and suggestions
- **Embeddings** — (Future) Vector search for semantic transcript search

### Data Pipeline
- **JSONL Parser** — Reads OpenClaw transcripts
- **Batch Importer** — Processes and stores messages
- **Tag Classifier** — AI-powered automatic tagging

## Data Flow

```
┌─────────────────┐
│  OpenClaw       │
│  Transcripts    │
│  (.jsonl files) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Import Script  │
│  (Node.js)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Supabase DB    │
│  (PostgreSQL)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  SvelteKit App  │
│  (Frontend)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  OpenAI API     │
│  (Suggestions)  │
└─────────────────┘
```

## Database Schema

### Core Tables

**sessions**
- Represents a single OpenClaw session
- Fields: id, session_id, started_at, ended_at, duration_seconds, message_count

**messages**
- Individual messages within a session
- Fields: id, session_id, role (user/assistant/system), content, timestamp

**tags**
- Categories for sessions (work, ideas, family, etc.)
- Fields: id, name, color

**session_tags**
- Many-to-many relationship between sessions and tags
- Includes AI confidence scores

**usage_stats**
- Aggregated daily usage metrics
- Fields: date, total_sessions, total_messages, total_duration_seconds

**suggestions**
- AI-generated insights and recommendations
- Fields: id, content, type (insight/pattern/reminder), relevance_score

### Security

- **Row Level Security (RLS)** enabled on all tables
- Currently configured for single-user self-hosted setup
- Production deployments should implement user-based RLS policies

## File Structure

```
pensieve/
├── src/
│   ├── routes/              # SvelteKit pages
│   │   └── +page.svelte    # Landing page
│   ├── lib/
│   │   ├── components/      # Reusable Svelte components
│   │   └── server/          # Server-side utilities
│   │       └── supabase.ts  # Supabase client
│   └── app.html             # HTML template
├── supabase/
│   └── migrations/          # Database schema migrations
│       └── 001_initial_schema.sql
├── scripts/
│   ├── migrate.js           # Run migrations
│   └── import-transcripts.js # Import JSONL files
├── static/                  # Static assets
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore patterns
├── package.json             # Dependencies
├── svelte.config.js         # SvelteKit config
├── vite.config.ts           # Vite config
└── README.md                # Documentation
```

## Features Roadmap

### Phase 1: Core Infrastructure ✅
- [x] Project setup
- [x] Database schema
- [x] Basic import script
- [x] Landing page

### Phase 2: Data Import & Display
- [ ] Robust JSONL parser
- [ ] Timeline view component
- [ ] Session detail view
- [ ] Search functionality

### Phase 3: AI Features
- [ ] Automatic tagging with GPT-4
- [ ] Daily/weekly insights
- [ ] Pattern detection
- [ ] Semantic search with embeddings

### Phase 4: Analytics
- [ ] Usage dashboard
- [ ] Time tracking charts
- [ ] Tag distribution
- [ ] Conversation trends

### Phase 5: Polish
- [ ] Dark mode
- [ ] Export functionality
- [ ] Mobile responsive design
- [ ] Performance optimization

## Design Principles

1. **Privacy First** — All data stays on user's infrastructure
2. **Open Source** — Transparent code, community-driven
3. **Self-Hostable** — Easy to deploy on your own servers
4. **Modular** — AI features are optional, not required
5. **Performant** — Fast load times, efficient queries

## Deployment Options

### Local Development
```bash
npm run dev
```

### Production (Vercel)
```bash
vercel deploy
```

### Self-Hosted (Docker)
```bash
docker build -t pensieve .
docker run -p 3000:3000 --env-file .env pensieve
```

### Self-Hosted (VPS)
```bash
npm run build
node build
```

## Security Considerations

### Sensitive Data
- Never commit `.env` files
- Transcripts are excluded via `.gitignore`
- Use environment variables for all secrets

### Supabase RLS
- Enable RLS on all tables
- Restrict access based on `auth.uid()` in multi-user setups
- Use service role key only in trusted server environments

### API Keys
- Rotate OpenAI keys regularly
- Use separate keys for dev/prod
- Monitor usage and set spending limits

## Performance Optimization

### Database
- Indexes on frequently queried columns (timestamp, session_id)
- Pagination for large result sets
- Aggregation at query time vs. pre-computed stats

### Frontend
- Code splitting for large components
- Lazy loading for timeline items
- Debounced search inputs

### Caching
- SvelteKit SSR for initial page load
- Supabase real-time for live updates
- Client-side state management for navigation

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Future Enhancements

- **Multi-user support** — Team reflection dashboards
- **Mobile app** — React Native or Tauri
- **Local-first** — Offline-first with sync
- **Plugin system** — Custom analyzers and visualizations
- **Export formats** — PDF reports, CSV data dumps
- **Integrations** — Notion, Obsidian, Roam Research

---

Built with ❤️ for the OpenClaw community.
