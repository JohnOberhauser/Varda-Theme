result="$($HOME/workspace/OkPanel/bin/okpanel checkLock)"

echo $result

if [ $result = "locked" ]; then
  systemctl suspend
fi