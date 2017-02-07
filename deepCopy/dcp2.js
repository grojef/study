/**
 * Created by kexiao on 17/2/3.
 */

var obj ={name:'jom',age:10,friends:['Jack']}

var dest = Object.create(obj);

dest.friends = Object.create(obj.friends)

console.log(obj.age);

console.log(obj.friends);

console.log(obj.name);