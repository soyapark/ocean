function reverseColor(e) {
  if(e.target.checked) {
      $("body, .panel, .panel-default > .panel-heading").css("background", "black")
          .css("color", "white");
      
  }
  else {
      $("body, .panel, .panel-default > .panel-heading").css("background", "white")
        .css("color", "black");
  }
}