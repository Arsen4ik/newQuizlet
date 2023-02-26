// function getNumber(max = 256, min = 0){
//     return Math.floor(Math.random() * (max - min) + min)
// }
// function getColor(){
//     return `${getNumber()},${getNumber()},${getNumber()}`;
// }

let words = []
function pullArr(n){
for(let i = 1; i <= n; i++){
    words.push([`a${i}`, `b${i}`])
}
}
pullArr(35)

let btn1 = document.querySelector('.btn1')
btn1.style.opacity = "0.3"
let btn2 = document.querySelector('.btn2')
let card = document.querySelector('.card')
let pagenation = document.querySelector('.pagenation')
for(let i = 1; i <= 10; i++){
    pagenation.innerHTML += `<p class="queueP">${i}</p>`
}
console.log(pagenation.firstChild)
pagenation.firstChild.style.color = 'white'
pagenation.firstChild.style.backgroundColor = 'rgb(48, 48, 48)'

let lang = false
let counter = 0
btn1.disabled = true
let trans = 0

function twist(n){
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
    card.innerHTML = `<p>${words[counter][Number(lang)]}</p>`
    card.style.boxShadow = `5px 0px 7px #3BF764,
    -5px -0px 7px #3BF764`;
    setTimeout(() => {
        card.style.boxShadow = `1px 1px 3px #416ae475, -1px -1px 3px #416ae475`;
    }, 500)
    if(lang){
    card.firstChild.style.transform = "rotateY(180deg)"
    }

    let res = 0
    let bridge = counter
    while(bridge >= 10){
        res++
        bridge -= 10
    }

    if(res !== trans || trans > res){
        trans = res
        changePagenation(trans)
    }


console.log(pagenation.children[counter-(res*10)])
// console.log(typeof Number(pagenation.children[counter].innerHTML))

// console.log(counter+1)
// console.log(res)
// console.log(res)
// console.log(typeof pagenation.children[counter].innerHTML)
// console.log(typeof Number(pagenation.children[counter].innerHTML))
// console.log(counter)
// console.log(Number(pagenation.children[counter].innerHTML) == counter+1 ? 'da' : 'no')

    if(n == -1){
        if(counter+1 < (res+1) * 10){
            pagenation.children[counter-(res*10)+1].style.color = "rgb(48, 48, 48)"
            pagenation.children[counter-(res*10)+1].style.backgroundColor = 'inherit'

        }
    } else {
        if(counter > res * 10){
            pagenation.children[counter-(res*10)-1].style.color = "rgb(48, 48, 48)"
            pagenation.children[counter-(res*10)-1].style.backgroundColor = 'inherit'

        }
    }
    
    pagenation.children[counter-(res*10)].style.color = "white"
    pagenation.children[counter-(res*10)].style.backgroundColor = 'rgb(48, 48, 48)'

}

function changePagenation(n){
    pagenation.innerHTML = ""
        for(let i = 1; i <= 10; i++){
        pagenation.innerHTML += `
        <p class="queueP">${i + 10 * n}</p>
        `
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