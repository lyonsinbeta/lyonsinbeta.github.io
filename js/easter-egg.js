function easterEgg() {
  var cgpgrey = "67718071826989";
  var input = "";
  var timer;
  window.addEventListener("keyup", function(e) {
     input += e.which;
     clearTimeout(timer);
     timer = setTimeout(function() { input = ""; }, 500);
     check_input();
  }, false);

  function check_input() {
      if (input === cgpgrey) {
        document.body.setAttribute("style", "text-align: justify;");
      }
  }
}

easterEgg();
