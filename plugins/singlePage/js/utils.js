var Utils = {
    ajax: function(method, url, params, callback){
        var def = $.Deferred();
        $[method](URL.domain + url, $.extend(params || {}, {params: URL.params}), $.noop, "json").done(function(data){
            switch (data.status) {
                case 1888:
                    def.resolve(data);
                default:
                    def.reject(data, data.msg);
            }
        }).fail(function(){
            def.reject();
            POP.autoTip("请求失败，请重试");
        });
        return def;
    },
    get: function(url, params){
        return this.ajax("get", url, params);
    },
    popAjaxError: function(data){
        if (data) {
            if (data.status == 1002) {
                Utils.jumpToLogin();
            } else {
                POP.autoTip(data.msg);
            }
        }
    },
    login: function(){
        gpShopAPP.call("jumpToLogin", function(){
            window.location.reload();
        });
    },
    bindPhone: function(){
        gpShopAPP.call("jumpToBindPhone", function(){
            window.location.reload();
        });
    },
    download: function(url, callback){
        gpShopAPP.call("download_pkg", {url: url}, function(){
            // { result: 2重复任务|1成功|0失败 }
            callback && callback.apply(this, arguments);
        });
    },
    downloadPkg: function(pkg, callback){
        gpShopAPP.call("download_pkg", {pkg: pkg}, function(){
            // { result: 2重复任务|1成功|0失败 }
            callback && callback.apply(this, arguments);
        });
    },

    format: function(str, data){
        return str.replace(/{{(.*?)}}/g, function(str, key){
            return data[key];
        });
    },
    value: function(data, str, def){
        try {
            var res = eval(arguments.callee.toString().match(/\(([^,)]*)/)[1] + "." + str);
            return typeof res === "undefined" ? def : res;
        } catch (e) {
            return def || null;
        }
    }
};
