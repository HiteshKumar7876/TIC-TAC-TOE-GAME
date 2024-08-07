let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let ng = document.querySelector("#newgame");
let msgcon = document.querySelector(".msg-container ");
let para =document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enabledbox();
    msgcon.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledbox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
    const enabledbox = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }

};

const showWinner = (winner) => {
    para.innerText = `Congratulation Winner is  ${winner}`;
    msgcon.classList.remove("hide");
    disabledbox();

}

const checkWinner = () => {
    for(let pattern of winPattern){
    
   
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner" , pos1Val);
            showWinner(pos1Val);
            
        }
    }
    

    }
ng.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

}

