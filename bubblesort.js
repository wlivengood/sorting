function swap(arr, ind1, ind2) {
	[arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}

function bubbleSort(arr) {
	for (var passes = 0; passes < arr.length; passes++) {
		for (var i = 0; i < arr.length - 1 - passes; i++) {
			var j = i + 1;
			if (arr[i] > arr[j]) {
				swap(arr, i, j);
			}
		}
	}
	return arr;
}
