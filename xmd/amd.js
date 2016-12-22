/**
 * Created by kexiao on 16/12/17.
 */
define('amd',['moduleA','moduleB'],function (a,b) {
    var sum = a+b;
    return {sum:sum};
});


//amd兼容commonjs的写法

define('common',function (require,exports,module) {
    var  a = require('./moduleA');
    var  b = require('./moduleB');

    exports.sum = a+b;

    module.exports={
        //body
    }
});
