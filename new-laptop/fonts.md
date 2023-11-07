# Fonts

- [Home](./new-laptop.md)
- [Set up Homebrew to install fonts](#set-up-homebrew-to-install-fonts)
- [Install Fira Fonts](#install-fira-fonts)
- [Setup icons in terminals](#setup-icons-in-terminals)
- [Install Iosevka font](#install-iosevka-font)
- [Display font-families installed](#see-which-font-family-is-installed-use-in-vscode-font-family-settings)
- [Use Emmet in vscode](#use-emmet-in-vscode)

## Set up Homebrew to install fonts

```sh
brew tap homebrew/cask-fonts
```

## Install Fira Fonts

```sh
brew install --cask font-fira-code
brew install --cask font-fira-mono
brew install --cask font-fira-mono-for-powerline
brew install --cask font-fira-sans
```

## Setup icons in terminals

To show icons in terminals go to settings for
`mac terminal settings` and
`vscode settings terminal `
and set font:

```sh
FuraMono Nerd Font Mono
```

## Install Iosevka font

Display available fonts

```sh
brew search font-iosevka
brew install font-iosevka # iosevka
brew install font-jetbrains-mono # JetBrainsMonoNL-light
brew install font-source-code-pro
brew install font-source-code-pro #Monoid

```

## See which font family is installed

For use in vscode font-family settings.

```sh
❯ ls ~/Library/Fonts

Fira Code, monospace
Source Code Pro
JetBrainsMonoNL-light
Victor Mono
iosevka # regular
iosevka-thin
iosevka-extralight
iosevka-light
iosevka-medium
iosevka-heavy
iosevka-semibold
iosevka-bold
```

## Use Emmet in vscode

Set Emmet to trigger in `*.js` react files. change vscode setting, refer emmet docs.
