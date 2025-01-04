#!/usr/bin/env python3

import http.server
import socketserver

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add no-cache headers
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == "__main__":
    PORT = 10001
    Handler = NoCacheHandler

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving no-cache on port {PORT}")
        httpd.serve_forever()