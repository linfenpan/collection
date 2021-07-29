var G = {
    Event: {
        addChance: "addChance",
        updateMyPrize: "updateMyPrize",
        showMyPrize: "showMyPrize",
        drawPrize: "drawPrize"
    },
    _: $("<div></div>"),
    on: function(event, fn){
        this._.on(event, function(){
            fn.apply(null, [].slice.call(arguments, 1));
        });
        return this;
    },
    fire: function(event){
        this._.trigger(event, [].slice.call(arguments, 1));
    }
};
var userAgent = navigator.userAgent;
var isGPShopApp = !!window.SDK && /guopanGameStore/i.test(userAgent);
var isWeiXin = /MicroMessenger/i.test(userAgent);
var isMobile = /iphone|ipod|ipad|ipad|Android|nokia|blackberry|webos|webos|webmate|bada|lg|ucweb/i.test(userAgent);
