var Empty = null;

function noop(){ };

function $(selector){
    return typeof selector === "string" ? document.querySelector(selector) : selector;
};

function addListener(elem, event, callback, isBubble){
    var arr = event.split(" ");
    arr.forEach(function(event, index){
        elem.addEventListener(event, callback, isBubble || false);
    });
};

function hasProperty(obj, pro) {
    return obj.hasOwnProperty(pro);
};

function toArray(obj){
    return [].slice.call(obj, 0);
};

function each(obj, fn){
    for (var i in obj) {
        if (hasProperty(obj, i)) {
            fn.call(obj, obj[i], i, obj);
        }
    }
};

function extend(source, target){
    each(target, function(value, key){
        source[key] = value;
    });
    return source;
};

var htmlStyle = document.documentElement.style;

var cssPrefix = (function(style){
    var prefix = "";
    var list = ["webkitT", "MozT", "msT", "oT", "t"];

    for (var i = 0, max = list.length; i < max; i++) {
        var item = list[i];
        if (style.hasOwnProperty(item + "ransform")) {
            prefix = item.slice(0, -1);
            break;
        }
    }

    return prefix;
})(htmlStyle);

function queryPrefix(key) {
    if (key in htmlStyle || htmlStyle.hasOwnProperty(key)) {
        return key;
    }
    return cssPrefix + key.slice(0, 1).toUpperCase() + key.slice(1);
};

function css(elem, cssObject){
    var style = elem.style;
    each(cssObject, function(value, key){
        style[queryPrefix(key)] = value;
    });
};

function getTranslateX(elem){
    var x = elem.style[queryPrefix("transform")];
    x = x && parseInt(x.match(/translateX\((.*?)\)/)[1]) || 0;
    return x;
};

function setTranslateX(elem, x, duration) {
    css(elem, {transform: "translateX("+ x +"px)", transitionDuration: (duration || 0) + "ms"})
};
