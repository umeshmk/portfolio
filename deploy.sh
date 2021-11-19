#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run prod


# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
echo "Deploying....."
# echo "https://umeshmk.github.io/" 
# echo "https://umeshmk.github.io/" > CNAME

git init
git add -A
git commit -m "deploy" &&

git push -f git@github.com:umeshmk/umeshmk.github.io.git master:gh-pages

cd -