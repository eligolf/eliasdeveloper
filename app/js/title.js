// Change words in the subtitle
(function () {
    var words = ["modern websites", "user experiences", "interactive designs", "digital engagement", "company branding"],
    i = 0;
    setInterval(function(){ $('#changing-title-words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 2000)
  })();