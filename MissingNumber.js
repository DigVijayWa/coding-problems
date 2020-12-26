/*
    Given an array of size N-1 such that it can only contain distinct integers in the range of 1 to N. 
    Find the missing element.
*/

function findMissingNumber(arrayItems) {
    for(var i=0; i<arrayItems.length; i++) {

        if(arrayItems[i] !== i+1) {
            return i+1;
        }
    }
    return -1;
}

console.log(findMissingNumber([1,2,3,5]));
console.log(findMissingNumber([1,2,3,4,5,6,7,8,10]));
