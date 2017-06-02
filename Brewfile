cask_args appdir: "/Applications"
tap "caskroom/cask"
tap "telemachus/brew", "https://telemachus@bitbucket.org/telemachus/brew.git"
brew "imagemagick"
brew "mysql", restart_service: true, conflicts_with: ["homebrew/versions/mysql56"]
brew "emacs", args: ["with-cocoa", "with-gnutls"]
#during install, at this point zsh asks for a password, i entered my admin password but it said it could not install google-chrome, my guess is that I have to enter my appleId password- try it next time
cask "google-chrome"
cask "java" unless system "/usr/libexec/java_home --failfast"
cask "firefox", args: { appdir: "~/my-apps/Applications" }
mas "1Password", id: 443987910
