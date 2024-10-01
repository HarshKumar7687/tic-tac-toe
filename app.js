let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let messageCointainer = document.querySelector(".message-cointainer");
let message = document.querySelector("#message");

let turnOfPlayerO = true;//player o and player x are two players

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnOfPlayerO===true){
            box.innerText="O";
            turnOfPlayerO=false;
        }else{
            box.innerText="X";
            turnOfPlayerO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableAllButtons = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableAllButtons = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        message.innerText="";
    }
}

const showWinner = (winner) =>{
    message.innerText=`Congratulations! player ${winner} wins`;
    disableAllButtons();
}
const checkWinner = () =>{
    //checking every array inside array winPatterns
    for(let pattern of winPatterns){
        let positionOneValue = boxes[pattern[0]].innerText;
        let positionTwoValue = boxes[pattern[1]].innerText;
        let positionThreeValue = boxes[pattern[2]].innerText;

        if(positionOneValue !="" && positionTwoValue !="" && positionThreeValue !=""){
            if(positionOneValue === positionTwoValue && positionTwoValue === positionThreeValue){
                showWinner(positionOneValue);
            }
        }
    }
};

const resetGame = () => {
    turnOfPlayerO=true;
    enableAllButtons();
}

resetButton.addEventListener("click",resetGame);