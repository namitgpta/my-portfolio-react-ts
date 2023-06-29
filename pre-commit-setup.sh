#!/bin/bash

# Function to check if a command is available
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check the operating system
case "$(uname -s)" in
  Linux*)   os="Linux";;
  Darwin*)  os="macOS";;
  CYGWIN*)  os="Windows";;
  MINGW*)   os="Windows";;
  *)        os="Unknown";;
esac

# Install Homebrew if not installed (macOS)
if [ "$os" == "macOS" ] && ! command_exists brew; then
  echo "Homebrew not found. Installing Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Install Python if not installed
if [[ "$(python3 -V)" =~ "Python 3" || "$(python -V)" =~ "Python" ]] ; then
  echo "Python is already installed."
  python3 -m ensurepip
else
  echo "Python not found. Installing Python..."
  case "$os" in
    Linux)
      sudo apt-get update
      sudo apt-get install -y python
      ;;
    macOS)
      brew install python
      ;;
    Windows)
      pythonUrl="https://www.python.org/ftp/python/3.11.2/python-3.11.2-amd64.exe"
      pythonInstaller="$TEMP/python-installer.exe"
      curl -o "$pythonInstaller" "$pythonUrl"

      # Install Python
      curr_user=$(echo ~)
      pythonInstallPath="$curr_user/AppData/Local/Programs/Python/"
      windows_path=$(echo "$pythonInstallPath" | sed 's/\//\\/g' | sed 's/^\\\(.\)/\U\1:/')
      "$pythonInstaller" /quiet InstallAllUsers=1 PrependPath=1 TargetDir="$windows_path"

      # Add Python to PATH environment variable
      export PATH="$pythonInstallPath:$PATH"
      export PATH="$pythonInstallPath/Scripts:$PATH"

      # Verify Python installation
      python --version
      ;;
    *)
      echo "Unsupported operating system. Please install Python manually."
      exit 1
      ;;
  esac
fi

# Install detect-secrets if not installed
if ! command_exists detect-secrets; then
  echo "detect-secrets not found. Installing detect-secrets..."
  pip3 install detect-secrets
  if [ "$os" == "macOS" ] ; then
    brew install detect-secrets
  fi
else
  echo "detect-secrets is already installed."
fi

# Install pre-commit if not installed
if ! command_exists pre-commit; then
  echo "pre-commit not found. Installing pre-commit..."
  pip3 install pre-commit
  if [ "$os" == "macOS" ] ; then
    brew install pre-commit
  fi
else
  echo "pre-commit is already installed."
fi

# Install pre-commit hooks if inside a Git repository, otherwise print message
if command_exists git && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Installing pre-commit hooks..."
  pre-commit install
else
  echo "Not inside a Git repository. Pre-commit hooks not installed."
fi