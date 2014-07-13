// we will start with writting a test suite using jasmine

describe("Calculator test suite",function(){

	describe("basic setup for the calculator testing",function(){

		it("shuould expose the calculator controller",function(){
			var controller  = new CalculatorController();
			expect(controller).toBeDefined();
			expect(typeof CalculatorController).toBe('function');
		});

		describe("should have methods on prototype ",function(){
			var methods = ['init','bindEvents'];
			exposesMethods(CalculatorController.prototype,methods);
		});

		function exposesMethods(object,methods){
			$.each(methods , function( index ,method){
				it("exposes "+method,function(){
					expect(object[method]).toBeDefined();
					expect(object[method] instanceof Function).toBeTruthy();
				});
			});
		}


	});

});