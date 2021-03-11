
// You should implement your task here.
"use strict"

module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix)||matrix=== []){
        return [];
    }
    else{
        let mas = [];
        for(let i = 0; i < matrix.length; i++){
            if(i % 2 !== 0){
                matrix[i].reverse();
            }
            mas = mas.concat(matrix[i]);
        }
        return mas;
    }
    
}
