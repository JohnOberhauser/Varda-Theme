#!/bin/sh
sed -i \
         -e 's/rgb(0%,0%,0%)/#0c0e11/g' \
         -e 's/rgb(100%,100%,100%)/#d0ebee/g' \
    -e 's/rgb(50%,0%,0%)/#0c0e11/g' \
     -e 's/rgb(0%,50%,0%)/#52677C/g' \
 -e 's/rgb(0%,50.196078%,0%)/#52677C/g' \
     -e 's/rgb(50%,0%,50%)/#0c0e11/g' \
 -e 's/rgb(50.196078%,0%,50.196078%)/#0c0e11/g' \
     -e 's/rgb(0%,0%,50%)/#d0ebee/g' \
	"$@"
