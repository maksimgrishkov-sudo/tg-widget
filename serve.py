"""
Статический сервер для виджета без блокирующего reverse-DNS lookup
(стандартный http.server делает socket.getfqdn() на каждый запрос,
что подвисает на VPS и блокирует остальные соединения).
"""
import http.server
import socketserver


class FastHandler(http.server.SimpleHTTPRequestHandler):
    def address_string(self):
        return self.client_address[0]


class ThreadingServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True


if __name__ == "__main__":
    server = ThreadingServer(("0.0.0.0", 8080), FastHandler)
    print("Serving on 0.0.0.0:8080")
    server.serve_forever()
