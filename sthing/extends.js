/**
 * Created by kexiao on 16/12/4.
 */

function Person(name) {
    this.name =name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
}

function Child(age,name) {
    this.age = age;
    this.temp = Person;
    this.temp(name);
    delete this.temp;
   // Person.call(this,name);
   // Person.apply(this,[name]);
}

Child.prototype = new Person();


Child.prototype.constructor = Child;


Child.prototype.sayHi = function () {
    console.log(this.age);
}


var p = new Person('tom');


var c = new Child(18,'cat');


p.sayName();

c.sayHi();

console.log(c.constructor);
