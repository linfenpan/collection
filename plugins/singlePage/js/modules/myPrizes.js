;(function(){
    var $root = $(".myPrizeDialog");

    G.on(G.Event.updateMyPrize, function(){
        Utils.get(URL.userInfo, {action: "my_red_packet"}).done(function(data){
            updateMyPrizeHtml(data.msg || []);
        });
    });

    function updateMyPrizeHtml(prizes){
        var $list = $root.find(".list");
        var html = "";
        var length = prizes.length;
        if (length > 0) {
            for (var i = 0, max = prizes.length, item; i < max; i++) {
                item = prizes[i];
                html += '<li>'+ item.gift_name +'</li>';
            }
        } else {
            html += '<li>还没有奖励呢</li>';
        }
        $list.html(html);
    };

    $(".watchPrize").click(afterLoginAndBindPhone(function(){
        G.fire(G.Event.showMyPrize);
    }));

    var dialog;
    G.on(G.Event.showMyPrize, function(){
        if (!dialog) {
            dialog = POP.dialog.create($root, { closeIfClickBack: true});
        }
        dialog.show();
    });

    checkLogin().done(function(){
        G.fire(G.Event.updateMyPrize);
    });
})();
