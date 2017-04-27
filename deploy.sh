#!/bin/bash

git log -1 --pretty=%B  | sed 's/^.*: //' | sed '$ d' > commit.txt
PREV_COMMIT=$(cat commit.txt)
rm commit.txt

if [ "$PREV_COMMIT" == "Travis CI Automaticaly Benchmarks" ]
then
  echo "Skipping deploy; just doing a build."
  exit 0
fi

echo "Deploy."

git config user.name "A-gambit"
git config user.email "a.gambit.gregory@gmail.com"
git config user.password $GIT_TOKEN
git remote add upstream "https://$GIT_TOKEN@github.com/A-gambit/CSS-IN-JS-Benchmarks.git"
git fetch upstream
git reset upstream/$BRANCH
git add RESULT.md
git commit -m 'Travis CI Automaticaly Benchmarks'
git push -q upstream HEAD:$BRANCH
