var now = new Date()
var hours = now.getHours()
var txt = document.getElementById('txt')
var background = document.getElementById('background')
var img = document.getElementById('img')

if (hours < 12 && hours > 5) {
    img.src = 'img/dia.svg'
    txt.innerHTML = `Agora são ${hours} da manhã`;
    background.style.backgroundColor = "orange"
} else if (hours > 12 && hours < 18) {
    img.src = 'img/tarde.svg'
    txt.innerHTML = `Agora são ${hours} da tarde`;
    background.style.backgroundColor = "brown"
} else if (hours > 18) {
    img.src = 'img/noite.svg'
    txt.innerHTML = `Agora são ${hours} da noite`;
    background.style.backgroundColor = "black"
} else {
    img.src = 'img/noite.svg'
    txt.innerHTML = `Agora são ${hours} da madrugada`;
    background.style.backgroundColor = "gray"
}
