# Install a new Next.js 13 app using pnpm with

- auto-formatting
- Next 13 with src/app directory
- shadcn/ui
- Tailwind css

```sh
pnpm create next-app          \
    --app                     \
    --eslint                  \
    --import-alias     "@/*"  \
    --src-dir                 \
    --tailwind                \
    --ts                      \
    --use-pnpm                \
    nextjs-auth

cd nextjs-auth
git add .
git commit -m 'create Next app'
code .

# Add auto-formatting

# The line with sed deletes the last line of `.hushy/pre-commit` to replace it with our actual command.

pnpm add --save-dev --save-exact prettier
pnpm add --save-dev @ianvs/prettier-plugin-sort-imports
pnpm add --save-dev lint-staged
pnpm add --save-dev husky
pnpm dlx husky-init
echo '
{"*": "prettier --write  --ignore-unknown"}
' >> .lintstagedrc
echo '
module.exports = {
  semi: false,
  singleQuote: true,
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports"),]}
' >> .prettierrc.js
pnpm pkg set scripts.format="prettier --write '**/*.{css,js,jsx,ts,tsx,json,md,mdx}'"
sed -i '' -e '$ d' .husky/pre-commit
echo 'pnpm lint-staged' >> .husky/pre-commit
echo 'pnpm-lock.yaml' >> .prettierignore

# git add.
git add .husky .prettierignore .prettierrc.js package.json pnpm-lock.yaml .lintstagedrc
git commit -m 'add auto-format'
pnpm format
git add .
git commit -m 'auto-format'

# Add shadcn ui

pnpm dlx shadcn-ui@latest init
# select src/app
pnpm dlx shadcn-ui add button

# git add .
git add components.json src/components/ui/button.tsx src/lib/utils.ts package.json pnpm-lock.yaml src/app/globals.css tailwind.config.js
git commit -m 'add shadcn'
```
