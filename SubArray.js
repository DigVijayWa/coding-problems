/*
    Given an unsorted array A of size N of non-negative integers, 
    find a continuous sub-array which adds to a given number S.
*/
var assert = require('assert');
function findSubArray(arrayItems, sum) {
    var finalArray = [];
    arrayItems.forEach((element, index) => {
        
        if(element === sum) {
            finalArray.push([element]);
        }
        else {
            var tempArrayItem = [element];
            var tempSum = element;
            for(var i=index+1; i<arrayItems.length; i++) {

                tempSum += arrayItems[i];
                if(tempSum === sum || tempSum < sum) {
                    tempArrayItem.push(arrayItems[i]);
                    if(tempSum === sum){
                        finalArray.push(tempArrayItem);
                        break;
                    }
                }
                else {
                    break;
                }
            }
        }
    });
    return finalArray;
};


var items = [1,2,3,4,5,6,7,8,9,10];

console.log(findSubArray(items, 15));
assert.deepEqual(findSubArray(items, 15), [ [ 1, 2, 3, 4, 5 ], [ 4, 5, 6 ], [ 7, 8 ] ], "Expected array does not match received");