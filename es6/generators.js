/**
 * Created by kexiao on 16/11/10.
 */

function* chat(name) {
    yield `hello ${name}!`;
    yield `hope you like this article`;
    yield `my be you like ?`;
}

let iter = chat('kexiao');

console.log(iter);


gen=(array)=>{
   let index=0;
    return{
        next:()=>{
           return index<array.length?{
                value:array[index++],done:true
            }:{
                value:undefined,done:false
            }
        }
    }
}


var gen_inner =gen(['fruit','mike','surge']);


console.log(gen_inner.next());
console.log(gen_inner.next());
console.log(gen_inner.next());
console.log(gen_inner.next());














