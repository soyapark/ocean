$(document).ready(function () {
    $('.summary-text').hide();
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