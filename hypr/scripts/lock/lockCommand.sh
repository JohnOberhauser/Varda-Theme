result="$($HOME/workspace/OkPanel/bin/okpanel checkLock)"

echo $result

if [ $result = "unlocked" ]; then
  /home/john/workspace/OkPanel/bin/okpanel lock
fi