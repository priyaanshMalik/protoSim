import socket
import threading


class UDP:
    def __init__(self, ip: str = None, port: int = None):
        self.ip = ip
        self.port = port

    def setParam(self, ip: str = None, port: int = None):
        if ip != None:
            self.ip = ip
            print(self.ip)
        if port != None:
            self.port = port
        print("inside UDP.setParam(): IP-", self.ip, " port-", self.port)

    def receive_messages(self, server_socket):
        while True:
            message, client_address = server_socket.recvfrom(1024)
            print(f"Received from {client_address}: {message.decode('utf-8')}")
            server_socket.sendto(
                f"Echo: {message.decode('utf-8')}".encode("utf-8"), client_address
            )

    # Main function to start the server
    def start_server(self):
        server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        server_socket.bind((self.ip, self.port))
        print("Server listening on port 9999")

        receive_thread = threading.Thread(
            target=self.receive_messages, args=(server_socket,)
        )
        receive_thread.start()
        receive_thread.join()


udp = UDP()
