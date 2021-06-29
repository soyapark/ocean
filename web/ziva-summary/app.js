$(document).ready(function () {
    $('.summary-text').hide();

    $('.load-less').click(function(e) {
        $(e.target).parents(".collapse").collapse("hide");
        
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