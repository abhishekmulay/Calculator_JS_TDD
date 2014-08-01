describe("Calculator test suite",function(){

	var controller ,context ;
	beforeEach(function(){
        context = jQuery('<div />').attr('id','calculator_widget');
		controller  = new CalculatorController(context);
		controller.init();
	});

	describe("basic setup for the calculator testing",function(){

		it("shuould expose the calculator controller",function(){
		
			expect(controller).toBeDefined();
			expect(typeof CalculatorController).toBe('function');
		});

		describe("Checking methods on prototype ",function(){
			var methods = ['init','bindEvents','add','clear'];
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

	describe("basic arithmatic operations test suite",function(){
		var num1, num2;
		it("should add two numbers",function(){
			num1 = 20 , num2 = 50;
			expect(controller.add(num1,num2)).toEqual(num1+num2);
		});	
	});

	describe("Button functionality test suite",function(){

		it('should call clear() when clear button is clicked',function(){
		 	var clearButtonStub = $('<button />').attr('id','clear-btn');
		 	clearButtonStub.appendTo(context);
            controller.bindEvents();
            spyOn(controller,"clear");

            clearButtonStub.trigger('click');

		 	expect(controller.clear).toHaveBeenCalled();	
		});
	 });

});