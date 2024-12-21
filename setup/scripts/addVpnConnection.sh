#!/usr/bin/env bash

FILE="$1"
USERNAME="$2"
PASS="$3"

nmcli c i type openvpn file "$1"
nmcli c mod "$(basename -s .ovpn "$1")" \
  +vpn.data "connection-type=password-tls, username=$USERNAME" \
  vpn.secrets "password=$PASS"
