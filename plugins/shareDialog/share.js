define(function(require, exports, module){

    var ui = {
        init: function(dom, options){
            this.dom = typeof dom == "string" ? document.getElementById(dom) : dom;
            options = options || {};
            this.options = {
                css: !!options.css,
                template: options.template || '<a href="#{href}" target="_blank" class="wap-share-item wap-share-item-#{$key}">#{title}</a>',
                list: ["sinawb", "friendgp", "qqfriend", "qqarea"],
                data: {
                    sinawb: {
                        title: "新浪微博",
                        href: 'http://service.weibo.com/share/share.php?url=#{url}&title=#{content}&pic=#{image}&searchPic=false'
                    },
                    friendgp: {
                        title: "朋友圈",
                        href: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=#{url}&title=#{title}&desc=&summary=#{content}&pics=#{image}'
                    },
                    qqfriend: {
                        title: "QQ好友",
                        href: 'http://connect.qq.com/widget/shareqq/index.html?url=#{url}&showcount=0&desc=&summary=#{content}&title=#{title}&pics=#{image}'
                    },
                    qqarea: {
                        title: "QQ空间",
                        href: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=#{url}&title=#{title}&desc=&summary=#{content}&pics=#{image}'
                    }
                }
            };
            this.shareData = {};
            this.setShare({title: document.title, content: document.title, image: '', url: window.location.href});

            // 合并配置
            if(options.data){
                var data = options.data, item;
                for(var i in data){
                    if(data.hasOwnProperty(i)){
                        item = this.options[i] = this.options.data[i] || {};
                        for(var j in item){
                            item[j] = data[i][j];
                        }
                    }
                }
            }

            if(this.options.css){
                require.css("./share.css");
            }

            this.initHtml();
            this.bindUI();
        },
        setShare: function(data){
            this.shareData = this.extend(this.shareData, data || {});
            data = this.shareData;
            !data.content && (data.content = data.title);
            for(var i in data){
                if(data.hasOwnProperty(i)){
                    data[i] = window.encodeURIComponent(data[i]);
                }
            }

            // 重置分享内容
            if(this.wrap){
                var options = this.options;
                var template = options.template;
                var data = options.data;
                var list = options.list;
                var html = "";
                for(var i = 0, max = list.length, item, key; i < max; i++){
                    key = list[i];
                    item = data[key];
                    if(item){
                        item = this.extend({}, item);
                        item.href = this.buildHref(item.href);
                        item["$key"] = key;
                        html += format(options.template, item);
                    }
                }
                this.wrap.innerHTML = html;
            }
        },
        initHtml: function(){
            this.dom.innerHTML = '<div class="wap-share-background"></div>\
                <div class="wap-share-main">\
                    <div class="wap-share-cnt"></div>\
                    <a href="javascript:;" class="wap-share-cancel">取消</a>\
                </div>';
            var children = this.dom.children[1].children;
            this.wrap = children[0];
            this.btn = children[1];
        },
        buildHref: function(template){
            return format(template, this.shareData);
        },
        extend: function(a, b){
            for(var i in b){
                if(b.hasOwnProperty(i)){
                    a[i] = b[i];
                }
            }
            return a;
        },
        bindUI: function(){
            var dom = this.dom;
            addClass(dom, "wap-share-pop");
            addClass(dom, "wap-share-hide");
            this.btn.onclick = function(e){
                addClass(dom, "wap-share-hide");
                e.preventDefault();
            };
            if(dom.addEventListener){
                dom.addEventListener("touchmove", function(e){
                    e.preventDefault();
                });
                window.addEventListener("deviceorientation", function(e){
                    // 触发重绘
                    dom.style.height = Math.max(window.innerHeight, dom.clientHeight) + "px";
                    setTimeout(function(){
                        dom.style.height = "100%";
                    }, 10);
                });
            }
        },
        show: function(){
            var dom = this.dom;
            removeClass(dom, "wap-share-hide");
            setTimeout(function(){
                addClass(dom, "wap-share-active");
            }, 100);
        }
    };
    function format(str, data){
        return str && str.replace(/#{([^}]+)}/g, function(str, k){
            return data[k] || "";
        }) || "";
    };
    function removeClass($elem, cl){
		if($elem.classList){
			$elem.classList.remove(cl);
		}else{
			$elem.className = $elem.className.replace(new RegExp("\\b" + cl + "\\b", "g"), "");
		}
	}
	function addClass($elem, cl){
		if($elem.classList){
			$elem.classList.add(cl);
		}else if( !(new RegExp("\\b" + cl + "\\b", "g").test($elem.className)) ){
			$elem.className += " " + cl;
		}
	}

    function Share(){
        this.init.apply(this, arguments);
    }
    Share.prototype = ui;

    module.exports = Share;
})
