#!/bin/bash

wpctl status | sed -n '/Sinks:/,$p' | awk '1;/Sink endpoints:/{exit}' | tail -n +2 | head -n -2 | awk 'sub(/^.{11}/,"")'