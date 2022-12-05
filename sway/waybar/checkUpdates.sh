#!/bin/bash

count=$(checkupdates | wc -l)

if [[ $count == "0" ]]; then
  echo " "
else
  echo $count 
fi
