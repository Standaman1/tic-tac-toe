

// const boardSize = 3; //set to dropdown selection



// $(".board").html("").css("grid-template-columns", `repeat(3, 1fr)`) //get board size


// const createBoard = function(){
//     for (let i=0; i<3; i++){
       
//         for (let j=0; j<3; j++){
//             //add square
//             let $newSquare = $("<div>", {
//                 "class": "boardsquare",
//             })
//             $newSquare.data("row", `${i}`)
//             $newSquare.data("column", `${j}`)
//             $(".board").append($newSquare)

//             let squareRow = parseInt($(this).data("row"));
//             let sqaureColumn = parseInt($(this).data("column"));
//             // $(".board").append("<div></div>");
//             // let newButton = $('<input type="button"/>');
//             // //add div to column 
//             // $(".board").append($newSquareNew);
//             // console.log(newSquare);
//         }
    

// }}//createsBoard


$(document).ready(function(){

// Create board function
const boardSize = 3;
let initialMatrix = Array(boardSize);

const createMatrix = function(){
    
    for (let m=0; m<boardSize; m++)
    {
        initialMatrix[m] = []
        // console.log(initialMatrix)
        for (let n=0; n<boardSize; n++)
        {
            initialMatrix[m][n] = 0;
        }
    }
    
    return initialMatrix;
} //makes matrix with index

createMatrix()
// console.log(initialMatrix)

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




//check if it has a class or symbol
// return initial matrix 




// const columnCheck = function(){
//     for (let j=0;j<3;j++) {
//         if ((initialMatrix[0][j] === initialMatrix[1][j]) && (initialMatrix[1][j] === initialMatrix[2][j]) && (initialMatrix[0][j] != 0))
        
//         {
//             console.log(`"Player" + "${initialMatrix[0][j]}"`)

//         }
//     }

// }

// const rowCheck = function(){
//     for (let i=0;i<3;i++)

//     { if((initialMatrix[i][0] === initialMatrix[i][1]) && (initialMatrix[i][1]=== initialMatrix[i][2]) && (initialMatrix[i][0] != 0))
//         {
//             console.log(`"Player" + "${initialMatrix[i][0]}"`)

//         }
//     }
// }


// const diagonalCheck = function(){
//     if(initialMatrix[0][0] == initialMatrix[1][1] && initialMatrix[1][1] == initialMatrix[2][2] && initialMatrix[0][0] != 0) {
//         {
//             console.log(`"Player" + "${initialMatrix[0][0]}"`)

//         }
// }}


const rowCheck = function(){

    for (let i=0;i<3;i++)
    
    {   let P2Counter = 0;
        let P1Counter = 0;
        
    for (let j=0;j<3;j++) {
    
    if (initialMatrix[i][j] != 0){
        if (initialMatrix[i][j] != 1){
        P2Counter ++
        // console.log("P2Counter", P2Counter)

        } else {
        P1Counter ++
        // console.log("P1Counter", P1Counter)
        }
        if (P2Counter == 3){
            console.log("P2WinsR")
        }
         
        else if(P1Counter == 3){
            console.log("P1WinsR")

        }
}    
}
}}

const columnCheck = function(){

    for (let j=0;j<3;j++)
    
    {   let P2Counter = 0;
        let P1Counter = 0;
        
    for (let i=0;i<3;i++) {
    
    if (initialMatrix[i][j] != 0){
        if (initialMatrix[i][j] != 1){
        P2Counter ++
        // console.log("P2Counter", P2Counter)

        } else {
        P1Counter ++
        // console.log("P1Counter", P1Counter)
        }
        if (P2Counter == 3){
            console.log("P2WinsC")
        }
         
        else if(P1Counter == 3){
            console.log("P1WinsC")

        }
}    
}
}}



const diagonalCheck = function(){
    let P1Counter = 0;
    let P2Counter = 0;
    for (let i=0;i<3;i++)

        {   
            if (initialMatrix[i][i] != 0){

            if (initialMatrix[i][i] != 1){
                P2Counter ++
                // console.log("P2Counter", P2Counter)
            }
                else {
                P1Counter ++
                // console.log("P1Counter", P1Counter)

                }
                if (P2Counter == 3){
                    console.log("P2WinsD")
                }
                
                if(P1Counter == 3){
                    console.log("P1WinsD")
        
                }

}
}}

const diagonalCheckReverse = function(){
    let P1Counter = 0;
    let P2Counter = 0;


            for (let i=2, j=0;i>-1, j<3;i--, j++){
            if (initialMatrix[i][j] != 0){

            if (initialMatrix[i][j] != 1){
                P2Counter ++
                console.log("P2Counter", P2Counter)
            } else {
                P1Counter ++
                  console.log("P1Counter", P1Counter)
            }
                if (P2Counter == 3){
                    console.log("P2WinsDiag")
                }

                if(P1Counter == 3){
                    console.log("P1WinsDiag")
        
                }

}
}}

// const columnCheck = function(){
    
//     for (let j=0;j<3;j++)
    
//     {
        
//     for (let i=0;i<3;i++) 
    
//     {

//         if (initialMatrix[i][j] != 0 && (initialMatrix[i][j] != 1)){
//             console.log("P2Wins")
//             // return Player2Wins; return something else

//         } else if (initialMatrix[i][j] != 0 && (initialMatrix[i][j] != 2)){
//             console.log("P1Wins")
//             // return Player1Wins;
//         }
        
    
//     }    
// } 
// // console.log(initialMatrix)
// }

// const diagonalCheck = function(){

//     for (let i=0;i<3;i++)
//         {

//         if (initialMatrix[i][i] != 0 && (initialMatrix[i][i] != 1))
//         {
//             console.log("P2Wins")
            

//         } else if (initialMatrix[i][i] != 0 && (initialMatrix[i][i] != 2)
//         ){
//             console.log("P1Wins")
            
    
//         } else 
        
//             for (let j=3;j<0;j--) 
    
//                 {

//                     if (initialMatrix[i][j] != 0 && (initialMatrix[i][j] != 1)){
//                         console.log("P2Wins")
                        
            
//                     } else if (initialMatrix[i][j] != 0 && (initialMatrix[i][j] != 2)){
//                         console.log("P1Wins")

        
//                     }
//                 }    
// }
// }



const winCondition = function(){
rowCheck()
columnCheck()
diagonalCheck()
diagonalCheckReverse()

}



    $(".tttsquare").click(function(){
   
        let dataRow = parseInt($(this).data("row"));
        let dataColumn = parseInt($(this).data("column"));
        // console.log(dataRow)
        // console.log(dataColumn)

        if ($(this).attr("class") === "tttsquare Player1" || $(this).attr("class") === "tttsquare Player2"){
        console.log("Try Again")

        } else if (playerTurn == 1){
 
            $(this).addClass("Player1")
            $(this).css("background-color", "purple")
            // css("background-color", "purple");
            //change this to change value instead of color
            //put indication it is P2
            initialMatrix[dataColumn][dataRow] = 1;
            playerTurn = 2;
            console.table(initialMatrix)

            
            
            
            
        } else {
            $(this).addClass("Player2") 
            $(this).css("background-color", "red")

            initialMatrix[dataColumn][dataRow] = 2;
            playerTurn = 1;

             //change to symbol
            
    

        }
        winCondition()
    }) //adds ID and changes turn. 




});





















