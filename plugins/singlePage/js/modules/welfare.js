;(function(){
    var $root = $(".welfareModule");
    var $more = $(".moreBtn", $root);

    Utils.get(URL.welfare).done(function(data){
        var list = Utils.value(data, "msg", []);
        if (list.length <= 4) {
            $more.remove();
        }
        initWelfareList(list);
    });

    function initWelfareList(list){
        var template1 = '<li><img src="{{icon}}" class="ico"><span class="title">{{game_name}}</span><a data-id="{{id}}" data-pkg="{{pkg}}" data-href="{{url}}" href="javascript:;" class="download">下载</a></li>';
        var $list1 = $(".welfareList1", $root);

        var template2 = template1.replace('src=', 'data-src=');
        var $list2 = $(".welfareList2", $root);

        fillListHtml($list1, template1, list.splice(0, 4));
        fillListHtml($list2, template2, list.splice(0, 8));
    };

    function fillListHtml($list, template, list){
        var html = "";
        for (var i = 0, max = list.length, item; i < max; i++) {
            item = list[i];
            html += Utils.format(template, item);
        }
        $list.html(html);
    };

    $more.one("click", function(){
        var $welfareList = $(".welfareList2", $root);
        var maxHeight = Math.max($welfareList.prop("scrollHeight"), $welfareList.prop("clientHeight"));
        $welfareList.css("max-height", maxHeight);

        $welfareList.find(".ico").each(function(i, v){
            var $img = $(v);
            $img.attr("src", $img.data("src"));
        });
        setTimeout(function(){
            $more.closest(".welfareMore").remove();
        }, 500);
    });

    $root.on("click", ".download", afterLoginAndBindPhone(function(e){
        var $elem = $(this);
        if (isGPShopApp) {
            var gid = $elem.data("id");
            var pkg = $elem.data("pkg");
            Utils.downloadPkg(pkg, function(data){
                data = data || {};
                var downTaskAddSuccessTxt = "正在下载，请在下载管理查看";
                var downTaskAddFailTxt = "下载失败，请稍后重试";
                switch (data.result) {
                    case 1:
                        Utils.get(URL.welfareDownload, {gid: gid}).done(function(data){
                            G.fire(G.Event.addChance, 1);
                            POP.autoTip("汤圆+1<br/>" + downTaskAddSuccessTxt);
                        }).fail(function(data){
                            if (data.status == 1002) {
                                Utils.jumpToLogin();
                            } if (data.msg === "活动尚未开始") {
                                POP.autoTip("活动尚未开始！<br/>" + downTaskAddSuccessTxt);
                            } else {
                                POP.autoTip(downTaskAddSuccessTxt);
                            }
                        });
                        break;
                    case 2:
                        POP.autoTip(downTaskAddSuccessTxt);
                        break;
                    default:
                        POP.autoTip(downTaskAddFailTxt);
                };
            });
        } else {
            window.location.href = $elem.data("href");
        }
    }));

})();
