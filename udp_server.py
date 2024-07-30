import socket
import threading


# Function to handle receiving messages from clients
def receive_messages(server_socket):
    while True:
        message, client_address = server_socket.recvfrom(1024)
        print(f"Received from {client_address}: {message.decode('utf-8')}")
        server_socket.sendto(
            f"Echo: {message.decode('utf-8')}".encode("utf-8"), client_address
        )


# Main function to start the server
def start_server():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    server_socket.bind(("0.0.0.0", 9999))
    print("Server listening on port 9999")

    receive_thread = threading.Thread(target=receive_messages, args=(server_socket,))
    receive_thread.start()
    receive_thread.join()


if __name__ == "__main__":
    start_server()
