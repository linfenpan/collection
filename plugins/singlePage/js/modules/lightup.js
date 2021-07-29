;(function(){

    var $root = $(".lightModule");
    var $lightupBtn = $(".lightup", $root);

    checkLogin().done(function(userInfo){
        var hadSignIn = Utils.value(userInfo, "is_sign", 1) == 1;   // 1 已经签到，0未签到
        if (hadSignIn) {
            setTimeout(function(){
                lightUp();
            }, 1500);
        } else {
            bindEvent();
        }
    }).fail(function(){
        bindEvent();
    });

    function bindEvent(){
        $lightupBtn.click(afterLoginAndBindPhone(function(e){
            if ($lightupBtn.hasClass("disable") || $lightupBtn.hasClass("submiting")) {
                return false;
            }

            $lightupBtn.addClass("submiting");
            Utils.get(URL.signIn).done(function(){
                scrollToLightupBottom(function(){
                    lightUp();
                    setTimeout(function(){
                        POP.autoTip("汤圆+1");
                        G.fire(G.Event.addChance, 1);
                    }, 1000);
                    $lightupBtn.removeClass("submiting");
                });
            }).fail(function(data){
                Utils.popAjaxError(data);
                $lightupBtn.removeClass("submiting");
            });
        }));
    };

    function scrollToLightupBottom(callback){
        var top = $lightupBtn.offset().top + $lightupBtn.outerHeight();
        // 有两个选择器，callback 会执行两次诶..
        $("body,html").animate({scrollTop: top - window.innerHeight}, 120, function(){
            callback && callback();
            callback = null;
        });
    };

    var $banner = $(".aBanner");
    function lightUp(){
        $lightupBtn.addClass("disable");
        $banner.addClass("active");
    };

})();
