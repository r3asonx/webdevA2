
const navbutton = document.querySelector('#navbutton');
const headernav = document.querySelector('#headernav');
const headerbutton = document.querySelector('#Welcome');
const homebutton = document.querySelector('#homebtn');
const page1button = document.querySelector('#page1btn');
const page2button = document.querySelector('#page2btn');
const page3button = document.querySelector('#page3btn');
const page4button = document.querySelector('#page4btn');
const fullscreenbutton = document.querySelector('#fulls');
const home = document.querySelector('.home');
const onebox = document.querySelector('.onebox');
const twobox = document.querySelector('.twobox');
const quizbox = document.querySelector('.quizbox');
const gamebox = document.querySelector('.gamebox');
const homestart = document.querySelector('.homepagebutton');



navbutton.addEventListener('click', function()  {
    headernav.classList.toggle('show');
    console.log('clicked');/*just to check if button is being pressed for testing */

   
});

headerbutton.addEventListener('click', function(){/*Making the title or rather h1 be the refresh button */
    window.location.reload();
})

fullscreenbutton.addEventListener('click', function(){
     if(document.fullscreenElement){ /*exitfullscreen is to check if currently it is in fullscreen */
        document.exitFullscreen();/* this is targetting the full page not just element to exit out of fullscreen */
    }
    else{
        document.documentElement.requestFullscreen();/*document.documentelement is targeting everything in the <html></html> */
    }
    
   
})





/*Menu */

function hideall(){
    home.style.display="none";
    onebox.style.display="none";
    twobox.style.display="none";
    quizbox.style.display="none";
    gamebox.style.display="none";

}

homestart.addEventListener("click", function(){
    headernav.classList.toggle('show');
    home.style.filter = "brightness(1)";

    if(headernav.classList.toggle('hide')){ /*make it so that if the side navigation is open it will darken the page */
    home.style.filter = "brightness(0.1)";
    }
    
    
});
homebutton.addEventListener("click", function(){
    hideall();
    home.style.display="block";
    headernav.classList.toggle('show');
    home.style.filter = "brightness(1)";
});

page1button.addEventListener("click", function(){
    hideall();
    onebox.style.display="block";
    headernav.classList.toggle('show');
});

page2button.addEventListener("click", function(){
    hideall();
    twobox.style.display="block";
    headernav.classList.toggle('show');
});
page3button.addEventListener("click", function(){
    hideall();
    quizbox.style.display="block";
    headernav.classList.toggle('show');
});
page4button.addEventListener("click", function(){
    hideall();
    gamebox.style.display="block";
    headernav.classList.toggle('show');
});



const p1engine = document.getElementById("p1engine");
const s2kengine = document.getElementById("s2kengine");
const lamboengine = document.getElementById("lamboengine");
document.getElementById("p1").addEventListener("click", function(){
    p1engine.currentTime=0;/*make it start from the start of the audio */
    p1engine.play();
});
document.getElementById("s2k").addEventListener("click", function(){
    s2kengine.currentTime=0;
    s2kengine.play();
});
document.getElementById("lambo").addEventListener("click", function(){
    lamboengine.currentTime=0;
    lamboengine.play();
});


/*QUIZ */

const btnSubmit=document.querySelector("#btnSubmit");  
const scorebox=document.querySelector("#scorebox");

let corrAnsArray=["Lamborghini","F20C","lambo"];
function CheckAns(){    
    score=0; //reset score to 0, check ans and give score if correct 
    for(let i=0;i<corrAnsArray.length;i++){
        CheckOneQn(i+1,corrAnsArray[i]);
    }
    scorebox.innerHTML="Score:"+score;
}
btnSubmit.addEventListener("click",CheckAns);
function CheckOneQn(qnNo,CorrAns){
    let qTemp=document.querySelector("input[name='q"+qnNo+"']:checked").value;
    if(qTemp==CorrAns)score++;
    console.log(qTemp); //check q1 value retrieved
}

/*Game */

const gamecarid = document.getElementById("gamecarid");

function GetRandom(min, max){
    return Math.round(Math.random() * (max - min)) +min;
}

function Movecar(){
    gamecarid.style.left = GetRandom(0, 90) + "vw";
    gamecarid.style.top = GetRandom(0, 30) + "vh";
}

setInterval(Movecar, 1000);

const scoreBox=document.getElementById("scoreBox");

//create an new Audio Object using sound file
var score=0; //to track how many clicks
function carCatch() {
//increases score after clicking
score++;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;

}

gamecarid.addEventListener("click",carCatch);

document.addEventListener("keydown",function(evt){
console.log(evt);
if(evt.code=="KeyT"){
gamecarid.classList.add("shrink");
}
if(evt.code=="KeyU"){
gamecarid.classList.remove("shrink");
}
if(evt.code=="KeyA"){
gamecarid.classList.add("anim1");
}
if(evt.code=="KeyB"){
gamecarid.classList.remove("anim1");
}

});
gamecarid.addEventListener("click",function(){
    gamecarid.classList.add("anim2");

    setTimeout(function(){
        gamecarid.classList.remove("anim2");
        gamecarid.classList.remove("anim1");

        void gamecarid.offsetWidth;

        gamecarid.classList.add("anim1");


    }, 1000);
    
}   
);
