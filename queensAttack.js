/**
 * Title: Given a position of two queens on a chessboard indicate whether or not
 *        they are positioned so that they can attack each other.
 */
//------------------------------------------------------------------------------------

function chessBoardPosition(row, column){
    this.row = row;
    this.column = column;

    this.getRow = () => row;
    this.getColumn = () => column;
}

var rowDifference = (pos1, pos2) => pos1.getRow() - pos2.getRow();
var columnDifference = (pos1, pos2) => pos1.getColumn() - pos2.getColumn();

function willAttack(pos1, pos2){
    if((rowDifference(pos1,pos2) >= -1 && rowDifference(pos1, pos2) <= 1) && 
        (columnDifference(pos1,pos2) >= -1 && columnDifference(pos1, pos2) <= 1))
        return true;

    return false;
}

var queenPos1 = new chessBoardPosition(5,5);
var queenPos2 = new chessBoardPosition(6,6);

if(willAttack(queenPos1, queenPos2))
    console.log("yes, they will attack");
else
console.log("no, they will not attack");