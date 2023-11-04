let userSeq = [];
let gameSeq = [];

let btns = ["red","yellow","purple","green"];

let h2 = document.querySelector("h2");
let level = 0;
let started = false;

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },600);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },100);
}

function btnpress(btn){
    btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

function levelUp(){
    level++;
    userSeq = [];
    h2.innerText = `Level${level}`;
    let rdIndex = Math.floor(Math.random() * 4);
    let rdclr   = btns[rdIndex];
    let rdbtn = document.querySelector(`.${rdclr}`);
    gameFlash(rdbtn);
    gameSeq.push(rdclr);
}

const allbtn = document.querySelectorAll(".btn");
for(btna of allbtn){
    btna.addEventListener("click",btnpress);
}

function reset(){
    userSeq =[];
    gameSeq = [];
    level = 0;
    started = false;
}

function checkAns(idx){
    if(gameSeq[idx] == userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            levelUp();
        }
    }else{
        h2.innerHTML = `Game Over ! <br> <b> Your score is ${level}0 </b> <br> Click any key to Restart Game`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(()=>{
            body.style.backgroundColor = "white";
        },100);
        reset();
    }
}