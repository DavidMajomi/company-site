# Here are some core things to remember whenever you work in this codebase:
- Follow existing patterns when possible
- Also make sure to check for possible existing or extensible solutions in the codebase before creating new files or new solutions
- This repo uses pnpm; prefer `pnpm run build`, `pnpm run lint`, and other `pnpm` scripts over `npm` commands
- Do not hand roll icons. Rather, import icons from lucide react


## Cleanup process
- Use jscpd for duplicate detection as part of your clean up process
- Use Knip to remove deadcode from the codebase

## Cursor Cloud specific instructions

### Project layout
The Next.js app lives in `/workspace/company`. All `pnpm` commands must run from that directory.

### Available scripts (see `company/package.json`)
| Command | Purpose |
|---|---|
| `pnpm run dev` | Dev server on `0.0.0.0:5000` |
| `pnpm run build` | Production build |
| `pnpm run lint` | ESLint |
| `pnpm run knip` | Dead-code detection (exits non-zero when issues found) |

### Caveats
- `pnpm install` may warn about ignored build scripts for `sharp` and `unrs-resolver`. These do not affect functionality.
- There are no environment variables, `.env` files, databases, or external services required.
- All site content is hardcoded in `app/data/*.ts` files.
- The contact page has no form — it only displays contact information.
