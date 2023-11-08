# Install a new Next.js 13 app using pnpm with Tailwind, auto-formatting, shadcn ui, Clerk authentication.

## Create Next app

Without going through the CLI questions

```sh
pnpm create next-app    \
    --app               \
    --eslint            \
    --import-alias      \
    --src-dir           \
    --tailwind          \
    --ts                \
    --use-pnpm          \
    nextjs-auth

cd nextjs-auth
git add .
git commit -m 'create Next app'
code .
```

## Add auto-formatting

The line with sed deletes the last line of `.hushy/pre-commit` to replace it with our actual command.

```sh
pnpm add --save-dev --save-exact prettier
pnpm add --save-dev @ianvs/prettier-plugin-sort-imports
pnpm add --save-dev lint-staged
pnpm add --save-dev husky
pnpm dlx husky-init
echo '{"*": "prettier --write  --ignore-unknown"}' >> .lintstagedrc
echo 'module.exports = {plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports"),]}' >> .prettierrc.js
sed -i '' -e '$ d' .husky/pre-commit
echo 'pnpm lint-staged' >> .husky/pre-commit
echo 'pnpm-lock.yaml' >> .prettierignore

# git add.
git add .husky .prettierignore .prettierrc.js package.json pnpm-lock.yaml .lintstagedrc
git commit -m 'add auto-format'
```
gh repo create notes --private --source=. --remote=upstream
## Add shadcn ui

```sh
pnpm dlx shadcn-ui@latest init
pnpm dlx shadcn-ui add button

# git add .
git add components.json components/ui/button.tsx lib/utils.ts package.json pnpm-lock.yaml app/globals.css tailwind.config.js
git commit -m 'add shadcn'
```

## Add mdx

edit `tailwind.config.js`

```js
  plugins: [require("@tailwindcss/typography")],
```

```sh
pnpm add next-mdx-remote
pnpm add gray-matter
pnpm add @tailwindcss/typography

git add .
git commit -m 'install mdx'
```

## Add Prisma

```sh
pnpm add --save-dev prisma
pnpm add @prisma/client
pnpm exec prisma init
```

after initializing model in `prisma/schema.prisma`

```sh
pnpm dlx prisma generate

# wake db if on free tier by signing in
pnpm dlx prisma db push
```


## Add Clerk authentication

Initialize App in Clerk website and then copy `.env` variables from Clerk website under dropdown: 
`Developers/Api keys`

```sh
pnpm add @clerk/nextjs
```

`.env`

```sh 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

## Add T3 and zod

```sh
pnpm add @t3-oss/env-nextjs
pnpm add zod
```







