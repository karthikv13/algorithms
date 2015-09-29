
//Function for Merge Sort Algorithm
var obj={
mergeSort: function(array){
//Dividing Array into 2
    if (array.length > 1) {
        return merge(obj.mergeSort(array.slice(0, Math.ceil(array.length/2))),
            obj.mergeSort(array.slice(Math.ceil(array.length/2))), []);
    } else {
        return array;
    }
}
}
module.exports=obj; //Using this as it is a recursive function

//Sorting the elements and Merging the divisons back together 
function merge(left, right, array){
    if (left.length == 0 && right.length == 0) {
        return array;
    } else if (left.length == 0) {
        return array.concat(right);
    } else if (right.length == 0) {
        return array.concat(left);
    } else if (left[0] < right[0]) {
        array.push(left.shift());
    } else if (left[0] > right[0]) {
        array.push(right.shift());
    } else {
        array.push(left.shift());
        right.shift();
    }
    return merge(left, right, array);
}

