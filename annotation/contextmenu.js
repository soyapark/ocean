let $right_clicked_tgt;

$(document).ready(function () {
    

    // disable right click and show custom context menu
    $('body').on('contextmenu', cxt_menu_tgt, function (e) {
        if (e.target.tagName == "P" && $(e.target).parents(".appended-text").length == 0) {
            return;
        }
        var id = this.id;
        $("#txt_id").val(id);

        $right_clicked_tgt = $(e.target).parents(".appended-text").get() ?
            $(e.target).parents(".appended-text") 
            : $(e.target);

        var top = e.pageY + 5;
        var left = e.pageX;

        // Show contextmenu
        $(".context-menu").toggle(100).css({
            top: top + "px",
            left: left + "px"
        });

        // disable default context menu
        return false;
    });

    // Hide context menu
    $(document).bind('contextmenu click', function (e) {
        let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if(!is_safari || !e.ctrlKey) {
            $(".context-menu").hide();
            $("#txt_id").val("");
        }
        
    });

    // disable context-menu from custom menu
    $('.context-menu').bind('contextmenu', function () {
        return false;
    });

    // Clicked context-menu item
    $('.context-menu li').click(function (e) {
        $right_clicked_tgt.hide();
        $(".context-menu").hide();
        contextmenuClick(e);
    });
});