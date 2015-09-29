exports.bubbleSort= function(a){
	var n=a.length
	for(var i=0; i<=n; i++)
	{
		for(var j=0;j<(n-i); j++)
		{
			if(a[j]>a[j+1])
			{
				var temp=a[j+1];
				a[j+1]=a[j];
				a[j]=temp;
			}
		}
	}
	return a;
}