#!/usr/bin/env python3

import http.server
import socketserver
import threading
import sys
import json
import os
import struct

# Native Messaging Functionality
# def send_message(message):
#     response = json.dumps(message)
#     sys.stdout.write(f"{len(response):08x}{response}")
#     sys.stdout.flush()

def send_message(message):
    """Send a JSON message to the browser."""
    message_json = json.dumps(message)
    message_bytes = message_json.encode('utf-8')
    sys.stdout.buffer.write(struct.pack('I', len(message_bytes)))  # Prefix with 4-byte length
    sys.stdout.buffer.write(message_bytes)  # Write the JSON string
    sys.stdout.buffer.flush()

# External Message Handling
FIFO_PATH = "/tmp/native_messaging_fifo"

def create_fifo():
    if not os.path.exists(FIFO_PATH):
        os.mkfifo(FIFO_PATH)

def listen_fifo():
    with open(FIFO_PATH, "r") as fifo:
        while True:
            line = fifo.readline().strip()
            if line:
                yield line

def start_fifo_listener():
    for line in listen_fifo():
        print(line)
        # Forward the message to the native messaging extension
        try:
            message = json.loads(line)
            send_message(message)
        except json.JSONDecodeError:
            send_message({"status": "error", "message": "Invalid JSON format"})

# Main Entry Point
if __name__ == "__main__":
    # Create FIFO for external messages
    create_fifo()

    # Run FIFO listener
    start_fifo_listener()
