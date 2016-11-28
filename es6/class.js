/**
 * Created by kexiao on 16/11/28.
 */


class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name(name){
        this._name = name;
    }
    sayName() {
        console.log(this.name);
    }

    static sayAge(age){
        console.log(`this age is ${age}`);
    }


}

var p = new People('cat',3);

console.log(p.name);
console.log(p._name);

// class People {
//     constructor(name) { //构造函数
//         this.name = name;
//     }
//     get name() {
//         return this._name.toUpperCase();
//     }
//     set name(name) {
//         this._name = name;
//     }
//     sayName() {
//         console.log(this.name);
//     }
// }
// var p = new People("tom");
// console.log(p.name);    //1
// console.log(p._name);    //2
// p.sayName();    //3