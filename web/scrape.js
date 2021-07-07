let $right_clicked_tgt;
$(document).ready(function () {
    /*$('.navbar').hover(function()
    {
      // alert();
         // Mouse Over Callback
         $("#bridge-container").css("visibility", 'visible');
    
    }, function()
    { 
         // Mouse Leave callback
         $("#bridge-container").css("visibility", 'hidden');
    });*/

    // scrape components
    $('.ourLink').click(function (e) {
        if ($(e.target).parents(".appended-text").length) {
            if ( ["A", "P"].includes(e.target.tagName) ) // if hyperlink, do default action
                return;
            else  {
                // nested learn more btn
            }
        }
        else {
            e.preventDefault();
        }

        let current_st = $(window).scrollTop();

        $(e.target).hide();

        let scrape = $($(e.target.parentElement).attr("href")).clone();
        if (scrape[0].tagName == "SPAN")
            scrape = $("<p></p>").append(scrape);

        scrape.css("border", "1rem solid grey");

        // if already appended
        if ($(e.target.parentElement).find("> .appended-text").text()) {
            $(e.target.parentElement).find("> .appended-text").show();
        }
        else {
            $($(e.target.parentElement).attr("href")).replaceWith("<p>(skipped)</p>");
            $(e.target.parentElement).find("> .appended-text").append(
                scrape
            ).show();
        }
            

        

        if ($(e.target.parentElement).attr("href") == "#rule-model") {
            $(window).scrollTop(
                current_st - $("#rule-model").height() + 50
            );
           
        }
            
        



        // if( $(`#${s}-${$(e.target).attr("href").substring(1)}`).length == 0 )   
        //   $( `<a role="button" id="${s}-${$(e.target).attr("href").substring(1)}" href="#${s}">${BRIDGE_ICON}</a>` ).insertAfter( $(e.target).attr("href") );
    })

    // disable right click and show custom context menu
    $("p").bind('contextmenu', function (e) {
        if ($(e.target).parents(".appended-text").length == 0) {
            return;
        }
        var id = this.id;
        $("#txt_id").val(id);

        $right_clicked_tgt = $(e.target).parents(".appended-text");

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
    $(document).bind('contextmenu click', function () {
        $(".context-menu").hide();
        $("#txt_id").val("");
    });

    // disable context-menu from custom menu
    $('.context-menu').bind('contextmenu', function () {
        return false;
    });

    // Clicked context-menu item
    $('.context-menu li').click(function () {
        debugger;
        var className = $(this).find("span:nth-child(1)").attr("class");
        var titleid = $('#txt_id').val();
        $("#" + titleid).css("background-color", className);
        $right_clicked_tgt.hide();
        $right_clicked_tgt.parents(".ourLink").find('.btn').show();
        $(".context-menu").hide();
    });
}); 