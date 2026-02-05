if [ "$(loginctl show-session "$XDG_SESSION_ID" -p LockedHint --value)" = "yes" ]; then
  /home/john/workspace/OkPanel/bin/okpanel lock
else
  echo "unlocked"
fi