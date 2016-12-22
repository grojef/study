/**
 * Created by kexiao on 16/12/14.
 */



var xhr=null;

if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else{
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

xhr.open('GET','src',true);

xhr.onreadystatechange= function () {
     if(xhr.readyState == 4){
         if(xhr.status == 200){
             //todo success
         }else{
             //todo error
         }
     }
}
xhr.send();




