(function(){

	function Controller(context){
		this.context = $(context);
	};

	Controller.prototype.add = function(num1 , num2 ){
		return num1+num2;
	};

	Controller.prototype.clear = function(){
		console.log('in clear');
	};

    Controller.prototype.bindEvents = function(){
        var self = this;

        this.context.find('#clear-btn').click(function(){
            self.clear();
        });
    };

    Controller.prototype.init = function(){
        this.bindEvents();
    };

	window.CalculatorController = Controller;
})();