module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return result;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
            result = result.concat(matrix[i]);
        } else {
            result = result.concat(matrix[i]);
        }
    }
    return result;
};
