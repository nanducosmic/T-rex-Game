document.addEventListener('DOMContentLoaded',() =>{
const dino=document.querySelector('.dino')
let isjumping =false
let gravity=0.9

function control(s){
    if(s.keyCode ===32){
        if(!isjumping){
            isjumping=true
            jump()
        }
       
    }
}

document.addEventListener('keyup',control)

function jump(){
    let count=0
    let position=0
    let timerId = setInterval(function(){
        //move down
        if(count ===15){
            clearInterval(timerId)
            console.log('down')
            let downTimerId =setInterval(function(){
                if(count===0){
                    clearInterval(downTimerId)
                    isjumping=false
                }
                position -=5
                count--
                position=position*gravity
                dino.style.bottom =position +'px'
            },20)
           
        }
        

        //move up
        console.log('up')
        count ++
        position +=30
        position=position *gravity
        dino.style.bottom =position +'px'
       

    },20)
}
function generateObstacles(){
    let obscta
}

})