result="$(loginctl show-session "$XDG_SESSION_ID" -p LockedHint --value)"

echo $result

if [ $result = "yes" ]; then
  echo "do nothing"
else
  /home/john/workspace/OkPanel/bin/okpanel lock
fi