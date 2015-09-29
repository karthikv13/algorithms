
//Importing Sorting files which have the algorithms 
var bubble=require('./bubble-sort');
var selection=require('./selection-sort');
var insertion=require('./insertion-sort');
var merge=require('./merge-sort');
var quick=require('./quick-sort');

//Initializing an Unsorted array
var a=[4,2,7,9,6,5,1,0,3,8];
var b=[4,2,7,9,6,5,1,0,3,8];
var c=[4,2,7,9,6,5,1,0,3,8];
var d=[4,2,7,9,6,5,1,0,3,8];
var e=[4,2,7,9,6,5,1,0,3,8];


console.log('Original Array: '+a);
//Calling Bubble Sort algorithm Fuction
var bubbleSort=bubble.bubbleSort(a);
console.log('Bubble Sort: '+bubbleSort);


console.log('Original Array: '+b);
//Calling Selection Sort algorithm Fuction
var selectionSort=selection.selectionSort(b);
console.log('Selection Sort: '+selectionSort);


console.log('Original Array: '+c);
//Calling Insertion Sort algorithm Fuction
var insertionSort=insertion.insertionSort(c);
console.log('Insertion Sort: '+insertionSort);


console.log('Original Array: '+d);
//Calling Merge Sort algorithm Fuction
var mergeSort=merge.mergeSort(d);
console.log('Merge Sort: '+mergeSort);


console.log('Original Array: '+e);
//Calling Quick Sort algorithm Fuction
var quickSort=quick.quickSort(e);
console.log('Quick Sort: '+quickSort);
