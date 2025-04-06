
let turn = 'X'
let gameover = false

//function to change the turn
const changeTurn = function(){
    return turn === 'X' ? 'O' : 'X'
}

// function to check win
const checkWin = function(){
let box = document.querySelectorAll('.boxtext')    
const win = [[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8] , [2,4,6]]

win.forEach(triplet => {
    let first = box[triplet[0]].innerHTML
    let second = box[triplet[1]].innerHTML
    let third = box[triplet[2]].innerHTML
    if((first !== "") && (first === second) && (second === third))
    {
        document.querySelector('.info').innerHTML = `${turn} Won the Game`
        gameover = true
    }
})
}


//GAME LOGIC

let boxes = document.querySelectorAll('.box')    
let boxArray = Array.from(boxes);


boxArray.forEach(function(element){
    let box = element.querySelector('.boxtext')
    element.addEventListener('click' , function(event){
        if(box.innerHTML === "")
        {
            box.innerHTML = turn
            console.log(element.index);    
            checkWin()
            if(!gameover)
            {
                turn = changeTurn();
                const info = document.querySelector('.info')
                info.innerHTML = `Turn for ${turn}`
            }
            else
            {
                document.querySelector('img').style.width = "200px"
            }
            
        }
    })
})

document.querySelector('#reset').addEventListener('click' , function(){
    document.querySelector('img').style.width = "0px"
    gameover = false
    let box = document.querySelectorAll('.boxtext')
    document.querySelector('.info').innerHTML = "Turn for X"
    box.forEach(elem => {
        elem.innerHTML = ""
    })
})

const time = document.querySelector('.time')


const fn = function()
{
    const date = new Date();
    time.innerHTML = `${date.toLocaleTimeString()}`
}

setInterval(fn , 1000)

const generatColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0;i < 6;i += 1)
    {
        color += hex[Math.floor(Math.random() * 16)]
    }
    document.body.style.backgroundColor = `${color}`
}

setInterval(generatColor , 1000)



