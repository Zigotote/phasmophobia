#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# deploy
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Zigotote/phasmophobia-front.git origin main:gh-pages
cd -
