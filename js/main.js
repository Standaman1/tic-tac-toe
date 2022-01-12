





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
let initialMatrix = Array(boardSize);

const createMatrix = function(){
    
    for (let m=0; m<boardSize; m++)
    {
        initialMatrix[m] = 0
        console.log(initialMatrix)
        for (let n=0; n<boardSize; n++)
        {
            initialMatrix[m][n] = 0;
        }
    }

    return initialMatrix;
} //makes matrix with index

createMatrix()


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
    
    {
        
    for (let j=0;j<3;j++) 
    
    {

        if (initialMatrix[i][j] != 0 && (typeof initialMatrix[i][j] === 'symbol')){
            console.log("P2Wins")
            

        } else if (initialMatrix[i][j] != 0 && (typeof initialMatrix[i][j] === 'string')){
            console.log("P1Wins")
            
            
        }

        
    
    }    
} console.log(initialMatrix)
}

const columnCheck = function(){
    
    for (let i=0;i<3;i++)
    
    {
        
    for (let j=0;j<3;j++) 
    
    {

        if (initialMatrix[j][i] != 0 && (typeof initialMatrix[j][i] === 'symbol')){
            console.log("P2Wins")
            return Player2Wins;

        } else if (initialMatrix[j][i] != 0 && (typeof initialMatrix[j][i] === 'string')){
            console.log("P1Wins")
            return Player1Wins;
        }
        
    
    }    
} console.log(initialMatrix)
}

const diagonalCheck = function(){

    for (let i=0;i<3;i++)
        {

        if (initialMatrix[i][i] != 0 && (typeof initialMatrix[i][i] === 'symbol'))
        {
            console.log("P2Wins")
            

        } else if (initialMatrix[i][i] != 0 && (typeof initialMatrix[i][i] === 'string')
        ){
            console.log("P1Wins")
            
    
        } else 
        
            for (let j=3;j<0;j--) 
    
                {

                    if (initialMatrix[i][j] != 0 && (typeof initialMatrix[i][j] === 'symbol')){
                        console.log("P2Wins")
                        
            
                    } else if (initialMatrix[i][j] != 0 && (typeof initialMatrix[j][i] === 'string')){
                        console.log("P1Wins")

        
                    }
                }    
}
}
//check if won 
const winCondition = function(){
rowCheck()
columnCheck()
diagonalCheck()

}



    $(".tttsquare").click(function(){
       
        let dataRow = parseInt($(this).data("row"));
        let dataColumn = parseInt($(this).data("column"));
        

        if ($(this).attr("class") === "tttsquare Player1" || $(this).attr("class") === "tttsquare Player2"){
        console.log("Try Again")

        } else if (playerTurn == 1){
            $(this).addClass("Player1")
            // css("background-color", "purple");
            //change this to change value instead of color
            //put indication it is P2
            playerTurn = -1;

            initialMatrix[dataRow][dataColumn] = "Player1";
            
            
            
        } else {
            $(this).addClass("Player2")

            playerTurn = 1;

            initialMatrix[dataRow][dataColumn] = Symbol("Player2"); //change to symbol
            
    

        }
        winCondition()
    }) //adds ID and changes turn. 




});





















