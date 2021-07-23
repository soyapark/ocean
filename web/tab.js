let cxt_menu_tgt = "#tab-list li";

$(document).ready(function () {
    $(".bib-ref-num").hide();

    $("a.bib, a.tbl, a.fig").addClass("link-available");

    $(".abstract").find("a").each(function(index, value){
        $("#bridge-preview-container small").append( $(value).clone() );
        $("#bridge-preview-container small").append( $("<br/>") );
      });
      
    /*$('.navbar').hover(function()
    {
         // Mouse Over Callback
         $("#tab-list").css("visibility", 'visible');
    
    }, function()
    { 
         // Mouse Leave callback
         $("#tab-list").css("visibility", 'hidden');
    });*/

    $('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
        // click to another tab
        // scroll down to the previous position at the tab
        if($(e.relatedTarget).length)
            scrollTab[$(e.relatedTarget).attr("href").split("-tab")[1] - 1] = $(window).scrollTop();
        $(window).scrollTop(scrollTab[$(e.target).attr("href").split("-tab")[1] - 1]);
        e.target // newly activated tab
        e.relatedTarget // previous active tab
    });

    // citation bridge
    $('a.bib, a.fig, a.tbl, a.ourLink').click(function(e) {
        e.preventDefault();

        // Get the section that is included in 
        let goback_id, target_id;
        if(e.target.nodeName == "SPAN"){
            goback_id = $(e.target.parentElement).attr("id");
            target_id = $(e.target.parentElement).attr("href");
        }
            
        else {
            goback_id = $(e.target).attr("id");
            target_id = $(e.target).attr("href");
        }
            
        // console.log($(e.target).parent('section').find('.title-info').text())

        $(".bridge-snippet").html(`<a href="#${goback_id}">${$(e.target).parents('section[id]:first').find('.title-info').text().trim()}</a>`);

        addNewTab($(target_id).position().top - 30, $(target_id).find('> header .title-info').length ?
            $(target_id).find('> header .title-info').text().trim()
            : $(target_id).parents('section[id]:first').find('> header .title-info').text().trim()
            );
    })

    $('body').on('keypress', function (event) {
        if (event.keyCode === 10 || event.keyCode === 13) {
            return false;
        } else if (event.target.tagName == "SPAN") {
            // typing tab name - do nothing; 
        }else if ([...Array(10).keys()].includes(parseInt(event.key))) {
            // switch to a different tab
            var target_tab = $(`#tab-list a:eq(${(parseInt(event.key) || 10) - 1})`);
            target_tab.tab('show');
        }

    });
  });

  var button='<button class="close" type="button" title="Remove this page">×</button>';
  var tabID = 1;
  var scrollTab = [0];
  
  $(document).ready(function() {
      $('#tab-list').on('click', '.close', function() {
          var tabID = $(this).parents('a').attr('href');
          $(this).parents('li').remove();
          $(tabID).remove();
  
          //display first tab
          var tabFirst = $('#tab-list a:first');
          tabFirst.tab('show');
      });
  
      var list = document.getElementById("tab-list");
  });

  var addNewTab = function(loc=0, tab_name="") {
    tabID++;  

    // append the new tab right after the main tab
      $('<li><a href="#paper-tab' + tabID + `" role="tab" data-toggle="tab"><span>${(tab_name.substr(0, 10) + "..") || ("Tab " + tabID)}` + '</span> <span class="glyphicon glyphicon-pencil text-muted edit"></span> <button class="close" type="button" title="Remove this page">×</button></a></li>')
        .insertAfter('#tab-list li:first');
    $('#tab-content').append($('<div class="tab-pane fade" id="paper-tab' + tabID + '"></div>'));
    $(".edit").click(editHandler);

    scrollTab.push(loc);

    var newTab = $(`#tab-list a[href="#paper-tab${tabID}"]`);
    newTab.tab('show');

  };
  
  var editHandler = function() {
    var t = $(this);
    t.css("visibility", "hidden");
    $(this).prev().attr("contenteditable", "true").focusout(function() {
      $(this).removeAttr("contenteditable").off("focusout");
      t.css("visibility", "inherit");
    });
  };
  
  $(".edit").click(editHandler);

function contextmenuClick() {
    // duplicate tab
    addNewTab(
        // get the tab's scroll location 
        scrollTab[$($right_clicked_tgt.context).parents('a').attr("href").split("-tab")[1] - 1],
        $($right_clicked_tgt.context).text() + " (copy)"
    );
}