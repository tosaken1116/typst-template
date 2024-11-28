#!/bin/bash

brew update
brew install typst
brew install typstyle
brew install go-task/tap/go-task
npm install -g commitizen cz-customizable
go install github.com/evilmartians/lefthook@latest
lefthook install

echo "Typst, Taskfile, and Commitizen have been installed successfully."
