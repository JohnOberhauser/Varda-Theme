#!/bin/bash

bluetoothctl connect C0:DC:DA:10:7A:4C

# () creates a child process and & creates a grandchild process.  Do this because calling this script from
# eww doesn't work well.  I think it's because of the sleep in the script
( $HOME/.config/hypr/scripts/audio/swapOutputToBluetooth.sh & )