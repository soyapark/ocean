$(document).ready(function () {
    $('.summary-text').hide();

    $('.load-less').click(function(e) {
        $(e.target).parents(".collapse").collapse("hide");
    });

    $('.navbar').hover(function()
    {
      // alert();
         // Mouse Over Callback
         $("#bridge-container").css("visibility", 'visible');
    
    }, function()
    { 
         // Mouse Leave callback
         $("#bridge-container").css("visibility", 'hidden');
    });
  
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