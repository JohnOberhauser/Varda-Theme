#!/bin/bash

wpctl status | sed -n '/Sinks:/,$p' | awk '1;/Sink endpoints:/{exit}' | tail -n +2 | head -n -2 | grep '*' | cut -d '.' -f2,3