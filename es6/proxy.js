/**
 * Created by kexiao on 16/11/28.
 */


//base

const target={
    name:'ke',age:18
}

const handler = {
    get(target, key, proxy) {
        const today = new Date();
        console.log(`GET request made for ${key} at ${today}`);
        return Reflect.get(target,key,proxy);
    },
    set(target, key,value, proxy){
        //todo
        return Reflect.set(target, key,value,proxy);
    }
}

const proxy = new Proxy(target, handler);
proxy.age=19;

console.log(target.age);

