// const arr = [[0,0,0],[0,0,0],[0,0,0]];

let grids = document.getElementsByClassName("container-item");

let flag = true;
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let count = 0;

let turnplayer = document.getElementById("playing-player");
const onClickEvent = (i) =>{
    if(grids[i].innerText == ""){
        let mark = document.getElementById("grid");
        count++;
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
    let result = checkWinner();
    if(result === 1){
        alert( player1.value + "  is Winner!!!!");
        return;
    }
    else if(result === 2){
        alert(player2.value  + '  is winner!!!!');
        return;
    }
    console.log(count);
    if(count === 9){
        alert("Nobody has won the Game!!!!")
    }
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
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let n = winningCombination.length;
const checkWinner = () =>{
    for(let i = 0; i < n; i++ ){
        let res = winningCombination[i];
        // console.log(grids[res[0]].innerText);
       
        if( grids[res[0]].innerText ===grids[res[1]].innerText && grids[res[1]].innerText== grids[res[2]].innerText && grids[res[0]].innerText == "X" ){

            return 1;
        }
        else if( grids[res[0]].innerText ===grids[res[1]].innerText && grids[res[1]].innerText== grids[res[2]].innerText && grids[res[0]].innerText == "O"){
            return 2;
        }

        
    }
}

