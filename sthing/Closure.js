/**
 * Created by kexiao on 16/12/9.
 */

function test1() {
    var i=9;
    return function () {
        return i++;
    }
}

var inner =test1();

console.log(inner());

console.log(inner());

console.log(inner());


function test2(){

    for(var i=0;i<10;i++){
        (function (i) {
            setTimeout(function () {
                console.log(i);
            },1000);
        })(i);
    }
}
test2();


var cache = (function(){
    var obj={};
    return {
        get:function (key) {
            return obj[key];
        },
        set:function (key,value) {
            obj[key]=value;
        }
    }
})();

cache.set('name','tom');

console.log(cache.get('name'));
















