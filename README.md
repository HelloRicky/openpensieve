# OpenPensieve 🧠

> A personal reflection dashboard for reviewing your conversations and thoughts over time.

OpenPensieve reads your OpenClaw session transcripts and presents them in a beautiful, searchable dashboard with AI-generated insights, tags, and usage statistics.

## Features

- **Timeline View** — Browse your conversations chronologically
- **Smart Tagging** — Automatically categorize by work, ideas, family, reflection, etc.
- **Usage Stats** — Track time spent daily, weekly, and monthly
- **AI Suggestions** — Get personalized insights from your conversation history
- **Privacy-First** — Self-hosted, your data never leaves your infrastructure

## Screenshots

_Coming soon_

## Architecture

- **Frontend:** SvelteKit (TypeScript)
- **Backend:** Supabase (PostgreSQL + Auth + Edge Functions)
- **AI:** OpenAI API (configurable)
- **Data Source:** OpenClaw JSONL transcripts

## Setup

### Prerequisites

- Node.js 18+ and npm/pnpm
- A Supabase account (free tier works)
- OpenAI API key (optional, for AI suggestions)
- OpenClaw transcripts

### 1. Clone and Install

```bash
git clone https://github.com/crshBanern/openpensieve.git
cd openpensieve
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and fill in:

- **Supabase credentials** — from your [Supabase project](https://app.supabase.com)
- **OpenAI API key** — from [OpenAI](https://platform.openai.com/api-keys)
- **Transcripts path** — path to your OpenClaw transcripts directory

### 3. Set Up Supabase

Run the database migrations:

```bash
npm run db:migrate
```

This creates tables for:
- Sessions
- Messages
- Tags
- Usage statistics

### 4. Import Your Transcripts

```bash
npm run import:transcripts
```

This reads your JSONL files and populates the database.

### 5. Start the Dev Server

```bash
npm run dev
```

Visit http://localhost:5173

## Production Deployment

### Option 1: Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Option 2: Self-Hosted (Docker)

```bash
docker build -t openpensieve .
docker run -p 3000:3000 --env-file .env openpensieve
```

### Option 3: Any Node.js Host

```bash
npm run build
node build
```

## Security Notes

🔒 **This is self-hosted software. Your data stays with you.**

### Important Security Practices

1. **Never commit `.env` files** — Use `.env.example` as a template only
2. **Rotate secrets regularly** — Especially `SESSION_SECRET`
3. **Use environment variables** — Never hardcode API keys
4. **Restrict Supabase RLS** — Ensure Row Level Security policies are enabled
5. **Keep transcripts private** — Add `transcripts/` and `data/` to `.gitignore`
6. **Review before sharing** — If you fork this repo, audit for any personal data

### Recommended .env Permissions

```bash
chmod 600 .env
```

### Supabase Row Level Security

Enable RLS on all tables:

```sql
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
```

See `supabase/migrations/` for full schema and policies.

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm test

# Lint
npm run lint

# Format
npm run format
```

## Contributing

PRs welcome! Please:

1. Fork the repo
2. Create a feature branch
3. Ensure no credentials are committed
4. Submit a PR with a clear description

## License

MIT — see [LICENSE](LICENSE)

## Acknowledgments

Built for [OpenClaw](https://github.com/openclaw/openclaw) users who want to reflect on their AI conversations.

---

**Questions?** Open an issue or reach out on Discord.
