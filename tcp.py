import socket
import threading
from init import *


class TCP:
    def __init__(self, ip: str = None, port: int = None):
        self.ip = ip
        self.port = int(port)

    def setParam(self, ip: str = None, port: int = None):
        if ip != None:
            self.ip = ip
        if port != None:
            self.port = int(port)
        print("inside TCP.setParam: IP-", self.ip, " port-", self.port)

    def receive_client_msg(self, client_socket):
        while True:
            try:
                message = client_socket.recv(1024).decode("utf-8")
                if not message:
                    break
                print(f"Received: {message}")
                with app.app_context():
                    socketio.emit("receive_msg", message)
            except ConnectionResetError:
                break

        client_socket.close()

    def send_client_msg(self, msg):
        self.client_socket.sendto((msg.encode("utf-8")), 0, self.client_addr)

    def start_server(self):
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.bind((self.ip, self.port))
        self.server.listen(2)
        print("Server listening on port: ", self.port)
        self.client_socket, self.client_addr = self.server.accept()
        print(f"Accepted connection from {self.client_addr}")
        receive_thread = threading.Thread(
            target=self.receive_client_msg, args=(self.client_socket,)
        )

        # send_thread = threading.Thread(
        #     target=self.send_client_msg, args=(client_socket)
        # )

        receive_thread.start()
        # send_thread.start()

        receive_thread.join()
        # send_thread.join()

    def someFunction(self):
        pass


tcp = TCP("127.0.0.1", 65432)
