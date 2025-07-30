# Vercel Development Pipeline Research Summary

_Generated: 2025-07-29 | Sources: 4 comprehensive searches_

## 🎯 Quick Reference

<key-points>
- Vercel automatically creates production deployments from main branch and preview deployments from feature branches
- Custom environments (Pro/Enterprise) enable branch rules for automatic staging deployments
- Rolling releases in 2025 allow incremental rollouts with built-in monitoring and rollback
- Environment variables support up to 64KB per deployment with branch-specific overrides
- GitHub Actions integration provides more deployment customization than default Vercel integration
</key-points>

## 📋 Overview

<summary>
Vercel's 2025 development pipeline offers sophisticated branch-based environment management for Next.js projects. The platform automatically handles production deployments from the main branch while creating preview deployments for feature branches. Enhanced features include custom environments with branch rules, rolling releases for safe deployments, and comprehensive environment variable management across development, staging, and production environments.
</summary>

## 🔧 Implementation Details

<details>
### Branch-Based Environment Setup

**Automatic Deployment Strategy:**
- Main/master branch pushes → Production deployment
- Feature branch pushes/PRs → Preview deployment
- Custom branch rules → Staging environment (Pro/Enterprise)

**Custom Environments Configuration:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "env": {
    "NEXT_PUBLIC_API_URL": "@api_url",
    "DATABASE_URL": "@database_url"
  },
  "regions": ["iad1", "sfo1"]
}
```

### Environment Variable Management

**Setting Variables by Environment:**
1. Navigate to Project Settings → Environment Variables
2. Add key/value pairs
3. Select environments (Production, Preview, Development)
4. Branch-specific variables override global ones

**Client-Side Access (Next.js):**
```javascript
// Server-side only
const serverVar = process.env.SECRET_KEY;

// Client-side accessible
const publicVar = process.env.NEXT_PUBLIC_API_URL;
```

**Local Development Sync:**
```bash
vercel env pull .env.local
```

### GitHub Actions Integration

**Production Workflow (.github/workflows/production.yml):**
```yaml
name: Production Deployment
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

**Preview Workflow (.github/workflows/preview.yml):**
```yaml
name: Preview Deployment
on:
  pull_request:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          github-comment: true
```

### 2025 Platform Enhancements

**Rolling Releases:**
- Incremental rollouts to subset of users
- Built-in monitoring for TTFB and error rates
- Automatic rollback on performance degradation
- No custom routing required

**Enhanced Security:**
- BotID invisible CAPTCHA for critical routes
- Protection for checkouts, logins, APIs
- LLM endpoint protection

### Staging Environment Setup

**Option 1: Custom Environments (Pro/Enterprise)**
- Branch rules for automatic deployment
- Custom domains per environment
- Environment-specific variables
- Import variables from other environments

**Option 2: Staged Production Deployments**
- Disable "Auto-assign Custom Production Domains"
- Manual domain assignment after verification
- Production build testing before go-live

**Option 3: Branch-Specific Domains (Hobby)**
- Preview deployment with custom domain
- Branch-specific environment variables
- Manual domain configuration

</details>

## ⚠️ Important Considerations

<warnings>
- Environment variables limited to 64KB per deployment (5KB for Edge Functions/Middleware)
- Redeploy required after adding new environment variables
- Branch-specific variables override global variables with same name
- .env.local should not be committed to version control
- Custom environments require Pro or Enterprise plan
- GitHub Actions provide more deployment control than default Vercel integration
</warnings>

## 🔗 Resources

<references>
- [Vercel Environments Documentation](https://vercel.com/docs/deployments/environments) - Official environment setup guide
- [Staging Environment Guide](https://vercel.com/guides/set-up-a-staging-environment-on-vercel) - Step-by-step staging setup
- [GitHub Integration](https://vercel.com/docs/git/vercel-for-github) - Automatic deployment configuration
- [Environment Variables Guide](https://vercel.com/docs/environment-variables) - Comprehensive variable management
- [Project Configuration](https://vercel.com/docs/project-configuration) - vercel.json configuration reference
- [GitHub Actions with Vercel](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel) - Advanced deployment workflows
</references>

## 🏷️ Metadata

<meta>
research-date: 2025-07-29
confidence: high
version-checked: Vercel 2025 platform updates
platform-features: Rolling releases, BotID security, custom environments
</meta>