;(function(){
    var $root = $(".winners")
    var $content = $(".wcontent .wrapper", $root);

    Utils.get(URL.winners).done(function(data){
        var winners = Utils.value(data, "msg", []);
        initWinnersHtml(winners);
    });

    function initWinnersHtml(list){
        var length = list.length;
        var html = "";
        for (var i = 0, max = length, item; i < max; i++) {
            item = list[i];
            html += '<span class="item">'+ item.uname +'获得<span class="prize">'+ item.gift_name +'</span></span>';
        }
        $content.html(html);

        if (length > 1) {
            initWinnerScroll();
        }
    };

    function initWinnerScroll(){
        var Announcement = require(__uri("/lib/announcement.js"));
        var announcement = new Announcement($content);
        announcement.startAnimate();
    };

})();
