/**
 * Created by kexiao on 16/12/17.
 */
(function (window, factory) {
    if (typeof exports === 'object') {

        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {

        define(factory);
    } else {

        window.eventUtil = factory();
    }
})(this, function () {
    //module ...
});