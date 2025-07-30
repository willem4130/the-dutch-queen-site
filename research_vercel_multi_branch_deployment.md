# Vercel Multi-Branch Deployment Research Summary

_Generated: 2025-07-30 | Sources: 5 official Vercel sources + community practices_

## 🎯 Quick Reference

<key-points>
- Vercel Pro plan ($20/user/month) required for unlimited environments and custom branch domains
- Each branch automatically gets preview URL: `project-git-branchname.vercel.app`
- Branch domains allow persistent custom URLs for specific branches
- Custom environments enable staging workflows with environment-specific variables
- Production branch can be changed from default `main` to any branch
</key-points>

## 📋 Overview

<summary>
Vercel provides robust multi-branch deployment capabilities for theme comparison workflows. The platform automatically creates preview deployments for every branch, with options to assign custom domains to specific branches for persistent access. This enables side-by-side theme comparison across multiple environments.
</summary>

## 🔧 Implementation Details

<details>
### Plan Requirements

**Hobby Plan (Free)**
- Basic preview deployments for all branches
- Auto-generated URLs only (`project-git-branchname.vercel.app`)
- Limited environment configuration

**Pro Plan ($20/user/month) - Recommended**
- Unlimited environments
- Custom branch domains
- Branch-specific environment variables
- Advanced deployment controls

### Setting Up Persistent Branch Environments

#### 1. Configure Production Branch
```bash
# In Vercel Dashboard: Settings > Git > Production Branch
# Options:
# - main (default)
# - master (fallback)
# - Any custom branch (e.g., 'production')
```

#### 2. Branch Domain Assignment
```bash
# For each theme branch:
# 1. Go to Project Settings > Domains
# 2. Add custom domain/subdomain
# 3. Assign to specific Git branch
# 4. Push commit to branch to activate
```

#### 3. Environment Variables per Branch
```javascript
// vercel.json - Branch-specific configurations
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "feature/bronze-theme-v2": true,
      "backup/royal-rock-theme-v1": true,
      "develop": true,
      "feature/management-summary-deployment": true
    }
  },
  "env": {
    "THEME_NAME": {
      "production": "royal-rock",
      "preview": {
        "feature/bronze-theme-v2": "bronze-v2",
        "backup/royal-rock-theme-v1": "royal-rock-v1"
      }
    }
  }
}
```

### Recommended Branch Structure for The Dutch Queen

```
main (production)                    → dutchqueen.com
├── develop (staging)                → staging.dutchqueen.com
├── feature/bronze-theme-v2          → bronze.dutchqueen.com
├── backup/royal-rock-theme-v1       → royal.dutchqueen.com
└── feature/management-summary       → management.dutchqueen.com
```

### Auto-Generated URLs (Always Available)
```
main                                 → thedutchqueen-git-main.vercel.app
feature/bronze-theme-v2              → thedutchqueen-git-bronze-theme-v2.vercel.app
backup/royal-rock-theme-v1           → thedutchqueen-git-royal-rock-theme-v1.vercel.app
develop                              → thedutchqueen-git-develop.vercel.app
feature/management-summary-deployment → thedutchqueen-git-management-summary-deployment.vercel.app
```

### Theme Comparison Workflow Setup

#### Step 1: Configure Branch Domains
```bash
# Add these subdomains in Vercel Dashboard
bronze.dutchqueen.com     → feature/bronze-theme-v2
royal.dutchqueen.com      → backup/royal-rock-theme-v1
staging.dutchqueen.com    → develop
management.dutchqueen.com → feature/management-summary-deployment
```

#### Step 2: Branch-Specific Environment Variables
```javascript
// For each branch, set:
THEME_VARIANT=bronze|royal|management
ENVIRONMENT=production|staging|preview
ANALYTICS_ID=different-for-each-theme
```

#### Step 3: SEO Protection for Non-Production
```javascript
// In your app's head component
{process.env.VERCEL_ENV !== 'production' && (
  <meta name="robots" content="noindex,nofollow" />
)}
```

</details>

## ⚠️ Important Considerations

<warnings>
- Branch domains require Pro plan ($20/user/month minimum)
- Custom domains must be configured in DNS separately
- Auto-generated Vercel URLs cannot be disabled
- Preview environments don't inherit production SEO protection automatically
- Branch deletions don't automatically remove deployments
- Each branch push triggers new deployment
</warnings>

## 🔗 Resources

<references>
- [Vercel Environments Documentation](https://vercel.com/docs/deployments/environments) - Complete environment setup guide
- [Branch Domains Feature](https://vercel.com/blog/branch-domains) - Official branch domain announcement
- [Custom Production Branch Setup](https://vercel.com/blog/custom-production-branch) - Production branch configuration
- [Vercel Pricing Plans](https://vercel.com/pricing) - Plan comparison and features
- [Multi-Environment Best Practices](https://robearlam.com/blog/multi-environment-deployments-to-vercel) - Community implementation guide
</references>

## 🏷️ Metadata

<meta>
research-date: 2025-07-30
confidence: high
version-checked: 2025 Vercel features
plan-requirement: Pro ($20/user/month) for full functionality
</meta>