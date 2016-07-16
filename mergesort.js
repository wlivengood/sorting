function split(arr) {
	if (arr.length === 1)
		return arr[0];
	else
	{
		var mid = Math.floor(arr.length / 2);
		return [arr.slice(0,mid),arr.slice(mid,arr.length)];	
	}
	
}

function merge(left, right, compFunc) {
	console.log("merging: ",left," and ",right);
	left = [].concat(left);
	right = [].concat(right);
	var merged = [];
	var run = true;
	while (left.length > 0 && right.length > 0)
	{
		if (compFunc(left[0], right[0]) === -1)
			merged.push(left.shift());
		else
			merged.push(right.shift());
	}
		
	if (left.length === 0) 
		merged = merged.concat(right);
	else if (right.length === 0)
		merged = merged.concat(left);
	console.log("merged: ",merged);
	return merged;
}

function mergeSort(arr, compFunc) {
	if (compFunc === undefined) {
		compFunc = function(a,b) {
			if (a < b)
				return -1;
			else if (a > b)
				return 1;
			else
				return 0;
		}
	}
	if (arr.length === 0)
		return [];
	else if (arr.length === 1) {
		return [arr[0]];
	}
	else{
		var l = split(arr)[0];
		var r = split(arr)[1];
		l = mergeSort(l, compFunc);
		r = mergeSort(r, compFunc);

		return merge(l, r, compFunc);
	}
}

