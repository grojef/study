/**
 * Created by kexiao on 16/12/7.
 */


var ul = document.getElementById('ul');
var fragment = document.createDocumentFragment();
for(var i=0;i<1000;i++){
    var li = document.createElement('li');
    fragment.appendChild(li);
}
ul.appendChild(ul);

document.body.appendChild(ul);








