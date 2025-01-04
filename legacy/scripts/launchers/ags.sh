#!/bin/bash

ags quit

if [[ $VARDA == "laptop" ]]; then
  ags run
else
  ags run -a "sidebar"
fi