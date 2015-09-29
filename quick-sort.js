
//Function for Quick Sort Algorithm
exports.quickSort= function(array){
    var stack = [array];
    var sorted = [];

 
    while (stack.length) {
 
        var temp = stack.pop(), tl = temp.length;
 
        if (tl == 1) {
            sorted.push(temp[0]);
            continue;
        }

//Selecting First element as pivot        
        var pivot = temp[0];
        var left = [], right = [];

//Sorting elements with respect to pivot 
        for (var i = 1; i <tl; i++) {
            if (temp[i] < pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            }
        }

//Changing Pivot position 
        left.push(pivot);
 
        if (right.length)
            stack.push(right);
        if (left.length)
            stack.push(left);
    }
  return sorted;
}