# Warp Rules: elova-sales

## CRITICAL REQUIREMENT: Always Create Pull Requests

**YOU MUST NEVER PUSH DIRECTLY TO `staging` OR `main`. ALWAYS CREATE A PULL REQUEST.**

After making your changes and pushing your branch:

```bash
gh pr create --base staging --title "[LINEAR-ID] Brief description" --body "Fixes LINEAR-ID"
```

## Repository Info
- **Name**: elova-sales (Marketing website)
- **Tech**: Next.js 15, Sanity CMS, Tailwind
- **Default branch**: `staging`

## Workflow
1. Make changes on your feature branch
2. Commit: `git commit -m "feat(LINEAR-ID): description"`
3. Push: `git push origin your-branch`
4. **CREATE PR**: `gh pr create --base staging --title "[LINEAR-ID] Title" --body "Fixes LINEAR-ID"`
5. Post PR link to Linear
6. Wait for user to review and merge

## CI Requirements
- Lint must pass
- Build must succeed

## What NOT to Do
- ❌ Never push directly to `staging` or `main`
- ❌ Never merge your own PR
- ❌ Never bypass CI checks
- ❌ Never commit secrets or `.env` files
