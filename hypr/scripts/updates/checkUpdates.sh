#!/bin/bash

count=$(checkupdates | wc -l)

if [[ $count == "0" ]]; then
echo ""
elif [[ $1 == "newLine" ]]; then
  echo "$count\n"
else
  echo "$count "
fi
