describe('Bubble Sort', function(){
	beforeEach(function() {
		spyOn(window, 'swap').and.callThrough();
	});

	it('handles an empty array', function(){
		expect( bubbleSort([]) ).toEqual( [] );
	});
	
	it('handles an array of one item', function() {
		expect( bubbleSort([5])).toEqual( [5]);
	});
	
	it('handles a full array', function() {
		expect( bubbleSort([5,4,3,2,1])).toEqual( [1,2,3,4,5]);
	});
	
	it("calls swap", function() {
		bubbleSort([2,1]);
		expect(swap.calls.count()).toEqual(1);
	});
	
	it("doesn't swap in sorted array", function() {
		bubbleSort([1,2,3,4,5]);
		expect(swap.calls.count()).toEqual(0);
	});
	
	it("calls swap at most n*(n-1)/2 times", function() {
		bubbleSort([3,6,5,2,9,7,6,3,9,6,4]);
		expect(swap.calls.count()).toBeLessThan(55);
	});
});
