---
name: git-push
description: Instructions for committing and pushing changes to GitHub
---

# Git Commit and Push Workflow

Use this prompt when asked to commit and push code changes to the repository.

## Prerequisites
- Ensure `git` is installed and configured
- Verify you're in the correct branch
- Confirm all changes have been made

## Workflow
1. **Stage changes**: `git add -A` (or `git add .`)
2. **Create commit**: `git commit -m "[meaningful message - max 50 chars]"`
3. **Push to remote**: `git push`

## Commit Message Guidelines
- Use imperative mood (e.g., "Setup executable npm package")
- Keep under 50 characters
- Be descriptive but concise
- Include what was changed, not how

## Error Handling
**STOP immediately if any step fails and inform the user:**
- Provide the error message
- Suggest potential causes
- Recommend corrective actions