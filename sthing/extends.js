/**
 * Created by kexiao on 16/12/6.
 */

/**
 * 数组排重
 * @returns {Array}
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

/**
 * 数字补全
 * @param pre
 * @param len
 * @returns {*}
 */
String.prototype.padStart = function (pre,len) {
    if(this.length>=len){
        return this;
    }else{
        var arr=[];
        for(var i=0;i<len-this.length;i++){
            arr.push(pre);
        }
        arr.push(this)
        return arr.join('');
    }
}

console.log('123'.padStart('0',7));


/**
 * 日期格式化
 * @param fmt
 * @returns {*}
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    var week = {
        "0" : "/u65e5",
        "1" : "/u4e00",
        "2" : "/u4e8c",
        "3" : "/u4e09",
        "4" : "/u56db",
        "5" : "/u4e94",
        "6" : "/u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}


console.log(new Date().format('yyyy-MM-dd HH:mm:ss'));




