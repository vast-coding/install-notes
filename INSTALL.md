# Install a new Next.js 13 app using pnpm with

- auto-formatting
- Next 13 with src/app directory
- shadcn/ui
- Tailwind css

Copy and paste the following code into the terminal to initialize an opinionated Next app.
The only interaction is for the` shadcn/ui` initialization.

Assumes you have the [code command](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) for Visual Studio Code

```sh
pnpm create next-app          \
    --app                     \
    --eslint                  \
    --import-alias     "@/*"  \
    --src-dir                 \
    --tailwind                \
    --ts                      \
    --use-pnpm                \
    my-app

cd my-app
git add .
git commit -m 'create Next app'
code .

# Add auto-formatting on commit

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
git add .
pnpm format
git commit -m 'add auto-format'

# Add shadcn ui

# select all defaults except choose src/app/globals.css for the globals.css location
pnpm dlx shadcn-ui@latest init
pnpm dlx shadcn-ui add button
git add .
git commit -m 'add shadcn'
```
