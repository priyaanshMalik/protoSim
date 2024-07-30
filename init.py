from flask import Flask, render_template, url_for, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret!123123123"
socketio = SocketIO(app)
