function getNumber(max = 256, min = 0){
    return Math.floor(Math.random() * (max - min) + min)
}
function getColor(){
    return `${getNumber()},${getNumber()},${getNumber()}`;
}

let words = [['pamela', 'арбуз'], ['pamela2', 'арбуз2'], ['pamela3', 'арбуз3'], ['pamela4', 'арбуз4'], ['pamela5', 'арбуз5']]

let btn1 = document.querySelector('.btn1')
btn1.style.opacity = "0.3"
let btn2 = document.querySelector('.btn2')
let card = document.querySelector('.card')

let lang = false
let counter = 0
btn1.disabled = true

function twist(n){
    let color = getColor()
    counter+=n
    if(counter == 0){
        btn1.disabled = true
        btn1.style.opacity = "0.3"
    } else {
        btn1.disabled = false
        btn1.style.opacity = "1"
    } 
    if(counter == words.length-1){
        btn2.disabled = true
        btn2.style.opacity = "0.3"
    } else {
        btn2.disabled = false
        btn2.style.opacity = "1"
    }
    // console.log('index:', index)
    // console.log('in func', counter)
    card.innerHTML = `<p>${words[counter][Number(lang)]}</p>`
    // card.style.transform = "rotateX(180deg)"
    // card.firstChild.style.transform += "rotateX(180deg)"
    // card.style.transitionDuration = "1s"
    card.style.backgroundColor = `rgba(${color}, 0.2)`;
    card.style.boxShadow = `1px 1px 3px rgba(${color}, 0.1),
    -3px -3px 4px rgba(${color}, 0.1)`;
    card.style.border = `1px solid rgb(${color})`;
    // card.style.delay = "0.5s"
    // card.style.transition = "rotateX(360deg) 0.5s"
    if(lang){
    card.firstChild.style.transform = "rotateY(180deg)"
    }
}

btn1.addEventListener('click', () => {
    twist(-1)
})
btn2.addEventListener('click', () => {
    twist(1)
})

card.addEventListener('click', () => {
    card.style.transform += "rotateY(180deg)"
    setTimeout(() => {
    if(lang){
        // console.log(words[0])
        card.innerHTML = `<p>${words[counter][0]}</p>`
    } else {
        // console.log(words[1])
        card.innerHTML = `<p>${words[counter][1]}</p>`
        card.firstChild.style.transform += "rotateY(180deg)"
    }
    lang = !lang
    }, 500)

})