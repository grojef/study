/**
 * Created by kexiao on 16/12/6.
 */

Array.prototype.unique = function () {
    var _temp={},_arr=[];
    for(var i=0;i<this.length;i++){
        var item =this[i];
        if(!_temp[item]){
            _arr.push(item);
            _temp[item]=true;
        }
    }
    return _arr;
}

console.log([1,3,2,3,2,3,54,34,34,34,52,54].unique());


