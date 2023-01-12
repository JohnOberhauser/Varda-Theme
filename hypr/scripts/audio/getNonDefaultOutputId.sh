#!/bin/bash

# ignores yeti output
wpctl status | grep -v Yeti | sed -n '/Sinks:/,$p' | awk '1;/Sink endpoints:/{exit}' | tail -n +2 | head -n -2 | sed "/*/d" | awk 'sub(/^.{8}/,"")' | awk -F "." '{print $1}'