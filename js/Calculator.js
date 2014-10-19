(function(){
    "use strict";

    function Calculator(context){
        this.context = $(context);
    };


    Calculator.prototype.init = function(){

    };

    Calculator.prototype.clear = function(){
        $('#display-box').val('');
    };


    Calculator.prototype.bindEvents = function(){
        var self  = this;

        this.context.find('#clear-btn').click(function(){
            self.clear();
        });

    };



    Calculator.prototype.add = function(num1,num2){
        return num1+num2;

    };








    window.Calculator  = Calculator;

})();




























//(function(undefined){
//    "use strict";
//
//	function Controller(context){
//		this.context = $(context);
//        this.numOne = 0.0;
//	};
//
//	Controller.prototype.add = function(num1 , num2 ){
//		return num1+num2;
//	};
//
//	Controller.prototype.clear = function(){
//        $('#display-box').val('');
//	};
//
//    Controller.prototype.displayNumber = function(value){
//        var oldValue = $('#display-box').val();
//        $('#display-box').val(oldValue+value);
//
//    };
//
//    Controller.prototype.bindEvents = function(){
//        var self = this;
//
//        this.context.find('#clear-btn').click(function(){
//            self.clear();
//        });
//
//        this.context.find('#add-btn').click(function(){
//            var currentValueInBox = $("#display-box").val();
//            self.setNumOne(currentValueInBox);
//            self.clear();
//            self.add();
//
////            TO-Do :
////            1) clear screen after clciking =
////            2) setNumTwo as second parameter
////            3) change signature of add method.
//
//        });
//
//        this.context.find('button').not('.symbols').on("click",function(){
//            var clickedButton = $(this);
//            var value = clickedButton.text();
//            self.setNumOne(value);
//            self.displayNumber(value);
//        });
//    };
//
//    Controller.prototype.getNumOne = function(){
//        return this.numOne;
//    };
//
//    Controller.prototype.setNumOne = function (value) {
//        if(value != '' && !isNaN(value) && value != null && value !== undefined){
//            this.numOne = parseFloat(value);
//        }else{
//            this.numOne = 0.0;
//        }
//    };
//
//    Controller.prototype.init = function(){
//        this.bindEvents();
//    };
//
//	window.CalculatorController = Controller;
//
//})();