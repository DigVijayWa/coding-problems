/*
    Given an array of distinct integers. 
    The task is to count all the triplets such that sum of two elements equals the third element.
*/

/*
    possible solution : 
        1. sort the array in descending order : 
        2. traverse 0 - (size - 3)
        3. check for triplets
*/
function findTriplets(arrayItems) {
    
    var finalArray = [];
    
    arrayItems = arrayItems.sort(function(a,b){
        return b-a;
    });

    for(var index=0; index < (arrayItems.length-2); index++) {
        var element = arrayItems[index];
        var tempArray = [];
        for(var i=index+1; i<(arrayItems.length-1); i++) {

            if(element == (arrayItems[i] + arrayItems[i+1])) {
                tempArray = [element,arrayItems[i],arrayItems[i+1]];
                break;
            }
            else if(element < (arrayItems[i] + arrayItems[i+1])){
                break;
            }
        }
        if(tempArray.length > 0){
            finalArray.push(tempArray);
        }
    }
    return finalArray;
}


console.log(findTriplets([1, 5, 3, 2]));
console.log(findTriplets([4, 3, 2]));