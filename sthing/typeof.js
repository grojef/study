/**
 * Created by kexiao on 16/12/4.
 */


// JS 变量 字符串、数字、布尔、数组、对象、Null、Undefined、Symbol

var obj ={};

var array =[1,2,3,5];

var flag =true;

var num =123;

var unfid =undefined;

var nu =null;

var str ='hello';

var sym = Symbol('');

console.log(Object.prototype.toString.call(obj));

console.log(Object.prototype.toString.call(array));

console.log(Object.prototype.toString.call(flag));


console.log(Object.prototype.toString.call(num));

console.log(Object.prototype.toString.call(unfid));

console.log(Object.prototype.toString.call(nu));

console.log(Object.prototype.toString.call(str));

console.log(Object.prototype.toString.call(sym));

console.log(false == '0')
console.log(false === '0')

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;

a[c]=456;

console.log(a[b]);

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        var that = this;
        return that._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity.call(hero));

console.log(hero.getSecretIdentity());






