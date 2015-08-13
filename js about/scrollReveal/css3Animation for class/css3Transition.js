;~function(window, NAME){

// 构建 transition 动画
    var DOM_ELEM = document.documentElement, ID = +new Date;

/////////////////////////// 样式构建部分
    // 生成 pre, enter, leave 三中样式
    function createStyleClass(obj){
        var style = "", id = "scroll_reveal_" + ID++;
        // obj: {pre, enter, leave, pre_wait, pre_over, pre_tf, leave_wait, leave_over, leave_tf}
        var elemStyle = "-webkit-transform-style:preserve-3d; transform-style:preserve-3d;";
        var preStyle = getClassContext(obj, id, "pre", true);
        var leaveStyle = getClassContext(obj, id, "leave", true);
        var enterStyle = getClassContext(obj, id, "enter");

        // 离开时间
        var leaveTime = obj["leave"] ? parseFloat(obj["leave_wait"]) + parseFloat(obj["leave_over"]) : 0;
        // 数序不要乱了哈~
        style = [preStyle, enterStyle, leaveStyle].join("\n") + "\n\n\n";
        return {
            style: style,
            elStyle: elemStyle,
            time: leaveTime,
            id: id
        };
    }
    // 获取 class 内容
    function getClassContext(obj, id, name, needTransition){
        var str = obj[name] ? [
            "." + getClass(id, name) + "{",
                needTransition ? getCssTransition(obj[name + "_over"], obj[name + "_tf"], obj[name + "_wait"]) : "",
                getCssTransform( obj[name] ),
                "opacity:" + obj[name + "_opacity"] + ";",
            "}"
        ].join(" ") : "";
        return str;
    }
    // 进入、离开、预设，3个类
    function getClass(key, suffix){
        return key + "_" + suffix;
    }
    // 动画执行函数
    function getCssTransition(time, timeFn, delay){
        return "-webkit-transition:transform $0, opacity: $0;-ms-transition:transform $0, opacity $0;transition:transform $0, opacity $0;".replace(/\$0/g, time + " " + timeFn + " " + delay);
    }
    // 变换函数
    function getCssTransform(transition){
        return "-webkit-transform:$0;-ms-transform:$0;transform:$0;".replace(/\$0/g, transition);
    }
/////////////////////////// 样式构建部分

/////////////////////////// 词法分析 部分
    // 词法 替换字符串
    function lexicalAnalysisReplace(str, arr){
        return str.replace(/\$(\d+)/g, function(str, num){
            return arr[num];
        });
    };
    // 词法表
    var lexicalAnalysisMap = {
        x: "translateX($1)",
        y: "translateY($1)",
        z: "translateZ($1)",
        rx: "rotateX($1)",
        ry: "rotateY($1)",
        rz: "rotateZ($1)",
        r: "rotate($1)",
        sx: "scaleX($1)",
        sy: "scaleY($1)",
        sz: "scaleZ($1)",
        s: "scale($1)"
    };
    // 词法分析
    // "enter x|10% y|20% rx|10deg ry|10deg rz|10deg s|1.2, over 2s, wait .6s, tf ease, leave x|20%, wait .2s, over .5s"
    function lexicalAnalysis(str){
        var words = str.split(/[ ,]+/),
            obj = {enter: "", pre: "", leave: ""},  // 进入、预设，离开 3 部分的样式
            curKey = "pre";

        var map = lexicalAnalysisMap, key = "";
        for(var i = 0, max = words.length; i < max; i++){
            key = words[i];
            if(key){
                switch(key){
                    case "enter":
                        // 进入，其实在预处理样式里
                        curKey = "pre";
                        break;
                    case "opacity": // 透明度
                    case "wait":    // 延迟时间
                    case "over":    // 持续时间
                    case "tf":  // 动画时间函数
                        obj[curKey + "_" + key] = words[++i];
                        break;
                    case "dopacity": // 进入屏幕后的默认透明度
                        obj["dopacity"] = words[++i];
                        break;
                    case "leave":
                        curKey = "leave";
                        break;
                    default:
                        var arr = key.split("|"), key = map[arr[0]];
                        if(key){
                            obj[curKey] += " " + lexicalAnalysisReplace(key, arr);
                            if( curKey == "pre" ){
                                // 进入时，应该把所有预处理的样式清空，所以，进入的样式，都是初始值
                                obj["enter"] += " " + lexicalAnalysisReplace(key, [0, /^s[xyz]?/.test(key) ? 1 : 0]);
                            }
                        };
                }
            }
        }
        // 如果 leave 不存在，则使用 pre 的所有
        var list = ["_opacity", "_wait", "_over", "_tf"];
        for(var i = 0, max = list.length; i < max; i++){
            var item = list[i];
            if( !obj["leave" + item] ){
                obj["leave" + item] = obj["pre" + item];
            }
        }
        // 生成的 object是:
        // {enter: "", pre: "", pre_opacity: "", pre_wait: "", pre_over: "", pre-tf: "", leave: "", leave_opacity: "", leave_wait: "", leave_over: "", leave_tf: ""}
        return obj;
    };
/////////////////////////// 词法分析 部分

/////////////////////////// 工具部分
function addClass(elem, cl){
    if(elem.classList){
        elem.classList.add(cl);
    }else{
        elem.className += " " + cl;
    }
}
// 移除 css class
function removeClass(elem, cl){
    if(elem.classList){
        elem.classList.remove(cl);
    }else{
        elem.className = elem.className.replace(new RegExp("\\b" + cl + "\\b"), "");
    }
}
function hasClass(elem, cl){
    if(elem.classList){
        return elem.classList.contains(cl);
    }else{
        return (new RegExp("\\b" + cl + "\\b")).test(elem.className);
    }
};
// 元素添加 _enter 类
function enter(elem, cl){
    addClass(elem, cl);
};
// 元素添加 _leave 类
function leave(elem, leave, enter, delay){
    if( !hasClass(elem, leave) ){
        addClass(elem, leave);
        setTimeout(function(){
            removeClass(elem, leave);
            removeClass(elem, enter);
        }, delay);
    }
};

/////////////////////////// 工具部分


    /**
     * @param cf {Object} 配置文件
     *  dom: 根元素，默认 document.documentElement
     *  key: 需要遍历的dom，保存数据的属性，默认 data-ctr
     *  default: 默认动画配置，默认: enter x|10% opacity 0 over .5s wait 0s tf ease
     */
    function buildTransition(cf){
        this.reset(cf);
    };
    buildTransition.prototype = {
        // 重设配置
        reset: function(cf){
            if( typeof cf === "object" ){
                this.dom = cf.dom || DOM_ELEM;

                this.key = cf.key || "data-ctr";
                this.keyId = this.key + "-id";      // 动画class的名字
                this.keyTime = this.key + "-time";  // 动画延迟

                // 默认动画配置
                this.def_config = lexicalAnalysis(cf["default"] || "enter x|10% opacity 0 over .5s wait 0s tf ease");
            }
            // 元素列表
            this.domList = this.dom.querySelectorAll("[" + this.key + "]");

            // 开始对所有元素，进行词法分析
            this.analysisiDomList();
        },
        // 返回 dom 列表
        getDomList: function(){
            return this.domList;
        },
        // 对元素进行词法分析
        analysisiDomList: function(){
            var domList = this.domList, keyId = this.keyId, keyTime = this.keyTime, key = this.key;

            var elem, obj, item;
            var style = "", inline;
            for(var i = 0, max = domList.length; i < max; i++){
                elem = domList[i];
                // 防止重复初始化
                if( !elem.getAttribute(keyId) ){
                    // 词法分析
                    obj = lexicalAnalysis( elem.getAttribute(key) );
                    // 与默认值合并
                    this.combineWithDefault(obj);
                    // 生成样式
                    item = createStyleClass(obj);
                    // 记录下样式ID
                    elem.setAttribute(keyId, item.id);
                    elem.setAttribute(keyTime, item.time);
                    // 设置inline样式
                    inline = elem.getAttribute("style") || "";
                    elem.setAttribute("style", inline ? ";" + item.elStyle : item.elStyle);
                    // 添加默认样式
                    addClass(elem, getClass(item.id, "pre"));

                    style += item.style;
                }
            }
            // 样式插入 dom 中
            if(style){
                var css = document.createElement("style");
                css.innerHTML = style;
                document.getElementsByTagName("head")[0].appendChild(css);
            }
        },
        // 当前配置对象，与 def_config 对象，进行合并
        combineWithDefault: function(obj){
            var map = this.def_config;
            for(var i in map){
                obj[i] = obj[i] || map[i];
            }
            // 缺少 enter_opacity
            obj["enter_opacity"] = typeof obj["dopacity"] != "undefined" ? obj["dopacity"] : 1;
        },
        // 某个孩子，执行动画
        enter: function(list){
            this._aEach(list, function(elem, id){
                enter(elem, getClass(id, "enter"));
            });
        },
        // 某个孩子，执行动画
        leave: function(list){
            var keyTime = this.keyTime;
            this._aEach(list, function(elem, id){
                leave(elem, getClass(id, "leave"), getClass(id, "enter"), parseFloat(elem.getAttribute(keyTime)) * 1000 );
            });
        },
        // 这个乱调用，会出错哦~
        _aEach: function(list, cb){
            if(typeof list === "undefined"){
                list = this.domList;
            }else if( !("length" in list) ){
                list = [list];
            }
            for(var i = 0, max = list.length, elem, id; i < max; i++){
                elem = list[i], id = elem.getAttribute(this.keyId);
                if( id ){
                    cb(elem, id);
                }
            }
        }
    };

    window[NAME] = buildTransition;

}(window, window.CSS3_TRANSITION_NAME || "Css3Transition");
