;(function(){
    var $banner = $(".aBanner");
    var $rules = $(".rules", $banner);

    var dialog;
    $rules.click(function(){
        if (!dialog) {
            dialog = POP.dialog.create($(".rulesDialog"), { closeIfClickBack: true });
        }
        dialog.show();
    });
})();
