$(window).on("keyup", function(e){
    console.log(e.keyCode);
    Event.fire(Event.W_KEY_DOWN, e.keyCode, e);
});

var KEY_CODE = {
    DELETE: 46  // 删除
    ,S: 83
    ,EQ: 187    // =
    ,ST : 189     // -
    ,ZERO: 48   // 0
};
