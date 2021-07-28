const wordSearch = (letters, word) => {

    const transpose = function (matrix) {
        // Put your solution herehhh h
        let rows = matrix.length;
        let cols = matrix[0].length;
        let rmatrix = [];
        let rrow;

        for (let i = 0; i < cols; i++) {   // iterating through the number of the original matrix's columns
            rrow = [];                      //for every iteration, we declare a new empty row
            for (let j = 0; j < rows; j++) {    //for every element in that row, we push one element of the original matrix UNTIL we reach the column #
                rrow.push(matrix[j][i]);          //when we reach j, we go back and declare a new empty row and start again
            }
            rmatrix.push(rrow);       //we've populated the entire new row, so we push it to the new matrix
        }
        return rmatrix;
    };

    const printMatrix = (matrix) => {
        for (const row of matrix) {
            for (const el of row) {
                process.stdout.write(el + " ");
            }
            process.stdout.write('\n')
        }
    }

    let newArr = transpose(
        letters
    );

    // console.log(newArr);

    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = newArr.map(ls => ls.join(''));

    // console.log(horizontalJoin)
    // console.log(verticalJoin)

    let horiCheck = false
    let vertCheck = false


    for (l of verticalJoin) {
        if (l.includes(word)) { horiCheck = true}
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) { vertCheck = true}
    }

    if (horiCheck === true || vertCheck === true){
        return true
    } else {
        return false
    }

}

module.exports = wordSearch