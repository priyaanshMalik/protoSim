from flask import Flask, render_template
from controller import *



@app.route("/")
def index():
    return render_template("content.html")


if __name__ == "__main__":
    # thread_protocol = threading.Thread(target=tcp.start_server)
    # thread = threading.Thread(target=socketio.run, args=(app,))
    # thread.start()
    # thread_protocol.start()
    socketio.run(app, debug=True)
