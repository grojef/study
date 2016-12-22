/**
 * Created by kexiao on 16/12/11.
 */

function combo(msg){
    var arr = msg.split("-");
    var len = arr.length;  //将arr.length存储在一个局部变量可以提高for循环效率
    for(var i=1;i<len;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
    }
    while(len--){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
    }
    msg=arr.join("");
    return msg;
}


['1','2','3'].map(function () {
    console.log(arguments);
});

console.log(parseInt(2,0));