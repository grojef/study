/**
 * Created by kexiao on 16/11/28.
 */

//undefined,null,boolean, number,string,object


var mySymbol = Symbol('isOk');

var obj={};

obj[mySymbol] ='ok';

console.log(mySymbol.toString());


console.log(obj[mySymbol]);

