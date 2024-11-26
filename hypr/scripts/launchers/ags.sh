#!/bin/bash

agsv1 -q

if [[ $VARDA == "laptop" ]]; then
  agsv1 --config $HOME/workspace/Varda-Theme/agsv1/topbarConfig.js
else
  agsv1 --config $HOME/workspace/Varda-Theme/agsv1/sidebarConfig.js
fi