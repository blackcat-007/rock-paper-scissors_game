let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScore=document.querySelector("#userScore");
let compScore=document.querySelector("#compScore");
let resetbtn= document.querySelector("#reset");
const resetGame=()=>{
    
    userscore=0;
    compscore=0;
    userScore.innerText=userscore;
    compScore.innerText=compscore;
    resetbtn.style.display="none";

    msg.style.backgroundColor="black";
    msg.innerText="play your move!!";



}




const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissors
    const index=Math.floor(Math.random()*3)
    return options[index];



}



const playGame=(userchoice)=>{
    //generate computer choice
    console.log(userchoice);
    const compchoice=genCompChoice();
    console.log(compchoice);
    showResult(userchoice,compchoice);


}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice is clicked",userchoice);
        playGame(userchoice);
    });
}
);
const showResult=(user,comp)=>{
    if(user!=comp){
    if(user=="rock" && comp=="scissors"){
        msg.innerText="you won!!";
        userscore++;
        userScore.innerText=userscore;
        msg.style.backgroundColor="green";
    }
    else if(user=="scissors"&&comp=="paper"){
        msg.innerText="you won!!";
        userscore++;
        userScore.innerText=userscore;
        msg.style.backgroundColor="green";
    }
    else if(user=="paper" && comp=="rock"){
        msg.innerText="you won!!";
        msg.style.backgroundColor="green";
        userscore++;
        userScore.innerText=userscore;
        
    }
    else{
        msg.innerText="you lost!!";
        compscore++;
        compScore.innerText=compscore;
        msg.style.backgroundColor="red";
    }

   
}
else{
    msg.innerText="game is drawn!! play again";
    msg.style.backgroundColor="darkblue";

}
resetbtn.style.display="inline";
resetbtn.addEventListener("click",resetGame);


}