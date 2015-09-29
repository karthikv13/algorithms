
//Function for Insertion Sort Algorithm
exports.insertionSort= function(array){
  var i; 
  var len = array.length;
  var el;
  var j;

  for(i = 0; i<len; i++){
//the element to be Sorted
    el = array[i];
//Compare 2 adjacent elements at a time and sort them
    for(j=i; j>0 && array[j-1]>el; j--){
      array[j] = array[j-1];
      
   }

   array[j] = el;
  }

  return array;
}
        