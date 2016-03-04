;(function(){

var $root = $(".eatModule");
var $prizes = $(".prizesList", $root);


// 抽奖逻辑
var Lottery = require(__uri("/lib/lottery.js"));
var lottery = new Lottery(8);
var unPrizeIndex = 4;
var wonPrizeName = null;
var classNameRegExp = /\b\s*active(\d*)\b/g;
lottery.setDrawingCallback(function(index){
    $prizes.prop("className", function(i, cls){
        return cls.replace(classNameRegExp, "") + " active" + index;
    });
});
lottery.setCancelCallback(function(){
    $prizes.prop("className", function(i, cls){
        return cls.replace(classNameRegExp, "");
    });
});
lottery.setWonCallback(function(index){
    if (index == unPrizeIndex) {
        showNoPrizeDialog();
    } else {
        G.fire(G.Event.updateMyPrize);
        showWonPrizeDialog(wonPrizeName);
    }
});

var noPrizeDialog;
function showNoPrizeDialog(){
    if (!noPrizeDialog) {
        noPrizeDialog = createPrizeDialog($(".noPrizeDialog"));
    }
    noPrizeDialog.show();
};

var wonPrizeDialog;
function showWonPrizeDialog(prizeName){
    if (!wonPrizeDialog) {
        wonPrizeDialog = createPrizeDialog($(".wonPrizeDialog"));
    }
    wonPrizeDialog.$root.find(".prizeName").html(prizeName);
    wonPrizeDialog.show();
};

function createPrizeDialog($root){
    dialog = POP.dialog.create($root, { closeIfClickBack: true });
    dialog.on("again", function(){
        G.fire(G.Event.drawPrize);
        this.hide();
    }).on("watch", function(){
        G.fire(G.Event.showMyPrize);
        this.hide();
    });
    return dialog;
};

function lotterySpeedCtrl(state){
    var speed = 200;
    switch (state) {
        case "start":
            return Math.max(500 - this.startIndex * 50, 100);
        case "decay":
            return Math.min(this.decayIndex * 50 + speed, 600);
    }
    return speed;
};

var $drawPrizeBtn = $(".itemBtn", $prizes);
$drawPrizeBtn.click(afterLoginAndBindPhone(function(){
    if (lottery.isDrawing) {
        return false;
    }

    var $el = $(this);
    if ($el.hasClass("disable") || $el.hasClass("drawing")) {
        return false;
    }
    $el.addClass("drawing");
    startLottery();

    Utils.get(URL.drawPrize).done(function(data){
        setTimeout(function(){
            wonPrizeName = data.msg || "";
            lottery.setWonIndex(+Utils.value(data, "sign", unPrizeIndex));
            lottery.stop();
            G.fire(G.Event.addChance, -1);
        }, 4000);
    }).fail(function(data){
        Utils.popAjaxError(data);
        lottery.cancel();
    }).always(function(){
        $el.removeClass("drawing");
    });
}));

function startLottery(){
    lottery.start(lotterySpeedCtrl);
    lottery.setDecayDistance(3 + Math.round(Math.random() * 3));
};

G.on(G.Event.drawPrize, function(){
    if ($drawPrizeBtn.hasClass("disable")) {
        POP.autoTip("剩余抽奖机会不足");
    } else {
        $drawPrizeBtn.click();
    }
});


// 中奖次数管理
var $total = $(".total", $root);
var $leave = $(".leave", $root);
var totalChance = 0;
var leaveChance = 0;

G.on(G.Event.addChance, function(chance){
    chance = $.type(chance) === "number" ? chance : 1;
    if (chance >= 0) {
        // 总数只会增加，不会减少
        totalChance += chance;
    }
    leaveChance += chance;
    $total.html(totalChance);
    $leave.html(leaveChance);

    if (leaveChance <= 0) {
        $drawPrizeBtn.addClass("disable");
    } else {
        $drawPrizeBtn.removeClass("disable");
    }
});

checkLogin().done(function(user){
    totalChance = +(user.full_times || 0);
    leaveChance = +(user.draw_times || 0);
    G.fire(G.Event.addChance, 0);
});

})();
