/**
 * Title : Calculate the number of grains on a square on a chessboard given that 
 *         the number of grains on each sqaure doubles.
 */
//------------------------------------------------------------------------------------

const totalRows = 8;
const totalColumns = 8;

var currentRow = 7;                 //starting index = 0
var currentColumn = 7;              //starting index = 0

const increaseRate = 2;

const grains  = Math.pow(increaseRate,(totalRows*currentRow)+currentColumn);
console.log(grains);
    