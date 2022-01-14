

$(document).ready(function(){

let playerTurn = 1;
let Player1Icon
let Player2Icon
let drawCounter = 0;
let gameOver = false;
let P1Score = 0;
let P2Score = 0;

// Create board function
const boardSize = 3;
let initialMatrix = Array(boardSize);

const createMatrix = function(){
    
    for (let m=0; m<boardSize; m++){
        
        initialMatrix[m] = []

            for (let n=0; n<boardSize; n++)
            {
                initialMatrix[m][n] = 0;
            }
    }
    
    return initialMatrix;
} //makes matrix with index

createMatrix()

const rowCheck = function(){

    for (let i=0;i<3;i++){   
        
        let P2Counter = 0;
        let P1Counter = 0;
            
        for (let j=0;j<3;j++){
        
            if (initialMatrix[i][j] != 0){

                if (initialMatrix[i][j] != 1){
                    P2Counter ++

                } else {
                    P1Counter ++

                }

                if (P2Counter == 3){
                    console.log("P2WinsR")
                    P2Score++
                    $(".tttSquare").off("click")
                    $("#P2WinMessage").show()
                    gameOver = true;
                    return

                } else if (P1Counter == 3){
                    console.log("P1WinsR")
                    P1Score++
                    $(".tttSquare").off("click")
                    $("#P1WinMessage").show()
                    gameOver = true;
                    return

                }
            }    
        }
    }
} //checks rowena


const columnCheck = function(){

    for (let j=0;j<3;j++){   
        
        let P2Counter = 0;
        let P1Counter = 0;
        
            for (let i=0;i<3;i++) {
            
            if (initialMatrix[i][j] != 0){

                if (initialMatrix[i][j] != 1){
                P2Counter ++
        

                } else {
                P1Counter ++

                }

                if (P2Counter == 3){
                    console.log("P2WinsC")
                    P2Score++
                    $(".tttSquare").off("click")
                    $("#P2WinMessage").show()
                    gameOver = true;
                    return

                } else if(P1Counter == 3){
                    console.log("P1WinsC")
                    P1Score++
                    $(".tttSquare").off("click")
                    
                    $("#P1WinMessage").show()
                    gameOver = true;

                    return


                }
            }    
        }
    }
} //check column winner


const diagonalCheck = function(){

    let P1Counter = 0;
    let P2Counter = 0;

    for (let i=0;i<3;i++){

        if (initialMatrix[i][i] != 0){

            if (initialMatrix[i][i] != 1){
                P2Counter ++
            }

            else {
                P1Counter ++
                }

            if (P2Counter == 3){
                console.log("P2WinsD")
                P2Score++
                $(".tttSquare").off("click")
                $("#P2WinMessage").show()
                gameOver = true;
                return

                }
                
            if (P1Counter == 3){
                console.log("P1WinsD")
                P1Score++
                $(".tttSquare").off("click")
                $("#P1WinMessage").show()
                gameOver = true;
                return
            }
        }
    }
} //checks diagonal winner

const diagonalCheckReverse = function(){
    let P1Counter = 0;
    let P2Counter = 0;


            for (let i=2, j=0;i>-1, j<3;i--, j++){
            if (initialMatrix[i][j] != 0){

            if (initialMatrix[i][j] != 1){
                P2Counter ++

            } else {
                P1Counter ++

            }
            if (P2Counter == 3){
                    console.log("P2WinsDiag")
                    P2Score++
                    gameOver = true;

                    $("#P2WinMessage").show()
                    return

                }

            if(P1Counter == 3){
                    console.log("P1WinsDiag")
                    P1Score++
                    gameOver = true;
                    

                    $("#P1WinMessage").show()
                    return

                }

}
}} //checks other diagonal winner


const drawCheck = function(){
    if (drawCounter === 9){
        console.log("Draw")
        $("#DrawMessage").show()
    };

} //checks for the draw


const winCondition = function(){
    rowCheck()
    columnCheck()
    diagonalCheck()
    diagonalCheckReverse()
    drawCheck()

} //all the win condition functions

// Changes icon to selection -------------
$("#pink").on("click", function(){
    Player1Icon = "pink"
})

$("#aquamarine").on("click", function(){
    Player1Icon = "aquamarine"
})

$("#yellow").on("click", function(){
    Player2Icon = "yellow"
})

$("#lightseagreen").on("click", function(){
    Player2Icon = "lightseagreen"
})
// end icon selection change ----------

$(".tttsquare").click(function(){

    let dataRow = parseInt($(this).data("row"));
    let dataColumn = parseInt($(this).data("column"));


    if ($(this).hasClass("clicked") || gameOver){
        return;

    } 
    
    else if (drawCounter === 9 ){
        console.log("ANything")
        $(".tttSquare").off("click")
    
    }
    
    else if (playerTurn == 1){

        $(this).addClass("clicked")
        drawCounter++
        console.log(drawCounter)
        $(this).css("background-color", Player1Icon)
        //$(this).attr() = `<i class="fa fa-home"></i>`
        initialMatrix[dataColumn][dataRow] = 1;
        playerTurn = 2;
        
    } else {

        $(this).addClass("clicked")
        $(this).css("background-color", Player2Icon)
        drawCounter++
        console.log(drawCounter)
        initialMatrix[dataColumn][dataRow] = 2;
        playerTurn = 1;

    }

    winCondition()
    
}

) //adds ID and changes turn. 


$(".replaybutton").on('click', function(){

    $(".tttsquare").css("background-color", "purple")
    createMatrix()
    drawCounter=0;
    gameOver = false;
    $(".tttsquare").removeClass("clicked")
    $("#P1Score").html(P1Score)
    $("#P1WinMessage").hide()
    $("#P2Score").html(P2Score)
    $("#P2WinMessage").hide()
    $("#DrawMessage").hide()
    playerTurn = 1;


}) //reset variables and update score and reveal messages to play again


});























