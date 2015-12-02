var chessBoard = [];
var queens = [];
var xAxis = [];
var yAxis = [];


function forEach(collection, callback){
    if(Array.isArray(collection)){
        for(var i=0; i<collection.length;i++){
            callback(collection[i])
        }
    } else {
        for(var key in collection){
            callback(collection[key])
        }
    }
}

var newChessBoard = function(length){
    console.log("RESET")
    console.log(" ")
    chessBoard = [];
    xAxis = [];
    yAxis = [];
    queens = [];
    for(var i=1; i<length+1; i++){
        for(var j=1; j<length+1; j++){
            chessBoard.push([i,j])
        }
    }
}

var createQueen = function(x,y){
    var newQueen = [x,y];
    forEach(xAxis, function(v){
        if(v === x){
            console.log("CANNONT ADD QUEEEN")
            return false;
        }
    })
    forEach(yAxis, function(v){
        if(v === y){
            console.log("CANNONT ADD QUEEEN")
            return false;
        }
    })
    queens.push(newQueen)
    xAxis.push(x);
    yAxis.push(y);
    for(var i=0; i<chessBoard.length; i++){
        if(chessBoard[i][0] === x && chessBoard[i][1] === y){
            chessBoard.splice(i, 1);
        }
    }
    for(var j=0; j<chessBoard.length; j++){
        if(chessBoard[j][0] === x){
            chessBoard.splice(j,1);
            j--;
        }
    }
    for(var k=0; k<chessBoard.length; k++){
        if(chessBoard[k][1] === y){
            chessBoard.splice(k,1);
            k--;
        }
    }
    for(var l=0; l<chessBoard.length; l++){
        var value1 = Math.abs(chessBoard[l][0] - x)
        var value2 = Math.abs(chessBoard[l][1] - y)
        //console.log("1: ",value1);
        //console.log("2: ",value2);
        if(value1 === value2){
            chessBoard.splice(l,1);
            l--;
        }
    }

    console.log("Queens: ", queens);
    console.log("chessBoard: ", chessBoard);
    console.log("mxCount: ", queens.length)
    console.log(" ")
    // check row, column, and diagonal;
}

newChessBoard(4)
createQueen(1,1);
createQueen(2,3);
//createQueen(4,3);

var findMaxQueen = function(chessBoardSize){
    var mxQueens = 0;
    newChessBoard(chessBoardSize);
    for(var y =0; y<chessBoard.length; y++){
        for(var z=0; z< chessBoard.length; z++){
            createQueen(chessBoard[z][0],chessBoard[z][1] )
        }
        if(queens.length > mxQueens){
            mxQueens = queens.length;
        }
    }
    console.log("Solution: ",mxQueens+1);

}

findMaxQueen(4);