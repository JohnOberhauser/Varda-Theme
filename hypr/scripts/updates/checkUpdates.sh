#!/bin/bash

count=$(checkupdates | wc -l)

if [[ $count == "0" ]]; then
echo ""
elif [[ $1 == "newLine" ]]; then
  echo "\n$count"
else
  echo "$count "
fi
