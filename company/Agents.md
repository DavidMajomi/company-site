# Here are some core things to remember whenever you work in this codebase:
- Follow existing patterns when possible
- Also make sure to check for possible existing or extensible solutions in the codebase before creating new files or new solutions
- This repo uses pnpm; prefer `pnpm run build`, `pnpm run lint`, and other `pnpm` scripts over `npm` commands
- Do not hand roll icons. Rather, import icons from lucide react
- After making changes to styling, make sure it is responsive


## Cleanup process
- Use jscpd for duplicate detection as part of your clean up process
- Use Knip to remove deadcode from the codebase
