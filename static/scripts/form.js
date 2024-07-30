let panel = document.querySelector('.panel')
let tcp_radio = document.querySelector('#tcp_btn')
let tcp_info = document.querySelector('#tcp_info')
let udp_radio = document.querySelector('#udp_btn')
let udp_info = document.querySelector('#udp_info')
let rs422_radio = document.querySelector('#rs422_btn')
let rs422_info = document.querySelector('#rs422_info')
let head = document.querySelector(".header h2")

tcp_checked = false
udp_checked = false
rs422_checked = false

tcp_radio.addEventListener('click', function () {
    if (panel.style.maxHeight) {
        if (udp_checked || rs422_checked) {
            udp_info.style = 'display:none'
            rs422_info.style = 'display:none'
            tcp_info.style = 'display:flex'
            panel.style.maxHeight = panel.scrollHeight + 'px'
            tcp_checked = true
            udp_checked = false
            rs422_checked = false
            head.innerHTML = 'TCP'
        }
        else {
            panel.style.maxHeight = null
            tcp_checked = false
            udp_checked = false
            rs422_checked = false

        }
    }
    else {
        udp_info.style = 'display:none'
        rs422_info.style = 'display:none'
        tcp_info.style = 'display:flex'
        panel.style.maxHeight = panel.scrollHeight + 'px'
        tcp_checked = true
        head.innerHTML = 'TCP'
    }
})

udp_radio.addEventListener('click', function () {
    if (panel.style.maxHeight) {
        if (tcp_checked || rs422_checked) {
            tcp_info.style = 'display:none'
            rs422_info.style = 'display:none'
            panel.style.maxHeight = panel.scrollHeight + 'px'
            udp_info.style = 'display:flex'
            panel.style.maxHeight = panel.scrollHeight + 'px'
            tcp_checked = false
            udp_checked = true
            rs422_checked = false
            head.innerHTML = 'UDP'
        }
        else {
            panel.style.maxHeight = null
            tcp_checked = false
            udp_checked = false
            rs422_checked = false
        }
    }
    else {
        tcp_info.style = 'display:none'
        rs422_info.style = 'display:none'
        udp_info.style = 'display:flex'
        panel.style.maxHeight = panel.scrollHeight + 'px'
        udp_checked = true
        head.innerHTML = 'UDP'
    }
})

rs422_radio.addEventListener('click', function () {
    if (panel.style.maxHeight) {
        if (tcp_checked || udp_checked) {
            tcp_info.style = 'display:none'
            udp_info.style = 'display:none'
            panel.style.maxHeight = panel.scrollHeight + 'px'
            rs422_info.style = 'display:flex'
            panel.style.maxHeight = panel.scrollHeight + 'px'
            tcp_checked = false
            udp_checked = false
            rs422_checked = true
            head.innerHTML = 'RS422'
        }
        else {
            panel.style.maxHeight = null
            tcp_checked = false
            udp_checked = false
            rs422_checked = false
        }
    }
    else {
        tcp_info.style = 'display:none'
        udp_info.style = 'display:none'
        rs422_info.style = 'display:flex'
        panel.style.maxHeight = panel.scrollHeight + 'px'
        rs422_checked = true
        head.innerHTML = 'RS422'
    }
})

