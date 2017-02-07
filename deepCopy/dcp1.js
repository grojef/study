/**
 * Created by kexiao on 17/2/3.
 */


function deepCopy(source) {
    if (source instanceof Array) {
        return source.concat();
    } else if (typeof source === 'object') {
        var result = {};
        for (var key in source) {
            result[key] = typeof source[key] === 'object' ? arguments.callee(source[key]) : source[key];
        }
        return result;
    } else {
        return source;
    }
}

console.log(deepCopy([12,23]));


function deepCopy2(source){
    if(typeof source ==='object'){
        if(Object.prototype.toString.call(source) ==='[object Array]'){
            return source.concat();
        }else{
            var result={};
            for(var key in source){
                result[key] = typeof source[key] ==='object'? arguments.callee(source[key]):source[key];
            }
            return result;
        }
    }else{
        return source;
    }
}

console.log(deepCopy2('123'));