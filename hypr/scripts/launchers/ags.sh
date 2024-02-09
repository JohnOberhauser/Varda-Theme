#!/bin/bash

ags -q

if [[ $VARDA == "laptop" ]]; then
  ags --config $HOME/.config/hypr/components/ags/topbarConfig.js
else
  ags --config $HOME/.config/hypr/components/ags/sidebarConfig.js
fi