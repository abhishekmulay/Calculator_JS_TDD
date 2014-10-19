describe("calculator test suite",function(){


    it('should expose calculator controller',function(){

        var calculator  = new Calculator();
        expect(calculator).toBeDefined();

    });


    describe('testing methods on prototype',function(){

        var methods = ['init'];

    	exposesMethods(Calculator.prototype,methods);

    });

    function exposesMethods(object,methods){
        $.each(methods , function( index ,method){
            it("exposes "+method,function(){
                expect(object[method]).toBeDefined();
                expect(object[method] instanceof Function).toBeTruthy();
            });
        });
    }


    describe("testing basic arithmetic functionality",function(){


        it("should add two muners",function(){

            var num1 =123;
            var num2 =23;

            var calculator  = new Calculator();

            expect(calculator.add(num1,num2)).toEqual(num1+num2);

        });


        it('should call clear() on clicking clear button',function(){


            var context  =  $('<div />');
            var clearButtonStub = $('<button> /').attr('id','clear-btn');
            clearButtonStub.appendTo(context);

            var calculator  = new Calculator(context);

            spyOn(calculator,"clear");

            calculator.bindEvents();

            clearButtonStub.trigger('click');

            expect(calculator.clear).toHaveBeenCalled();

        });


    });


});






































//describe("Calculator test suite",function(){
//
//	var controller ,context ;
//	beforeEach(function(){
//        context = jQuery('<div />').attr('id','calculator_widget');
//		controller  = new CalculatorController(context);
//		controller.init();
//	});
//
//	describe("basic setup for the calculator testing",function(){
//
//		it("shuould expose the calculator controller",function(){
//
//			expect(controller).toBeDefined();
//			expect(typeof CalculatorController).toBe('function');
//		});
//
//		describe("Checking methods on prototype ",function(){
//			var methods = ['init',
//                            'bindEvents',
//                            'add',
//                            'clear',
//                            'displayNumber'
//                         ];
//
//			exposesMethods(CalculatorController.prototype,methods);
//		});
//
//		function exposesMethods(object,methods){
//			$.each(methods , function( index ,method){
//				it("exposes "+method,function(){
//					expect(object[method]).toBeDefined();
//					expect(object[method] instanceof Function).toBeTruthy();
//				});
//			});
//		}
//
//	});
//
//	describe("basic arithmatic operations test suite",function(){
//		var num1, num2;
//		it("should add two numbers",function(){
//			num1 = 20 , num2 = 50;
//			expect(controller.add(num1,num2)).toEqual(num1+num2);
//		});
//	});
//
//	describe("Button functionality test suite",function(){
//
//		it('should call clear() when clear button is clicked',function(){
//		 	var clearButtonStub = $('<button />').attr('id','clear-btn');
//		 	clearButtonStub.appendTo(context);
//            controller.bindEvents();
//            spyOn(controller,"clear");
//
//            clearButtonStub.trigger('click');
//
//		 	expect(controller.clear).toHaveBeenCalled();
//		});
//
//        it('should call add() when ADD button is clicked',function(){
//            var addButtonStub = $('<button />').attr('id','add-btn').attr('data-operator','ADD');
//            addButtonStub.appendTo(context);
//            controller.bindEvents();
//            spyOn(controller,"add");
//
//            addButtonStub.trigger('click');
//
//            expect(controller.add).toHaveBeenCalled();
//
//        });
//
//        it("should display pressed digit in the display box",function(){
//            var buttonStub = $('<button />').attr('id','3-btn').text('3');
//              buttonStub.appendTo(context);
//              controller.bindEvents();
//
//              spyOn(controller,"displayNumber");
//
//              buttonStub.trigger('click');
//              expect(controller.displayNumber).toHaveBeenCalled();
//        });
//
//        it('should get first number after clicking on any operator button',function(){
//            var addButtonStub = $('<button />').attr('id','add-btn').attr('data-operator','ADD').addClass('symbols');
//            addButtonStub.appendTo(context);
//            var buttonStub = $('<button />').attr('id','3-btn').text('3');
//            buttonStub.appendTo(context);
//            controller.bindEvents();
//
//            buttonStub.trigger('click');
//            addButtonStub.trigger('click');
//
//            var expected = parseFloat(buttonStub.text());
//            expect(controller.getNumOne()).toEqual(expected);
//
//        });
//
//	 });
//
//
//});