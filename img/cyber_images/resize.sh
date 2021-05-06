#!/bin/sh
rm *resized*
for f in *.jpg; do convert $f -resize 1024x512^ -gravity center -extent 1024x512 "$(basename $f .jpg)_resized.jpg"; done

