function reverseColor(e) {
    let t = $("body, .panel, .panel-default > .panel-heading, .appended-text");
    if(e.target.checked) {
        t.css("background", "black")
          .css("color", "white");
      
    }
    else {
        t.css("background", "white")
            .css("color", "black");
    }
}

$(document).ready(function () {
    $(".bib-ref-num").hide();
});