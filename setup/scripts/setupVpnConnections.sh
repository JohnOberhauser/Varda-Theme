#!/usr/bin/env bash

USERNAME="$1"
PASS="$2"

for f in  ../openvpn/*.ovpn; do
  nmcli c i type openvpn file "$f"
  nmcli c mod "$(basename -s .ovpn "$f")" \
    +vpn.data "connection-type=password-tls, username=$USERNAME" \
    vpn.secrets "password=$PASS"
done
