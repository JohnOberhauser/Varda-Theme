result="$(loginctl show-session "$XDG_SESSION_ID" -p LockedHint --value)"

echo $result

if [ $result = "yes" ]; then
  /home/john/workspace/OkPanel/bin/okpanel lock
else
    echo "unlocked"
fi