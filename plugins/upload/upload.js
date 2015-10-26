define(function(require, exports, module){
    function upload(el, options){
        this.dom = typeof el !== "string" ? el : document.querySelector(el);
        this.options = options || {};
        this.onprogress = this.onload = this.onerror = function(){};
        this.init();
    };
    upload.prototype = {
        init: function(){
            this.bindUI();
        },
        bindUI: function(){
            var position = this.dom.style.position, display = this.dom.style.display;
            this.css(this.dom, {
                overflow: "hidden",
                position: position != "" && position != "static" ? "" : "relative",
                display: display != "" && display != "inline" ? "" : "inline-block"
            });

            // 设置 input 属性
            var options = this.options;
            var input = this.input = document.createElement("input");
            input.type = "file";
            input.accept = options.accept || "*";
            var css = {
                fontSize: Math.max(this.dom.offsetHeight , this.dom.offsetHeight) * 5 + "px",
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0
            };
            this.css(input, css);
            this.dom.appendChild(input);
        },
        upload: function(opts){
            // 开始上传
            var files = this.input.files;
            if(files.length <= 0 || !this.input.value){
                return null;
            };
            var file = files[0];
            //创建FormData()对象
            var fd = new FormData();
            // 外部参数
            opts = opts || {};
            for(var i in opts){
                if(opts.hasOwnProperty(i)){
                    fd.append(i, opts[i]);
                }
            };
            //文件对象 file
            fd.append("file", file);
            //准备使用ajax上传
            var xhr = new XMLHttpRequest(), self = this;
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {// 4 = "loaded"
                    var text = xhr.responseText;
                    if (xhr.status == 200) {// 200 = OK
                        self.onload(text);
                    }else{
                        self.onerror(text);
                    }
                }
            };
            //进度条，看到 xhr 的 upload
            xhr.upload.addEventListener("progress", this.onprogress, false);
            //上传
            xhr.open("POST", this.options.url || "./upload.php");

            //发送
            xhr.send(fd);

            return xhr;
        },
        css: function(el, css){
            for(var i in css){
                if(css.hasOwnProperty(i) && css[i] !== ""){
                    el.style[i] = css[i];
                }
            }
        }
    };

    module.exports = upload;
});
