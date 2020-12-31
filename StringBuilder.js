/*
Greg wants to build a string,  of length . Starting with an empty string, he can perform  operations:

    1. Add a character to the end of S for A dollars.
    2. Copy any substring of , and then add it to the end of S for B dollars.
Calculate minimum amount of money Greg needs to build .
*/

function indexSubString(str, currentStr, index) {
    var counter = 0;
    var subStr = "";
    for(var i = 0; i< currentStr.length; i++) {
        
        if(str[index] == currentStr[i]) {
            subStr += str[index];
            counter ++;
            index++;
        }
    }
    return {count: counter, str: subStr};
};
function decision(str, currentStr, priceA, priceB, index, totalLength) {
    if(index == 0) {
        
        currentStr += str[index];
        return priceA + decision(str, currentStr, priceA, priceB, index+1, totalLength);
    }
    else if(index < totalLength) {
        var obj = indexSubString(str, currentStr, index);
        currentStr += obj.str;
        if(obj.count == 1) {
            return priceA + decision(str, currentStr, priceA, priceB, index+obj.count, totalLength);
        }
        else if(obj.count > 1) {
            
            return priceA * obj.count >= priceB ?  priceB + decision(str, currentStr, priceA, priceB, index+obj.count, totalLength) : (priceA*obj.count) + decision(str, currentStr, priceA, priceB, index+obj.count, totalLength);
        }
        else {
            currentStr += str[index];
            return priceA + decision(str, currentStr, priceA, priceB, index+1, totalLength);
        }
    }
    else {
        return 0;
    }
}

function calculateMinAmount(str, totalLength, priceA, priceB) {
    var stringBuilder = "";
    return decision(str, stringBuilder, priceA, priceB, 0, totalLength);
}


console.log(calculateMinAmount("aabaacaba", 9, 4, 5));