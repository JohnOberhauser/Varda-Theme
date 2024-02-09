#!/bin/bash

# ignores yeti output and Navi (not sure what navi is)
wpctl status | grep -v Yeti | grep -v Navi | sed -n '/Sinks:/,$p' | awk '1;/Sink endpoints:/{exit}' | tail -n +2 | head -n -2 | sed "/*/d" | awk '{print $2}' | awk -F "." '{print $1}'