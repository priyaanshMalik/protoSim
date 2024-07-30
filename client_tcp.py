import socket
import threading


# Function to send messages to the server
def send_messages(client_socket):
    while True:
        message = input("You: ")
        client_socket.send(message.encode("utf-8"))


# Function to receive messages from the server
def receive_messages(client_socket):
    while True:
        try:
            message = client_socket.recv(1024).decode("utf-8")
            if not message:
                break
            print(f"Server: {message}")
        except ConnectionResetError:
            break

    client_socket.close()


# Main function to start the client
def start_client():
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(("127.0.0.1", 65432))

    # Start threads for sending and receiving messages
    send_thread = threading.Thread(target=send_messages, args=(client,))
    receive_thread = threading.Thread(target=receive_messages, args=(client,))
    send_thread.start()
    receive_thread.start()

    send_thread.join()
    receive_thread.join()


if __name__ == "__main__":
    start_client()
