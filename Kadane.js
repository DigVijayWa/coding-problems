/*
    Given an array arr of N integers. Find the contiguous sub-array with maximum sum.
*/


function findMaxSubArray(arrayItems) {
    
    var finalArray = [];

    arrayItems.forEach((element, index) => {
        var tempSum = element;
        finalArray.push(element);
        for(var i=index+1; i<(arrayItems.length); i++) {
            tempSum += arrayItems[i];
            finalArray.push(tempSum);
        }
    });

    finalArray = finalArray.sort(function(a,b) { return b-a; });

    return finalArray[0];
}


console.log(findMaxSubArray([1,2,3,-2,5]));