

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
*/


function medianArray (nums1, nums2) {
        var lengthFirst = nums1.length;
        var lengthSecond = nums2.length;
        
        var index=0, indexFirst=0, indexSecond = 0;
        var emptyArr = [];

        while(index <= (lengthFirst + lengthSecond) /2 ) {
            
        if(indexFirst < lengthFirst && indexSecond < lengthSecond) {
                
                if(nums1[indexFirst] < nums2[indexSecond])  {
                
                    emptyArr.push(nums1[indexFirst++]);

                }
                else {
                    emptyArr.push(nums2[indexSecond++]);
                }
        }
        else if (indexFirst < lengthFirst) {
                emptyArr.push(nums1[indexFirst++]);
        }
        else if (indexSecond < lengthSecond) {
                emptyArr.push(nums2[indexSecond++]);
        }
        index++; 
        }

        return ((lengthFirst + lengthSecond) % 2 == 0 ) ? 
        ((emptyArr[emptyArr.length-2] + emptyArr[emptyArr.length-1]) / 2) : 
        emptyArr[emptyArr.length-1];
}




console.log(medianArray([1,2],[3,4]));