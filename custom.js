"use strict"

var num1=JSON.parse(localStorage.getItem("num1"));
var num2=JSON.parse(localStorage.getItem("num2"));

var txtvalue=document.getElementById("textinput");
var subbtn=document.querySelector("form");
var message=JSON.parse(localStorage.getItem("msg"));
var st=JSON.parse(localStorage.getItem("status"));
// 
var showMassage = (message, status) => {
  var msg = document.querySelector(".msg");
  msg.classList.add(`bg-${status}`);
  msg.innerText = message;
  setTimeout(() => {
    msg.innerText = " ";
    localStorage.removeItem("msg"); 
    localStorage.removeItem("status"); 
    msg.classList.remove(`bg-${status}`);
  }, 1000)
}

var score=JSON.parse(localStorage.getItem("score"));
if(!score){score=0}
document.querySelector(".point").innerText=score;


var step=JSON.parse(localStorage.getItem("step"));

if(!step || score<=20){
  step=1;
  num1=Math.ceil(Math.random()*10);
  num2=Math.ceil(Math.random()*10);
}else if(score>20 && score<=30){
  step=2;
  num1=Math.ceil(Math.random()*20);
  num2=Math.ceil(Math.random()*10);
}else{
  step=3;
  num1=Math.ceil(Math.random()*20);
  num2=Math.ceil(Math.random()*20);
}

document.querySelector(".step").innerText=step;



var question=`What is ${num1} multiply by ${num2}  ?`;
document.querySelector(".question h2").innerText=question;
var result=num1*num2;

subbtn.addEventListener("submit",()=>{
  const uservalu=+txtvalue.value;
  if(uservalu==result){
     score++;
     updateLocatStorage();
     message=`Your answer is Currect`;
     st='success';
     localStorage.setItem("msg",JSON.stringify(message));
     localStorage.setItem("status",JSON.stringify(st));

  }else{
    score--;
    if(score<1){score=0;}
    updateLocatStorage();
    message=`😂currect answer is ${num1}x${num2}=${result} `;
    st='danger';
    localStorage.setItem("msg",JSON.stringify(message));
    localStorage.setItem("status",JSON.stringify(st));
  }
  subbtn.reset();
});

const updateLocatStorage=()=>{
         localStorage.setItem("score",JSON.stringify(score));
}


localStorage.setItem("step",JSON.stringify(step));
localStorage.setItem("num1",JSON.stringify(num1));
localStorage.setItem("num2",JSON.stringify(num2));
showMassage(message,st);




//  Celebrate Step up and down 
var container = document.querySelector("body");
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
//     console.log(x, y);
    return {x,y}
}

function createHeard() {
    var heardurl = document.createElement("span");
    heardurl.classList.add('fa');
    heardurl.classList.add('fa-heart');
    const size = Math.ceil(Math.random() * 30);
    heardurl.style.fontSize = `${size}px`;
    const {x,y} = getRandomLocation();
    heardurl.style.top = `${y}px`;
    heardurl.style.left = `${x}px`;

    container.appendChild(heardurl);
    setTimeout(() => {
        heardurl.remove();
    }, 500);
}


function startCelebrate() {
    intervalid = setInterval(createHeard, 5);
}
//    const intervalid=setInterval(createHeard,5);

setTimeout(() => {
    clearInterval(intervalid);
}, 5000) 


