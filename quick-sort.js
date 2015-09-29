exports.quickSort= function(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;

  if(left < right){
    pivot = right;
    var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  var temp = arr[right];
   arr[right] = arr[partitionIndex];
   arr[partitionIndex] = temp;
    
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
