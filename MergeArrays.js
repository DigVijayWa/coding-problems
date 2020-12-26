/*
    Given two sorted arrays arr1[] and arr2[] of sizes N and M in non-decreasing order. 
    Merge them in sorted order without using any extra space. 
    Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements. 
 
*/

function mergeArrays(sortedArrayFirst, sortedArraySecond) {
    
    var indexFirst = 0;
    var indexSecond = 0;
    var finalArray = [];

    while(indexFirst < sortedArrayFirst.length && indexSecond < sortedArraySecond.length) {

        if(sortedArrayFirst[indexFirst] <= sortedArraySecond[indexSecond]) {
            finalArray.push(sortedArrayFirst[indexFirst++]);
        }
        else if(sortedArrayFirst[indexFirst] > sortedArraySecond[indexSecond]){
            finalArray.push(sortedArraySecond[indexSecond++]);
        }
    }
    while(indexFirst < sortedArrayFirst.length) {
        finalArray.push(sortedArrayFirst[indexFirst++]);
    }
    while(indexSecond < sortedArraySecond.length) {
        finalArray.push(sortedArraySecond[indexSecond++]);
    }

    return finalArray;
}

console.log(mergeArrays([0,1,2,3],[5,6,7,8,9]));