// const arr = [[0,0,0],[0,0,0],[0,0,0]];

let grids = document.getElementsByClassName("container-item");

let flag = true;
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let turnplayer = document.getElementById("playing-player");
const onClickEvent = (i) =>{
    let mark = document.getElementById("grid");
    if(flag === true){
        grids[i].innerText = "X";
        grids[i].style.backgroundColor = "red";
        flag = false;
        turnplayer.innerText = player2.value + "Your Turn";
    }
    else{
        grids[i].innerText = "O";
        grids[i].style.backgroundColor = "green";
        flag = true;
        turnplayer.innerText = player1.value + "Your Turn";
    
    }
   

}

let gridTable = document.getElementById("grid-table");
let  main =  document.getElementById("main");

const playGame = () =>{

    main.style.display = "none";
    gridTable.style.display = "block";
    turnplayer.innerText = player1.value + "  Your Turn"

}

const winningCombination = [
    []
]

