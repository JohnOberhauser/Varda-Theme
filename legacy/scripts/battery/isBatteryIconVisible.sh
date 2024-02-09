#!/bin/bash

battery=$(acpi -b | grep "Battery 0: Full, 0%")

if [[ -z "$battery" ]]; then
    echo true
else
    echo false
fi