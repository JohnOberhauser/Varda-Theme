#!/bin/bash
set -f

currentSink=$(pacmd list-sinks | grep "* index:")
currentSinkIndex=${currentSink: -1}
echo current sink index: $currentSinkIndex

availableSinks=$(pacmd list-sinks | grep " index: " | sed 's/* index://g' | sed 's/index://g')
echo available sinks: $availableSinks

availableSinks=(${availableSinks// / })
availableSinksCount=${#availableSinks[@]}

sinkInputs=$(pacmd list-sink-inputs | grep " index: " | sed 's/index://g')
sinkInputs=(${sinkInputs// / })

count=1
for sink in "${availableSinks[@]}"
do
    if [[ $currentSinkIndex == $sink ]]; then
      newSinkIndex=0
      # if this is the last index, set sink to first in list
      if [[ $count == $availableSinksCount ]]; then
        newSinkIndex=${availableSinks[0]}
      else # otherwise set sink to the next one
        newSinkIndex=${availableSinks[$(($count))]}
      fi
      pacmd set-default-sink $newSinkIndex
      echo new default sink: $newSinkIndex
      echo swapping inputs:
      for input in "${sinkInputs[@]}"
      do
        echo $input to $newSinkIndex
        pacmd move-sink-input $input $newSinkIndex
      done
      break
    fi
    count=$(($count+1))
done
