
# Add homebrew

- [Home](./new-laptop.md)
- [Install homebrew](#install-homebrew)
- [Install utilities with Brew](#install-utilities-with-brew)
- [Configure shells](#configure-shells)
- [Set default terminal shell](#set-default-terminal-shell)


## Install homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

add brew to path

Run in terminal to add Homebrew to your PATH:

```sh
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.config/fish/config.fish
```

Check `config.fish`, the following was working on mac M1 2023.

Notice we eval brew before intializing brew casks.

`~/.config/fish/config.fish`

```sh
eval "$(/opt/homebrew/bin/brew shellenv)"
starship init fish | source
jump shell fish | source
```

## Install utilities with Brew

```sh
  brew install bash
  brew install fish
  brew install fisher
  brew install fnm
  brew install node # needed for pnpm and fnm initial. then uninstall:brew uninstall node after setting node with fnm
  brew install pnpm
  brew install starship
  brew install z

  fnm use 18
```



## Configure shells

Configure shells to use `z`, `starship` and `fnm`

```sh

# z 
echo '. `brew --prefix`/etc/profile.d/z.sh' | tee -a ~/.bashrc ~/.zshrc
fish
fisher install jethrokuan/z

# fnm
echo 'eval "$(fnm env --use-on-cd)"' | tee -a ~/.bashrc ~/.zshrc
echo "fnm env --use-on-cd | source" >> ~/.config/fish/config.fish

# starship
echo '\n eval "$(starship init zsh --print-full-init)"' >> ~/.zshrc
echo '\n eval "$(starship init bash)"' >> ~/.bashrc
echo "starship init fish | source" >> ~/.config/fish/config.fish

# exa
echo '
alias ls="exa"
alias tree="exa --tree --git-ignore --level=2"
' | tee -a ~/.bashrc ~/.zshrc

echo '
abbr --add ls exa 
abbr --add tree exa --tree --git-ignore --level=4
' | tee -a ~/.config/fish/config.fish

# git
echo '
alias gs="git status"
' | tee -a ~/.bashrc ~/.zshrc
echo '
abbr --add gs git status
' | tee -a ~/.config/fish/config.fish

# pure prompt in z shell only
echo '
fpath+=("$(brew --prefix)/share/zsh/site-functions")
autoload -U promptinit; promptinit
prompt pure
' | tee -a ~/.zshrc
```

## Set default terminal shell

### Add defaults

Show shells which have permission to be default

```sh
❯ cat /etc/shells
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

Manually edit `/etc/shells` to add `bash` and `fish` file locations
All brew packages are installed in the `opt/bin/` folder.
You can find this with `brew --prefix`.

or in terminal:

```sh
echo $(brew --prefix)/bin/bash | sudo tee -a /private/etc/shells
echo $(brew --prefix)/bin/fish | sudo tee -a /private/etc/shells

# or manually
echo /opt/homebrew/bin/bash | sudo tee -a /private/etc/shells
echo /opt/homebrew/bin/fish | sudo tee -a /private/etc/shells

sudo sh -c 'echo /opt/homebrew/bin/fish >> /etc/shells'
```

After adding installed shells

```sh
❯ cat /etc/shells
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/opt/homebrew/bin/bash
/opt/homebrew/bin/fish

```

### Set fish as default terminal shell

Find where fish is installed using fish shell

```sh
❯ command -s fish
# /opt/homebrew/bin/fish
```

Change default shell to Fish shell

```sh

 chsh -s /opt/homebrew/bin/fish
```
