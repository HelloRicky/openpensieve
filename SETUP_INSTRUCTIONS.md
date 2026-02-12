# OpenPensieve Setup Instructions

## 🎉 Project Created Successfully!

The OpenPensieve project scaffold is complete and ready to be pushed to GitHub.

## 📁 Project Location

```
/home/ubuntu/.openclaw/workspace-linus/pensieve/
```

## 📋 What Was Created

### Core Files
- ✅ `package.json` - Dependencies (SvelteKit, Supabase, OpenAI)
- ✅ `svelte.config.js` - SvelteKit configuration
- ✅ `vite.config.ts` - Build tool configuration
- ✅ `tsconfig.json` - TypeScript settings

### Security & Configuration
- ✅ `.gitignore` - Excludes .env, data/, transcripts/, node_modules/
- ✅ `.env.example` - Template for environment variables
- ✅ `LICENSE` - MIT License

### Application Structure
- ✅ `src/app.html` - HTML template
- ✅ `src/routes/+page.svelte` - Landing page
- ✅ `src/lib/server/supabase.ts` - Supabase client setup

### Database
- ✅ `supabase/migrations/001_initial_schema.sql` - Full database schema with:
  - sessions, messages, tags, session_tags, usage_stats, suggestions tables
  - Row Level Security (RLS) enabled
  - Indexes for performance
  - Default tags (work, ideas, family, reflection, etc.)

### Scripts
- ✅ `scripts/migrate.js` - Run database migrations
- ✅ `scripts/import-transcripts.js` - Import OpenClaw JSONL files

### Documentation
- ✅ `README.md` - Comprehensive project documentation
- ✅ `ARCHITECTURE.md` - Technical architecture details
- ✅ `CONTRIBUTING.md` - Contribution guidelines

## 🚀 Next Steps

### 1. Create GitHub Repository

The current GitHub token lacks repository creation permissions. You'll need to create the repo manually:

**Option A: Via GitHub Web Interface**
1. Go to https://github.com/new
2. Repository name: `openpensieve`
3. Description: "A personal reflection dashboard for reviewing conversations and thoughts over time"
4. Choose: **Public**
5. **Do not** initialize with README (we already have one)
6. Click "Create repository"

**Option B: Via GitHub CLI (with proper permissions)**
```bash
gh repo create crshBanern/openpensieve --public --source=. --push
```

### 2. Push to GitHub

After creating the repository, run:

```bash
cd /home/ubuntu/.openclaw/workspace-linus/pensieve

# Add the remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/openpensieve.git

# Or if using SSH:
git remote add origin git@github.com:USERNAME/openpensieve.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Set Up Supabase

1. Go to https://supabase.com/dashboard
2. Create a new project
3. Copy your project credentials:
   - Project URL
   - Anon/Public key
   - Service role key (keep this secret!)

### 4. Configure Environment Variables

```bash
cp .env.example .env
nano .env  # or use your preferred editor
```

Fill in:
- `PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `PUBLIC_SUPABASE_ANON_KEY` - Your anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Your service role key
- `OPENAI_API_KEY` - Your OpenAI API key (optional for now)
- `TRANSCRIPTS_PATH` - Path to your OpenClaw transcripts

### 5. Run Database Migrations

```bash
npm install
npm run db:migrate
```

Note: If the migration script can't execute SQL directly, paste the contents of `supabase/migrations/001_initial_schema.sql` into the Supabase SQL Editor.

### 6. Import Your Transcripts (Optional)

```bash
npm run import:transcripts
```

### 7. Start Development Server

```bash
npm run dev
```

Visit http://localhost:5173

## 📊 Architecture Notes Saved

Architecture documentation has been saved to Notion:
https://www.notion.so/OpenPensieve-Architecture-30532aa2de8881afa4fecbd10ea90196

## 🔐 Security Checklist

Before pushing to GitHub, verify:
- [ ] `.env` is in `.gitignore` ✅ (already configured)
- [ ] No API keys in code ✅ (all use env vars)
- [ ] `.env.example` has no real credentials ✅ (template only)
- [ ] `transcripts/` and `data/` excluded ✅ (in .gitignore)

## 📦 Project Structure

```
openpensieve/
├── .env.example              # Environment template
├── .gitignore                # Git ignore rules
├── ARCHITECTURE.md           # Technical documentation
├── CONTRIBUTING.md           # Contribution guide
├── LICENSE                   # MIT License
├── README.md                 # Main documentation
├── package.json              # Dependencies
├── svelte.config.js          # SvelteKit config
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
├── src/
│   ├── app.html              # HTML template
│   ├── lib/
│   │   ├── components/       # Svelte components (empty, ready for features)
│   │   └── server/
│   │       └── supabase.ts   # Supabase client
│   └── routes/
│       └── +page.svelte      # Landing page
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql  # Database schema
├── scripts/
│   ├── migrate.js            # Migration runner
│   └── import-transcripts.js # JSONL importer
└── static/                   # Static assets (empty)
```

## 🎯 What's Next (Development Roadmap)

### Phase 1: Core Features
1. Build timeline component
2. Implement session detail view
3. Add search functionality
4. Create tag management UI

### Phase 2: AI Integration
1. Integrate OpenAI for auto-tagging
2. Generate daily insights
3. Pattern detection from conversations

### Phase 3: Analytics
1. Usage dashboard with charts
2. Time tracking visualizations
3. Tag distribution analytics

### Phase 4: Polish
1. Dark mode
2. Mobile responsive design
3. Export functionality
4. Performance optimization

## 🆘 Troubleshooting

**Supabase migration fails:**
- Manually run the SQL in Supabase SQL Editor
- Check service role key permissions

**Import script fails:**
- Verify TRANSCRIPTS_PATH is correct
- Check JSONL file format matches expected structure
- Ensure Supabase connection is working

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

## 📞 Support

For questions or issues:
1. Check the README.md
2. Review ARCHITECTURE.md
3. Open a GitHub issue (after repo is created)
4. Consult OpenClaw community Discord

---

**Happy building! 🧠✨**
