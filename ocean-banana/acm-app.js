
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

let session_id = getUrlParameter("user");

$(function () {
    if(session_id == "[Your") {
        alert("Wrong user name. Please try the link with your name.");
        $("body").hide();
        return;
    } else if(!session_id) {
        alert("Wrong URL. Please contact Soya for a correct link.");
        $("body").hide();
        return;
    }

    // ctrl-f detection
    var keydown = null;
    $(window).keydown(function(e) {
        if ( ( e.keyCode == 70 && ( e.ctrlKey || e.metaKey ) ) ||
             ( e.keyCode == 191 ) ) {
            keydown = new Date().getTime();
        }
        
        return true;
    }).blur(function() {
        if ( keydown !== null ) {
            var delta = new Date().getTime() - keydown;
            if ( delta > 0 && delta < 1000 )
                document.dispatchEvent(new CustomEvent('ctrlF', { detail: {
                    "ctrlF": "text-search"
                }}));
            
            keydown = null;
        }
    });
  });