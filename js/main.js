





// const checkWin = function(){
//     for (let i=0; i<3; i++){ //or i=board size
//         let rowCheck = $(".tttsquare").attr("data-row")
//         if($(".tttsquare").attr("data-row")){






//         }
//         //if id of row/column is the same
//         //if diagonal win condition id is same



//     }
// }
$(document).ready(function(){

// Create board function
const boardSize = 3;
let initialMatrix = [[boardSize],[boardSize]];




// let createBoard = function(boardSize){

    
//     for (let i=0; i<boardSize; i++){
//         let $newSquare = $("<div>");

//         for (let j=0; j<boardSize ; j++){
//             //add square
//             $($newSquare, {
//                 id: `data-row=${i}, data-column=${j}`,

//             }).appendTo(".board")
            
//             // $(".board").append("<div></div>");
//             // let newButton = $('<input type="button"/>');
//             // //add div to column 
//             // $(".board").append($newSquareNew);
//             // console.log(newSquare);
//         }
//     }

// } //createsBoard
// createBoard(3)

// Create Board Function Ends--------------------



let playerTurn = 1;

let dataRow = parseInt($(".tttsquare").data("row"));
let dataColumn = parseInt($(".tttsquare").data("column"));



console.log(dataColumn, dataRow)




const rowCheck = function(k,l){

        
    for (let i=0;i<3;i++)
    {
        for (let j=0;j<3;j++)  
        {
            let newinitialMatrix = initialMatrix[i][j];

            console.log(newinitialMatrix)
            newinitialMatrix[k][l] = playerTurn;
            if (initialMatrix[1][l] || (initialMatrix[i][1]))
                
                { 
                    console.log("Player" + playerTurn)
                }
        }
    }    
}
//check if won 


$(function(){

    $(".tttsquare").click(function(){
        if ($(this).attr("class") === "tttsquare Player1" || $(this).attr("class") === "tttsquare Player2"){
        console.log("Try Again")

        } else if (playerTurn == 1){
            $(this).addClass("Player1")
            // css("background-color", "purple");
            //change this to change value instead of color
            //put indication it is P2

            rowCheck(dataRow,dataColumn)
            playerTurn = 2;
            
        } else {
            $(this).addClass("Player2")
            playerTurn = 1;

        }

    }) //adds ID and changes turn. 
})



});





















