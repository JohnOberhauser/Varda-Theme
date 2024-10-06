# Define the socket path
SOCKET_PATH="/tmp/kitty_socket"

# Remove any existing socket file
rm -f "$SOCKET_PATH"

# Start Kitty in detached mode with remote control socket
kitty --detach --listen-on "unix:$SOCKET_PATH"

# Wait until the socket file exists (Kitty is ready)
#while [ ! -S "$SOCKET_PATH" ]; do
#    sleep 0.1
#done
sleep 0.2

# Use Kitty remote control to send the 'yazi' command
kitty @ --to "unix:$SOCKET_PATH" send-text "ya\n"
