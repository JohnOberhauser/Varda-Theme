#!/usr/bin/env bash

USERNAME="$1"
PASS="$2"

for f in  ../openvpn/*.ovpn; do
  ./addVpnConnection.sh $f $1 $2
done
