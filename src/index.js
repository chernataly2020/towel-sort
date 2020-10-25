
// You should implement your task here.


module.exports = function towelSort(matrix) {
    let finish = [];
    if (typeof matrix === 'undefined') return finish;
    for (i = 0; i <= matrix.length - 1; i++) {
        if (i % 2 !== 0)
            finish.concat(matrix[i].reverse());
        else
            finish.concat(matrix[i]);
    }
    return matrix.flat();
}
