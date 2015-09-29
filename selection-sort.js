//Function for Selection Sort Algorithm
exports.selectionSort= function(array){
  var minIdx, temp, 
      len = array.length;
//Comparing first element in each pass with others and placing the smallest element on the left.
  for(var i = 0; i < len; i++){
    minIdx = i;
   //Finding the smallest element
    for(var  j = i+1; j<len; j++){
       if(array[j]<array[minIdx]){
          minIdx = j;
       }
    }
  //Swapping Elements
    temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  return array;
}
