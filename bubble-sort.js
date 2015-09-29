//Function for Bubble Sort Algorithm
exports.bubbleSort= function(array){
	var n=array.length
//Number of passes to be done
	for(var i=0; i<=n; i++)
	{
//Checking all elements and placing the largest element at the end of the array.
		for(var j=0;j<(n-i); j++)
		{
		//Swapping Elements
			if(array[j]>array[j+1])
			{
				var temp=array[j+1];
				array[j+1]=array[j];
				array[j]=temp;
			}
		}
	}
	return array;
}