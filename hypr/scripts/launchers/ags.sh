#!/bin/bash

ags -q

if [[ $VARDA == "laptop" ]]; then
  ags --config $HOME/.config/ags/topbarConfig.js
else
  ags --config $HOME/.config/ags/sidebarConfig.js
fi