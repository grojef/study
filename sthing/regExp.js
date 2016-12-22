/**
 * Created by kexiao on 16/12/11.
 */

var reg = new RegExp('s$','i');

console.log(/s$/.test('ab'));


console.log('asdfa34345s'.match(/\d+/));



console.log(/\w+@\w+\.\w+/.test('xk_xiaoke@163.com'));


pattern
var pattern = new RegExp('\\{(.| )+\\}','igm')

console.log('sdafa{sdf}'.match(pattern));



console.log(/[0-9]+\.[0-9]{0,3}$/.exec('235664'));




console.log(/\\d+/.test('-123.34'));

console.log('----------------------------');/([a-zA-Z])\1/

var temp ="aaa[bbb[ccc,ddd[eee,fff]],ggg[hhh,iii]]";


var p = new RegExp('.+\\[.+,.+\\]','g')

console.log(temp.match(p));


console.log(/\\([a-zA-Z]\\)\1/.test('(df)a45df'));

