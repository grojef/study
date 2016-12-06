/**
 * Created by kexiao on 16/12/4.
 */

var array =[1,2,3,5];

console.log(array.constructor);

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






