function calculateFilesInitial(arr, fileName) {
    var emptyArr = arr.filter(function(element) {
        return element === fileName
    });
    return emptyArr.length === 0 ? fileName : calculateFiles(arr, fileName);
}	
                        
function calculateFiles(arr, fileName) {
    
    var cleanedFile = fileName.split(".")[0].split("(")[0];
    var ext = fileName.split(".")[1];
    emptyArr = arr.filter(function(element) {
        return element.includes(cleanedFile);
    });
    var max = 0;
    var index = 0;
    emptyArr.forEach(function(currValue, i) {
        
        if(currValue.split("(").length > 1) {
            countA = parseInt(currValue.split("(")[1].split(")")[0]);
            if(countA >= max) {
                max = countA;
                index = i; 
            }
        }
    });
    
    return cleanedFile + "("+(parseInt(max)+1)+")."+ext;
}


var files = ["file.txt"];

var fileName = "file.txt";

console.log(calculateFilesInitial(files, fileName));