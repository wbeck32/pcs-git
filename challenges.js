//challenges.js

//console.log(sum(2,4));
//console.log(subtract(5,7));
//console.log(introduce('Joe','Jane','the circus'));
//console.log(difference(5,7));

var prompt = require('prompt');

var properties = [
{
	name: 'choice',
	message: '\nPress 1 for sum, press 2 for subtract, press 3 for introduce, press 4 for difference' 
}
]



prompt.start();



prompt.get(properties, function(err, result){
	if (err) { return onErr(err); }

    switch (result.choice){
    	case "1":
    		prompt.get(['firstNum','secondNum'], function(err,params){
    			console.log(sum(parseInt(params.firstNum),parseInt(params.secondNum)));
    		});
    		break;
    	case "2":
    		prompt.get(['firstNum','secondNum'], function(err, params){
    			console.log(subtract(parseInt(params.firstNum),parseInt(params.secondNum)));
    		});
    		break;
    	case "3":
    		prompt.get(['personA','personB','subject'], function(err, params){
    			console.log(introduce(params.personA,params.personB,params.subject));
    		});
    	case "4":
    		prompt.get(['firstNum','secondNum'], function(err, params){
    			console.log(difference(parseInt(params.firstNum),parseInt(params.secondNum)));
    		});
    		break;
    	default:
    		break;
    }


});

  function onErr(err) {
    console.log(err);
    return 1;
  }

function subtraction(x,y) {return x - y;}

function sum(a,b) {
	//adds two numbers and returns a sentence containing the values
	var sum = a + b;
	return a+" plus "+b+" equals "+sum+".";
}

function subtract(i,j) {
	//subtract first number from second number
	return i+" minus "+j+" equals "+subtraction(i,j)+"."; 

}

function introduce(personA,personB,subject) {
	//writes a sentence about these two meeting
	return personA+" has been introduced to "+personB+". They are talking about "+subject+".";
}

function difference(m,n) {
	//finds the absolute value of the difference between two numbers
	if(subtraction(m,n) < 0) {
		return "The absolute value of "+m+" minus "+n+" is "+subtraction(m,n) * -1+".";
	} else {
		return "The absolute value of "+m+" minus "+n+" is "+subtraction(m,n)+".";
	}
}