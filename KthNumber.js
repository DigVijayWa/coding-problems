/* 
    Given an array arr[] and a number K where K is smaller than size of array, 
    the task is to find the Kth smallest element in the given array. 
    It is given that all array elements are distinct.
*/

function Heap(arrayItems) {
    
    this.heapSize = arrayItems.length;
    this.makeHeap(arrayItems);
    this.arrayHeap = arrayItems;
}

Heap.prototype.makeHeap = function(arrayItems) { 
    var length = arrayItems.length;
    var iteration = (length - 1) /2;
    
    while(iteration >= 0) {
        this.heapify(arrayItems, iteration);
        iteration--;
    }

    this.arrayHeap = arrayItems;
    return arrayItems;
}

Heap.prototype.heapify = function(arrayItems, index) {
    
    var leftIndex = (index * 2) + 1;
    var rightIndex = (index * 2) + 2;

    if(leftIndex < this.heapSize && arrayItems[leftIndex] > arrayItems[index]) {
        // swap index and leftIndex items
        //callHeapify again for leftIndex
        var temp = arrayItems[leftIndex];
        arrayItems[leftIndex] = arrayItems[index];
        arrayItems[index] = temp;

        this.heapify(arrayItems, leftIndex);
    }
    if(rightIndex < this.heapSize && arrayItems[rightIndex] > arrayItems[index]){
         // swap index and rightIndex items
         // call Heapify again for right.
         var temp = arrayItems[rightIndex];
         arrayItems[rightIndex] = arrayItems[index];
         arrayItems[index] = temp;
 
         this.heapify(arrayItems, rightIndex);
    }
}

Heap.prototype.removeMax = function() {
    if(this.heapSize == 0) {
        console.log("Somethings wrong I can feel it.");
        return Infinity;
    } 

    var root = this.arrayHeap[0];
    
    if(this.heapSize > 1) {
        this.arrayHeap[0] = this.arrayHeap[this.heapSize - 1];
        this.heapify(this.arrayHeap, 0);
    }
    this.heapSize--;

    return root;
}


var heapItem = new Heap([1,2,3,4,5]);

// find kth largest element 

var k = 2;
var item = Infinity;
for(var i=0; i<k; i++){
    item = heapItem.removeMax();
}

console.log(item);