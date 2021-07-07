$(document).ready(function () {
    $('.system-text, .summary-text, .experiment-text').hide();

    $('.load-less').click(function(e) {
        $(e.target).parents(".collapse").collapse("hide");
    });

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

    $("#collapse-mode").change(function () {
        $(".collapse-text").hide();
        $(`.${this.value}-text`).show();
    });

    $('.ourLink').click(function (e) {
        if ($(e.target).parents(".appended-text").length) {
            if (e.currentTarget.tagName == "A") // if hyperlink, do default action
                return;
            else {
                // nested learn more btn
            }
        }
        else {
            e.preventDefault();
        }

        if ($(e.target).text() == "Load more") {
            $(e.target).text("Load less");
            $(e.currentTarget).find(".appended-text").show();
        }
        else if ($(e.target).text() == "Load less") {
            $(e.target).text("Load more");
            $(e.currentTarget).find(".appended-text").hide();
        }
        



        





        // if( $(`#${s}-${$(e.target).attr("href").substring(1)}`).length == 0 )   
        //   $( `<a role="button" id="${s}-${$(e.target).attr("href").substring(1)}" href="#${s}">${BRIDGE_ICON}</a>` ).insertAfter( $(e.target).attr("href") );
    })
  
});

function switchSummary(e) {
    console.log(e);

    if (e.target.checked) {
        $('.summary-text').show();
        $('.full-text').hide();
    } else {
        $('.summary-text').hide();
        $('.full-text').show();
    }
}

function loadLess() {

}

function contextmenuClick() {
    // load less
    $right_clicked_tgt.parents(".ourLink").find('.btn').text("Load more");
    $right_clicked_tgt.parents(".ourLink").find(".appended-text").hide();

}