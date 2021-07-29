var gpShopAPP = ({
    platform: null,
    init: function(window){
        var ua = window.navigator.userAgent;
        if (/iphone|ipod|ipad/i.test(ua)) {
            this.platform = "ios";
            this.initIOS();
        } else {
            this.platform = "android";
            this.initAndroid();
        }
        return this;
    },
    initAndroid: function(){
        if (window.SDK) {
            this.bridge.resolve(window.SDK.callHandler.bind(window.SDK));
        } else {
            console.error("当前环境，在 PC 或 iOS");
            this.bridge.resolve(function(methodName, params, callback){
                console.log.apply(console, arguments);
                window[callback] && window[callback].call(null, {});
            });
        }
    },
    initIOS: function(){
        console.log("暂时用不上~，先用 android 的");
        this.initAndroid();
        // TODO 等待补充
        // var self = this;
		// function callback(bridge){
		// 	// 原来 bridge 一定要调用 init 之后，才会生效的说, 请谷歌搜索 WebViewJavascriptBridgeReady
		// 	bridge.init(function(data, responseCallback) {});
		// 	self.bridge.resolve(bridge.callHandler.bind(bridge));
		// }
		// // 如果这个对象已经存在了，就不用监听 WebViewJavascriptBridgeReady
		// if(window.WebViewJavascriptBridge) {
		// 	callback(window.WebViewJavascriptBridge);
		// }else{
		// 	window.document.addEventListener('WebViewJavascriptBridgeReady', function(event) {
		// 		var bridge = event.bridge;
		// 		callback(bridge);
		// 	}, false);
		// }
    },
    bridge: {
        fns: [],
        done: function(fn){
            this.fns.push(fn);
            this.isDone && this.execute();
            return this;
        },
        resolve: function(){
            this.isDone = true;
            this.args = arguments;
            return this.execute();
        },
        execute: function(){
            var fn = this.fns.shift();
            while (fn) {
                fn.apply(window, this.args);
                fn = this.fns.shift();
            };
            return this;
        }
    },
    call: function(method, param, callback){
        if (typeof param === "function") {
            callback = param;
            param = "";
        }
        this.bridge.done(function(callHandler){
            var solidFnName = this.jsonp(callback);
            if (this.platform === "ios") {
                callback = window[solidFnName];
            } else {
                callback = solidFnName;
            }
            typeof param !== "string" && (param = JSON.stringify(param));

            callHandler(method,  param, callback);
        }.bind(this));
    },
    jsonpId: 10000,
    jsonp: function(fn){
        var fnName = 'gp_shop_jsonp_fn' + this.jsonpId++;
        window[fnName] = fn;
        return fnName;
    }
}).init(window);
