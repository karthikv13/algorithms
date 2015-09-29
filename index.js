var bubble=require('./bubble-sort');
var a=[4,2,7,9,6,5,1,0,3,8];
console.log('Original Array: '+a);
var b=bubble.bubbleSort(a);
console.log('Bubble Sort: '+b);

var selection=require('./selection-sort');
var c=selection.selectionSort(a);
console.log('Selection Sort: '+c);

var insertion=require('./insertion-sort');
var d=insertion.insertionSort(a);
console.log('Insertion Sort: '+d);

var merge=require('./merge-sort');
var e=merge.mergeSort(a);
console.log('Merge Sort: '+e);

var quick=require('./quick-sort');
var f=quick.quickSort(a);
console.log('Quick Sort: '+f);