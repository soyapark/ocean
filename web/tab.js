$(document).ready(function () {
    $(".bib-ref-num").hide();
    $('.navbar').hover(function()
    {
      // alert();
         // Mouse Over Callback
         $("#tab-list").css("visibility", 'visible');
    
    }, function()
    { 
         // Mouse Leave callback
         $("#tab-list").css("visibility", 'hidden');
    });

    $('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
        // click to another tab
        // scroll down to the previous position at the tab
        debugger;
        scrollTab[$(e.relatedTarget).attr("href").split("-tab")[1] - 1] = $(window).scrollTop();
        $(window).scrollTop(scrollTab[$(e.target).attr("href").split("-tab")[1] - 1]);
        e.target // newly activated tab
        e.relatedTarget // previous active tab
    });
  });

  var button='<button class="close" type="button" title="Remove this page">×</button>';
  var tabID = 1;
  var scrollTab = [0];
  function resetTab(){
      var tabs=$("#tab-list li:not(:first)");
      var len=1
      $(tabs).each(function(k,v){
          len++;
          $(this).find('a').html('Tab ' + len + button);
      })
      tabID--;
  }
  
  $(document).ready(function() {
      $('#btn-add-tab').click(function() {
          addNewTab();
      });
      
      $('#tab-list').on('click', '.close', function() {
          var tabID = $(this).parents('a').attr('href');
          $(this).parents('li').remove();
          $(tabID).remove();
  
          //display first tab
          var tabFirst = $('#tab-list a:first');
          resetTab();
          tabFirst.tab('show');
      });
  
      var list = document.getElementById("tab-list");
  });

  var addNewTab = function() {
    tabID++;
    $('#tab-list').append($('<li><a href="#paper-tab' + tabID + '" role="tab" data-toggle="tab"><span>Tab ' + tabID + '</span> <span class="glyphicon glyphicon-pencil text-muted edit"></span> <button class="close" type="button" title="Remove this page">×</button></a></li>'));
    $('#tab-content').append($('<div class="tab-pane fade" id="paper-tab' + tabID + '"></div>'));
    $(".edit").click(editHandler);

    scrollTab.push(0);
  };
  
  var editHandler = function() {
    var t = $(this);
    t.css("visibility", "hidden");
    $(this).prev().attr("contenteditable", "true").focusout(function() {
      $(this).removeAttr("contenteditable").off("focusout");
      t.css("visibility", "visible");
    });
  };
  
  $(".edit").click(editHandler);