import socket
import threading


# Function to send messages to the server
def send_messages(client_socket, server_address):
    while True:
        message = input("You: ")
        client_socket.sendto(message.encode("utf-8"), server_address)


# Function to receive messages from the server
def receive_messages(client_socket):
    while True:
        message, _ = client_socket.recvfrom(1024)
        print(f"Server: {message.decode('utf-8')}")


# Main function to start the client
def start_client():
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    server_address = ("127.0.0.1", 9999)

    # Start threads for sending and receiving messages
    send_thread = threading.Thread(
        target=send_messages, args=(client_socket, server_address)
    )
    receive_thread = threading.Thread(target=receive_messages, args=(client_socket,))
    send_thread.start()
    receive_thread.start()

    send_thread.join()
    receive_thread.join()


if __name__ == "__main__":
    start_client()
