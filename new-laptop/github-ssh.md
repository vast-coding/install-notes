# Setup GitHub and SSH keys

- [Home](./new-laptop.md)
- [Install xcode](#install-xcode)
- [Setup GitHub SSH keys](#setup-github-ssh-keys)
- [Create SSH keys](#create-ssh-keys)
- [Configure gitHub to use your new ssh key](#configure-github-to-use-your-new-ssh-key)


## Install xcode

Git clone fails with:

`invalid active developer path`

Fix:

```sh
xcode-select --install
```

## Setup GitHub SSH keys

Git clone fails:

```sh
Cloning into 'ui'...
The authenticity of host 'github.com (20.205.243.166)' can’t be established.
```

Reason: no SSH keys present

## Create SSH keys

Create `~/.ssh folder`

```sh
# ssh-keygen -t ed25519 -C "your_github_email_address@example.com"
ssh-keygen -t ed25519 -C “vast.coding@gmail.com”
```

Don’t be lazy add pass-phrase to key-chain, so no one else can access your ssh-keys if they get your computer

Error:

```sh
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```

[Generating a new ssh key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent##adding-your-ssh-key-to-the-ssh-agent)

Start in bg

```sh
eval "$(ssh-agent -s)"
> Agent pid 59566
touch ~/.ssh/config
```

write to` ~/.ssh/config`

` ~/.ssh/config`

```
Host github.com
AddKeysToAgent yes
UseKeychain yes
IdentityFile ~/.ssh/id_ed25519
```

```sh
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

## Configure gitHub to use your new ssh key

```sh
pbcopy < ~/.ssh/id_ed25519.pub
```

Copies the contents of the id_ed25519.pub file to your clipboard

follow instructions - ssh instead of access

[Connecting to github with ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

