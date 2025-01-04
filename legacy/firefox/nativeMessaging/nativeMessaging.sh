#!/bin/bash

FIFO_PATH="/tmp/native_messaging_fifo"

# Create FIFO if it doesn't exist
if [[ ! -p "$FIFO_PATH" ]]; then
    mkfifo "$FIFO_PATH"
fi

# Function to send a message in Native Messaging format
send_message() {
    local message="$1"
    local message_length
    message_length=$(printf '%08x' "$(echo -n "$message" | wc -c)")
    echo -ne "$message_length$message" >&1
}

write_message() {
  local message=$1
  # Calculate the length of the message
  local length=${#message}
  # Convert length to 4-byte little-endian
  printf "$(printf '\\x%x' $((length & 0xFF)))"
  printf "$(printf '\\x%x' $(((length >> 8) & 0xFF)))"
  printf "$(printf '\\x%x' $(((length >> 16) & 0xFF)))"
  printf "$(printf '\\x%x' $(((length >> 24) & 0xFF)))"
  # Send the message
  echo -n "$message"
}

# Function to listen to the FIFO and process messages
listen_fifo() {
    while true; do
        if read -r line <"$FIFO_PATH"; then
            if [[ -n "$line" ]]; then
                # Attempt to parse the JSON message (basic validation)
                if echo "$line" | jq empty 2>/dev/null; then
                    write_message "$line"
                else
                    write_message '{"status":"error","message":"Invalid JSON format"}'
                fi
            fi
        fi
    done
}

# Ensure jq is installed for JSON validation
if ! command -v jq &>/dev/null; then
    echo "Error: jq is required for JSON parsing. Please install jq and try again."
    exit 1
fi

# Start the FIFO listener
listen_fifo
