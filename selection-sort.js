exports.selectionSort= function(a){
  var minIdx, temp, 
      len = a.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(a[j]<a[minIdx]){
          minIdx = j;
       }
    }
    temp = a[i];
    a[i] = a[minIdx];
    a[minIdx] = temp;
  }
  return a;
}
