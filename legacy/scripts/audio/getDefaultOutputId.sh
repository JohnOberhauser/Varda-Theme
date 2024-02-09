#!/bin/bash

wpctl status | sed -n '/Sinks:/,$p' | awk '1;/Sink endpoints:/{exit}' | tail -n +2 | head -n -2 | grep '*' | awk '{print $3}' | awk -F "." '{print $1}'