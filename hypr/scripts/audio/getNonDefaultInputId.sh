#!/bin/bash

wpctl status | sed -n '/Sources:/,$p' | awk '1;/Source endpoints:/{exit}' | tail -n +2 | head -n -2 | sed "/*/d" | awk 'sub(/^.{8}/,"")' | awk -F "." '{print $1}'