#!/bin/bash

# pass argument for disc location, i.e. "/dev/sdd1" (without the quotes)

df 2>/dev/null | grep $1 | awk '{print $5}' | awk -F "%" '{print $1}'
