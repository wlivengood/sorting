describe('mergeSort', function(){
	beforeEach(function() {
		spyOn(window, 'split').and.callThrough();
		spyOn(window, 'merge').and.callThrough();
		spyOn(window, 'mergeSort').and.callThrough();
	});

	it('handles an empty array', function(){
		expect( mergeSort([]) ).toEqual( [] );
	});

	it('handles an array of one item', function(){
		expect( mergeSort([5]) ).toEqual( [5] );
	});

	it('sorts a larger array', function(){
		expect( mergeSort([3,5,2,4,1])).toEqual( [1,2,3,4,5]);
	});

	it("calls merge", function() {
		mergeSort([2,1]);
		expect(merge.calls.any()).toEqual(true);
	});

	it("calls split", function() {
		mergeSort([2,1]);
		expect(split.calls.any()).toEqual(true);
	});

	it("calls itself recursively", function() {
		mergeSort([2,1]);
		expect(mergeSort.calls.count()).toBeGreaterThan(1);
	});
});
