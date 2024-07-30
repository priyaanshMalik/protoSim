// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     dark(null)
//     document.getElementById('themeToggle').checked = true    
// }


document.getElementById('themeToggle').addEventListener('change', function () {
    let themeLabel = document.getElementById('themeLabel');
    if (this.checked) {
        dark(themeLabel)
    } else {
        light(themeLabel)
    }
});

function dark(themeLabel) {
    if (!themeLabel) {
        themeLabel = document.getElementById('themeLabel');
    }
    document.body.style.backgroundColor = 'var(--dark)';
    document.body.style.color = 'var(--dark-text)';
    themeLabel.textContent = 'Dark Mode';
    themeLabel.style.color = 'var(--dark-text)'
    let proto_label = document.querySelectorAll('.switch-field label')
    for (let i = 0; i < proto_label.length; i++) {
        proto_label[i].style.backgroundColor = 'var(--violet)'
    }
    let section = document.querySelectorAll('.the_section')[0]
    section.style.background = 'var(--dark-container)'
    section.style.color = 'var(--dark-text)'
    let start_btn = document.getElementsByClassName('start_btn')
    for (let i = 0; i < start_btn.length; i++) {
        start_btn[i].style.backgroundColor = 'var(--violet)'
    }
    document.querySelector('.btn-send').style.backgroundColor = 'var(--violet)'
    document.querySelector('.chatScrollContainer ').style.backgroundColor = 'var(--dark)'
}

function light(themeLabel) {
    if (!themeLabel) {
        themeLabel = document.getElementById('themeLabel');
    }
    document.body.style.backgroundColor = 'var(--light)';
    document.body.style.color = 'var(--dark)';
    themeLabel.textContent = 'Light Mode';
    themeLabel.style.color = 'var(--light-text)'
    let proto_label = document.querySelectorAll('.switch-field label')
    for (let i = 0; i < proto_label.length; i++) {
        proto_label[i].style.backgroundColor = 'var(--blue)'
    }
    let section = document.querySelectorAll('.the_section')[0]
    section.style.background = 'var(--light-container)'
    section.style.color = 'var(--light-text)'
    let start_btn = document.getElementsByClassName('start_btn')
    for (let i = 0; i < start_btn.length; i++) {
        start_btn[i].style.backgroundColor = 'var(--blue)'
    }
    document.querySelector('.btn-send').style.backgroundColor = 'var(--blue)'
    document.querySelector('.chatScrollContainer ').style.backgroundColor = 'var(--light)'
}

window.addEventListener('load', function () {
    isChecked = document.getElementById('themeToggle')
    console.log(isChecked)
    if (isChecked.checked == true) {
        dark(null)
    }
})

