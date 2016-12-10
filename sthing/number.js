/**
 * Created by kexiao on 16/12/8.
 */


function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}


console.log(isPalindrome('aba'));


function add(n1,n2) {

    var r1,r2,m;

    r1 = (''+n1).split('.')[1].length;
    r2 = (''+n2).split('.')[1].length;

    m=Math.pow(10,Math.max(r1,r2));
    return (n1*m+n2*m)/m;
}

console.log(add(0.1,0.2));


/**
 * 判断是否为整数
 * @param num
 * @returns {boolean}
 */
function isInteger(num) {
    return parseInt(num,10) === num;
}


Number.isInteger(0.34);

// (2^53~2^53) //[]
Number.isSafeInteger(8799);

console.log(isInteger(0.34));



//函数没有写明return的。默认返回return undefined

var i = 0;
function fn(){
    i++;
    if(i < 10){
        fn();
    }else{
        return i;
    }
}

console.log(fn());



