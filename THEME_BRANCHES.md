# The Dutch Queen - Theme Branch Guide

## Current Branch Setup

### Theme Prototype Branches (For Client Variants)
Each branch has an **automatic Vercel preview URL** that updates when you push changes:

| Branch Name | Vercel Preview URL | Purpose |
|-------------|-------------------|---------|
| `theme/royal-bronze` | `thedutchqueen-git-theme-royal-bronze.vercel.app` | Royal bronze theme variant |
| `theme/royal-gold` | `thedutchqueen-git-theme-royal-gold.vercel.app` | Royal gold theme variant |
| `theme/midnight-luxury` | `thedutchqueen-git-theme-midnight-luxury.vercel.app` | Dark luxury theme |
| `theme/platinum-elegance` | `thedutchqueen-git-theme-platinum-elegance.vercel.app` | Platinum/silver theme |
| `theme/burgundy-rock` | `thedutchqueen-git-theme-burgundy-rock.vercel.app` | Burgundy rock theme |
| `theme/royal-bronze-v2` | `thedutchqueen-git-theme-royal-bronze-v2.vercel.app` | Enhanced royal bronze |
| `theme/burgundy-rock-v1` | `thedutchqueen-git-theme-burgundy-rock-v1.vercel.app` | Original burgundy rock |

### Working Branch Commands

#### To Switch to a Theme Branch:
```bash
git checkout theme/royal-bronze    # Work on royal bronze theme
git checkout theme/royal-gold      # Work on royal gold theme
git checkout theme/midnight-luxury # Work on midnight luxury theme
# etc...
```

#### To Push Changes and Update Preview:
```bash
git add .
git commit -m "feat: update hero section colors"
git push origin theme/royal-bronze
# → Automatically updates: thedutchqueen-git-theme-royal-bronze.vercel.app
```

#### To Check Current Branch:
```bash
git branch --show-current
```

#### To See All Theme Branches:
```bash
git branch -a | grep theme
```

## Client Presentation URLs

### Ready-to-Share Preview Links:
- **Royal Bronze**: https://thedutchqueen-git-theme-royal-bronze.vercel.app
- **Royal Gold**: https://thedutchqueen-git-theme-royal-gold.vercel.app  
- **Midnight Luxury**: https://thedutchqueen-git-theme-midnight-luxury.vercel.app
- **Platinum Elegance**: https://thedutchqueen-git-theme-platinum-elegance.vercel.app
- **Burgundy Rock**: https://thedutchqueen-git-theme-burgundy-rock.vercel.app
- **Royal Bronze V2**: https://thedutchqueen-git-theme-royal-bronze-v2.vercel.app
- **Burgundy Rock V1**: https://thedutchqueen-git-theme-burgundy-rock-v1.vercel.app

## Development Workflow

### To Start Working on a Theme:
1. Tell Claude which theme: "Let's work on theme/royal-gold"
2. Claude will: `git checkout theme/royal-gold`
3. Make changes together
4. Push to update preview: `git push origin theme/royal-gold`
5. Share updated URL with client

### Production Deployment:
```bash
# When client approves a theme, merge to main:
git checkout main
git merge theme/royal-bronze  # (or whichever theme is approved)
git push origin main
# → Deploys to production: thedutchqueen.com
```

## Notes
- Each theme branch is completely independent
- All branches start from the same base (current main)
- Vercel automatically builds and deploys every push
- Preview URLs are persistent until branch is deleted
- No DNS configuration needed for preview URLs