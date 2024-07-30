const socket = io({ autoConnect: false });
socket.connect();


document.getElementById('sender').addEventListener("click", function () {
  buttonClick(this)
  let msg = document.getElementById('message-input').value;
  document.getElementById('message-input').value = ""
  createChatItem(msg, 'the_sender')
  socket.emit("send_msg", msg)
});


// set parameters:   ---------
document.getElementById('ip_tcp').addEventListener('change', function () {
  let ip = this.value
  if (validateIP(ip)) {
    this.style.border = "2px solid var(--blue)"
    document.querySelectorAll('.ip_alert')[0].style.display = 'none'
    socket.emit("change_param_ip", { 'ip': ip })
  }
  else {
    this.style.border = "2px solid red"
    document.querySelectorAll('.ip_alert')[0].style.display = 'inline-block'
  }
})

document.getElementById('port_tcp').addEventListener('change', function () {
  let port = validatePort(this.value)
  if (port) {
    this.style.border = "2px solid var(--blue)"
    document.querySelectorAll('.port_alert')[0].style.display = 'none'
    socket.emit("change_param_ip", { 'port': port })
  }
  else {
    this.style.border = "2px solid red"
    document.querySelectorAll('.port_alert')[0].style.display = 'inline-block'
  }
})

document.getElementById('ip_udp').addEventListener('change', function () {
  let ip = this.value
  if (validateIP(ip)) {
    this.style.border = "1px solid var(--blue)"
    document.querySelectorAll('.ip_alert')[1].style.display = 'none'
    socket.emit("change_param_udp", { 'ip': ip })
  }
  else {
    this.style.border = "2px solid red"
    document.querySelectorAll('.ip_alert')[1].style.display = 'inline-block'
  }
})

document.getElementById('port_udp').addEventListener('change', function () {
  let port = validatePort(this.value)
  if (port) {
    this.style.border = "1px solid var(--blue)"
    document.querySelectorAll('.port_alert')[1].style.display = 'none'
    socket.emit("change_param_udp", { 'port': port })
  }
  else {
    this.style.border = "2px solid red"
    document.querySelectorAll('.port_alert')[1].style.display = 'inline-block'
  }
})


document.getElementById('i_d').addEventListener('change', function () {
  let i_d = this.value
  socket.emit("change_param_rs422", { 'i_d': i_d })
})


document.getElementById('channel_number').addEventListener('change', function () {
  let channel_number = this.value
  socket.emit("change_param_rs422", { 'channel_number': channel_number })
})


document.getElementById('baude_rate').addEventListener('change', function () {
  let baude_rate = this.value
  socket.emit("change_param_rs422", { 'baude_rate': baude_rate })
})


document.getElementById('parity').addEventListener('change', function () {
  let parity = this.value
  socket.emit("change_param_rs422", { 'parity': parity })
})


document.getElementById('stop_bit').addEventListener('change', function () {
  let stop_bit = this.value
  socket.emit("change_param_rs422", { 'stop_bit': stop_bit })
})


document.getElementById('delay').addEventListener('change', function () {
  let delay = this.value
  socket.emit("change_param_rs422", { 'delay': delay })
})


// starting protocol 
document.getElementById("tcp_start").addEventListener('click', function () {
  this.innerHTML = "Starting ... <span id='loader'></span>"
  socket.emit("start_tcp")
})

socket.on("started_tcp", function () {
  function setHtml() {
    document.getElementById("tcp_start").innerHTML = 'STOP'
    document.getElementById("status").innerHTML = 'Connected'
    document.getElementById("status").style.color = "green"
  }
  setTimeout(setHtml, 2000)
})


socket.on('receive_msg', function (msg) {
  console.log('msg_receive_test')
  createChatItem(msg, 'the_receiver')
})


//chat bubble
function createChatItem(message, sender) {
  let messages = document.getElementById('messages');
  let content = ''
  if (sender === "") {
    content = `
          <p class="member-activity">${message}</p>
        `;
  } else {
    //   chech if the_sender or the_receiver
    let senderIsUser = sender === 'the_sender';
    content = `
          <li class="message-item ${senderIsUser ? "self-message-item" : "peer-message-item"
      }">
              <p>${message}</p>
              <small class="${senderIsUser ? "muted-text" : "muted-text-white"
      }">${new Date().toLocaleString()}</small>
          </li>
      `;
  }

  messages.innerHTML += content;
  let el = document.getElementsByClassName('msgs-container')
  el[0].scrollTop = el[0].scrollHeight;

}

// common button click animation
function buttonClick(btn) {
  button = btn
  button.classList.add("clicked");
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 300); // Match the duration with CSS transition time
}


//validation

function validateIP(ipaddress) {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
    return (true)
  }
  return (false)
}


function validatePort(port) {
  try {
    port = Number(port)
  }
  catch {
    return false
  }
  if ((port > 0) && (port < 65535)) {
    return port
  }
  return false
}
