#!/usr/bin/env bash

yarn build &&
cp CNAME docs/ &&
git add . &&
git commit -m 'deploy' &&
git push
