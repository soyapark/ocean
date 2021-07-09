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

        scrape.css("background", "#AFC0B0")
            .css("height", "100px")
            .css("overflow-y", "scroll");//.css("border", "1rem solid grey");

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
});

function contextmenuClick() {
    $right_clicked_tgt.parents(".ourLink").find('.btn').show();
}