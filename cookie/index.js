/**
 * Created by kexiao on 16/12/23.
 */

//设置cookies

(function (doc) {

    //设置cookie

    doc.cookie = 'name=tom';

    //设置10天后失效时间

    var date = new Date();

    date.setTime(date.getTime() + 10 * 24 * 3600);

    doc.cookie = 'name=tom;expires=' + date.toGMTString();

    //设置路径

    doc.cookie = 'name=tom;path=/shop';

    //设置domain

    doc.cookie = 'name=tom;domain=.tt.com';

    //删除cookies->设置过期时间

    var current = new Date();

    current.setTime(current.getTime() - 1000);

    doc.cookie = 'name=tom;expires=' + current.toGMTString();

    console.log(doc.cookie);

})(document);
