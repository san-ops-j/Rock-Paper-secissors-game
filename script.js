let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user");
let compScorePara=document.querySelector("#computer");


const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const randInt=(Math.floor(Math.random()*3));
return options[randInt];
}
const drawGame=()=>{
  msg.innerText=`match is drawn play again`;
  msg.style.backgroundColor="blue"
}
const showWinner=(userwin,compChoice,userChoice)=>{
  if(userwin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`you win! your choice ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green " ;  
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`you lose! computer choice ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red"  ;  

  }  
  };

const playGame=(userChoice)=>{
  const compChoice=genCompChoice();

   if(userChoice===compChoice){
    //draw game
    drawGame();

   }else{
    userwin=true;
    if(userChoice==="rock"){
      //secissors,paper
      userwin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
      //rock,scissors
      userwin=compChoice==="scissors"?false:true;
    }
    else{
      //rock,paper
      userwin=compChoice==="rock"?false:true;
    }
   
    showWinner(userwin,compChoice,userChoice);
   }
   }

  


choices.forEach((choice)=> {
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice)
  }
  )
  
});