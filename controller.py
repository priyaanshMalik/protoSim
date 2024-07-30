import threading
from init import *
from tcp import tcp
from udp import udp
from rs422 import rs422


# events of socket.io
@socketio.on("connect")
def handle_connect():
    print("Browser Client connected")


@socketio.on("disconnect")
def handle_disconnect():
    print(" Browser Client disconnected")


@socketio.on("send_msg")
def handle_send_msg(msg):
    tcp.send_client_msg(msg)
    # logic for sending stuff to the application
    # handle_receive_msg()


# def handle_receive_msg(msg=None):
#     print("msg_receive_test")
#     emit("receive_msg", "appleAndBall")


@socketio.on("change_param_ip")
def change_param_ip(param):
    print("setting Parameters for tcp:-")
    tcp.setParam(**param)


@socketio.on("change_param_udp")
def change_param_tcp(param):
    print("setting Parameters for udp:- ")
    udp.setParam(**param)


@socketio.on("change_param_rs422")
def change_param_rs422(param):
    print("setting Parameters for rs422:- ")
    rs422.setParam(**param)


@socketio.on("start_tcp")
def start_tcp():
    thread_protocol = threading.Thread(target=tcp.start_server)
    thread_protocol.start()
    emit("started_tcp")
