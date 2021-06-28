function reverseColor(e) {
  if(e.target.checked) {
    $("body").css("background", "black")
      .css("color", "white");
  }
  else {
    $("body").css("background", "white")
      .css("color", "black");
  }
}