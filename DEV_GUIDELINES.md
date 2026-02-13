# Development Guidelines

## GitHub Actions CI/CD Setup

This repository uses GitHub Actions to automatically deploy to Cloudflare Pages on every push to `master` or `dev` branches.

### Required GitHub Secrets

You must configure the following secrets in your GitHub repository settings:

1. **Navigate to:** `Settings` → `Secrets and variables` → `Actions` → `New repository secret`

2. **Add these secrets:**

   | Secret Name | Description | How to Obtain |
   |------------|-------------|---------------|
   | `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages permissions | 1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)<br>2. Click "Create Token"<br>3. Use "Edit Cloudflare Workers" template<br>4. Add "Cloudflare Pages" permissions<br>5. Copy the token |
   | `DISCORD_WEBHOOK` | Discord webhook URL for deployment notifications | Already configured:<br>`https://discord.com/api/webhooks/1469532186595037384/q3t2I3PES6BU3YJS0zAWN3duToLIDLhnrjxB7E4bDj0xDLxvZ_gy8dDHMcPrUqZ2PEYV` |

### Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) automatically:

1. ✅ Checks out the code
2. ✅ Sets up Node.js 20
3. ✅ Installs dependencies with `npm ci`
4. ✅ Builds the project with `npm run build`
5. ✅ Deploys to Cloudflare Pages
6. ✅ Sends a Discord notification on success

### Manual Deployment

To deploy manually:

```bash
npm run build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name=openpensieve
```

### Troubleshooting

**Build fails:** Check that all dependencies are in `package.json` and the build script works locally.

**Deployment fails:** Verify `CLOUDFLARE_API_TOKEN` has the correct permissions.

**Discord notification fails:** Check that `DISCORD_WEBHOOK` is set correctly.

---

For general contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).
