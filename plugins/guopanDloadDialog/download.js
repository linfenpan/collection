// 完全不使用 jquery 的版本..
// android 破解的，不是apk，才需要弹出提示框...
// android 后缀中，xpk 是叉叉助手下载的，没二维码
// ios 破解和非破解，都有链接的
define(function(require, exports, module){
    require.css("./style/download.css");

    var ID = 10000;
    var ui = {
        init: function(list){
            this.$body = document.body || document.getElementsByTagName("body")[0];
            // 下载列表
            // {link:, code:, type:}
            this.list = list = list || [];
            // 版本 map
            this.verMap = {};
            this.id = "widget-download-dialog-" + ID++;

            this.initVersionMap();
            this.initHtml();
            this.bindUI();
        },
        initVersionMap: function(){
            this.setVersion("android", function(item, isLast){
                var $item = this.createItem(item, isLast);
                return $item;
            });
            this.setVersion("ios", function(item, isLast){
                var $item = this.createItem(item, isLast);
                return $item;
            });
            // @明军，他说，android破解, xpk 后缀的没有二维码
            this.setVersion("android-pj", function(item, isLast){
                var self = this;
                var $item = this.createItem(item, isLast);
                if(/\.xpk$/i.test(item.link)){
                    $item.setAttribute("href", "javascript:;");
                    $item.removeAttribute("target");
                    $item.innerHTML = "";
                    $item.onclick = function(){
                        self._showAndroidPj();
                    };
                    this._initAndroidPjHtml(item.code);
                }
                return $item;
            });
            this.setVersion("ios-pj", function(item, isLast){
                var self = this;
                var $item = this.createItem(item, isLast);
                $item.setAttribute("href", "javascript:;");
                $item.removeAttribute("target");
                $item.onclick = function(){
                    self._showIosPj();
                };
                this._initIosPjHtml();
                return $item;
            });
        },
        initHtml: function(){
            var $dom = this.$dom = document.createElement("div");
            // 结构如果更变，得小心翼翼的
            $dom.innerHTML = '<div class="dialog-background"></div>\
                <div class="dialog-container">\
                    <div class="dialog-header">\
                        <a href="javascript:;" class="dialog-close"></a>\
                        <span class="dialog-title"></span>\
                        <span class="dialog-return"></span>\
                    </div>\
                    <div class="dialog-list"></div>\
                    <div class="web-dialog-pj-detail web-dialog-android-pj"></div>\
                    <div class="web-dialog-pj-detail web-dialog-ios-pj"></div>\
                </div>';
            $dom.setAttribute("id", this.id);
            $dom.className = "web-download-dialog web-download-dialog-hide";

            this.$body.appendChild($dom);

            var $div = $dom.getElementsByTagName("div");
            this.$container = $div[1];
            this.$wrap = $div[3];
            this.$android = $div[4];
            this.$ios = $div[5];

            var $span = $dom.getElementsByTagName("span");
            this.$text = $span[0];
            this.$ret = $span[1];

            this.$close = $dom.getElementsByTagName("a")[0];
        },
        // 两个破解版面的 html 内容
        _initAndroidPjHtml: function(image){
            this.$android.innerHTML = '<p class="cp-info">你正在下载果盘破解游戏特有的XPK文件需要你先安装叉叉助手，安装过叉叉助手的用户直接跳到第二步</p>\
                                        <div class="cp-content">\
                                            <div class="cp-xx">\
                                                <h4 class="cp-tt">1.扫描下载安装<a href="http://www.xxzhushou.cn/" target="_blank">叉叉助手</a></h4>\
                                                <img class="cp-qrcode" src="'+ require.url("/images/codeAndroid.png") +'">\
                                            </div>\
                                            <div class="cp-xx cp-xx-last">\
                                                <h4 class="cp-tt">2.打开叉叉助手扫描游戏二维码</h4>\
                                                <img class="cp-qrcode" id="andCrackCode" src="'+ image +'">\
                                            </div>\
                                        </div>';
        },
        _initIosPjHtml: function(){
            this.$ios.innerHTML = '<p class="cp-info">你正在下载果盘破解游戏特有的iOS(越狱)文件需要你先安装叉叉助手，安装过叉叉助手的用户直接跳到第二步</p>\
                                        <div class="cp-content">\
                                            <div class="cp-xx">\
                                                <h4 class="cp-tt">1.扫描下载安装<a href="http://www.xxzhushou.cn/ios.html" target="_blank">叉叉助手</a></h4>\
                                                <p class="cp-warn">注：iOS越狱才能安装</p>\
                                                <img class="cp-qrcode" src="'+ require.url("./images/codeIos.png") +'">\
                                            </div>\
                                            <div class="cp-xx">\
                                                <h4 class="cp-tt">2.打开叉叉助手搜索游戏名字就可以安装了</h4>\
                                                <img class="cp-image" height="172" src="'+ require.url("./images/ioscrack1.png") +'">\
                                            </div>\
                                            <div class="cp-xx cp-xx-last">\
                                                <h4 class="cp-tt">3.安装完以后进入叉叉助手游戏详情页点击破解就可以进入游戏了</h4>\
                                                <img class="cp-image" height="159" src="'+ require.url("./images/ioscrack2.png") +'">\
                                            </div>\
                                        </div>';
            this._initIosPjHtml = function(){};
        },
        bindUI: function(){
            var self = this;
            this.$close.onclick = function(){
                self.hide();
            };
            this.$ret.onclick = function(){
                self._showMain();
            };
            var fn = function(){
                self._resetMargin();
            }
            if(window.addEventListener){
                window.addEventListener("resize", fn, false);
            }else{
                window.attachEvent("onresize", fn);
            }
        },
        // 显示 android 和 ios 的破解
        _showMain: function(){
            this.$android.style.display = "none";
            this.$ios.style.display = "none";
            this.$ret.style.display = "none";
            this.$wrap.style.display = "block";
            this._resetMargin();
        },
        _showAndroidPj: function(){
            this.$android.style.display = "block";
            this.$ret.style.display = "block";
            this.$wrap.style.display = "none";
            this._resetMargin();
        },
        _showIosPj: function(){
            this.$ios.style.display = "block";
            this.$ret.style.display = "block";
            this.$wrap.style.display = "none";
            this._resetMargin();
        },
        set: function(options){
            var self = this;
            var list = options;
            if(Object.prototype.toString.call(list) !== "[object Array]"){
                list = [options];
            }

            // 删除原本元素
            var children = this.$wrap.children;
            for(var i = 0, max = children.length; i < max; i++){
                children[i].onclick = null;
                this.$wrap.removeChild(children[i]);
            }

            // 重新生成
            var versionMap = this.verMap;
            for(var i = 0, max = list.length; i < max; i++){
                var item = list[i];
                if(item){
                    var type = item.type;
                    var $item = versionMap[type];
                    if($item){
                        $item = $item.call(this, item, i == max - 1);
                        this.$wrap.appendChild($item);
                    }
                }
                // END if
            };
        },
        // 设置新的版本
        setVersion: function(k, fn, initFn){
            initFn && initFn.call(this);
            this.verMap[k] = fn;
        },
        createItem: function(item, isLast){
            var $link = document.createElement("a");
            $link.className = "dialog-item item-" + item.type + (isLast ? ' dialog-item-last' : '');
            $link.setAttribute("href", item.link);
            $link.setAttribute("target", "_blank");
            $link.innerHTML = '<div class="dialog-code">\
                        <span class="dialog-triangle"></span>\
                        <img class="dialog-img" src="'+ item.code +'" alt="二维码">\
                        手机扫描\
                    </div>';
            return $link;
        },
        title: function(tl){
            if(tl){
                this.$text.innerHTML = tl;
            }else{
                return this.$text.innerHTML;
            }
        },
        // 重设margin距离
        _resetMargin: function(){
            var top = this.$container.clientHeight / 2;
            top = window.innerHeight ? Math.min(window.innerHeight / 2, top) : top;
            this.$container.style.marginTop = -top + "px";
        },
        show: function(){
            var $dom = this.$dom, self = this;
            removeClass($dom, "web-download-dialog-hide");
            self._showMain();
            setTimeout(function(){
                addClass($dom, "web-download-dialog-active");
            }, 100);
        },
        hide: function(){
            var $dom = this.$dom;
            removeClass($dom, "web-download-dialog-active");
            setTimeout(function(){
                addClass($dom, "web-download-dialog-hide");
            }, 100);
        }
    };

    // 好纠结啊，不引入 jquery 之后，多了好多代码..
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

    function Dialog(){
        this.init.apply(this, arguments);
    }
    Dialog.prototype = ui;

    module.exports = Dialog;
});
