if [ "$(loginctl show-session "$XDG_SESSION_ID" -p LockedHint --value)" = "yes" ]; then
  echo "locked"
else
  /home/john/workspace/OkPanel/bin/okpanel lock
fi