let words = ['pamela', 'арбуз']
let lang = false
let card = document.querySelector(".card")

function cardReverse(){
    card.style.transform += "rotateY(180deg)"
    setTimeout(() => {
    if(lang){
        console.log(words[0])
        card.innerHTML = `<p>${words[0]}</p>`
    } else {
        console.log(words[1])
        card.innerHTML = `<p>${words[1]}</p>`
        card.firstChild.style.transform += "rotateY(180deg)"
    }
    lang = !lang
    }, 500)
}