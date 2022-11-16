// Change words in the subtitle
(function () {
    var words = ["modern websites", "user experiences", "interactive designs", "digital engagement", "company branding"],
    i = 0;
    setInterval(function(){ $('#changing-title-words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 2000)
  })();
  
/* Check if we reached the part where we should start animation */
window.addEventListener('scroll', startAnimation);
function startAnimation() {

    /* General */
    var windowHeight = window.innerHeight;

    /* Portfolio */
    var portfoliocardHolder = document.querySelector(".portfolio-card-holder");
    var portfoliocard1 = document.querySelector("#portfoliocard1");
    var portfoliocard2 = document.querySelector("#portfoliocard2");
    var portfoliocard3 = document.querySelector("#portfoliocard3");
    var portfoliocard4 = document.querySelector("#portfoliocard4");
    var animationTop = portfoliocardHolder.getBoundingClientRect().top;
    var animationTop1 = portfoliocard1.getBoundingClientRect().top;
    var animationTop2 = portfoliocard2.getBoundingClientRect().top;
    var animationTop3 = portfoliocard3.getBoundingClientRect().top;
    var animationTop4 = portfoliocard4.getBoundingClientRect().top;

    if (animationTop < windowHeight - 150) { portfoliocardHolder.classList.add('fadeFromLeft'); }
    else if (animationTop > windowHeight) { portfoliocardHolder.classList.remove('fadeFromLeft'); }
    if (animationTop1 < windowHeight - 150) { portfoliocard1.classList.add('fadeFromRight-delay1'); }
    else if (animationTop1 > windowHeight) { portfoliocard1.classList.remove('fadeFromRight-delay1'); }
    if (animationTop2 < windowHeight - 150) { portfoliocard2.classList.add('fadeFromRight-delay2'); }
    else if (animationTop2 > windowHeight) { portfoliocard2.classList.remove('fadeFromRight-delay2'); }
    if (animationTop3 < windowHeight - 150) { portfoliocard3.classList.add('fadeFromRight-delay1'); }
    else if (animationTop3 > windowHeight) { portfoliocard3.classList.remove('fadeFromRight-delay1'); }
    if (animationTop4 < windowHeight - 150) { portfoliocard4.classList.add('fadeFromRight-delay2'); }
    else if (animationTop4 > windowHeight) { portfoliocard4.classList.remove('fadeFromRight-delay2'); }

    /* About */
    var aboutcardHolder = document.querySelector(".about-card-holder");
    animationTop = aboutcardHolder.getBoundingClientRect().top;

    if (animationTop < windowHeight - 150) { aboutcardHolder.classList.add('fadeFromLeft'); }
    else if (animationTop > windowHeight) { aboutcardHolder.classList.remove('fadeFromLeft'); }

    /* Services */
    var servicescardHolder = document.querySelector(".services-card-holder");
    var servicescard1 = document.querySelector("#servicescard1");
    var servicescard2 = document.querySelector("#servicescard2");
    var servicescard3 = document.querySelector("#servicescard3");
    var servicescard4 = document.querySelector("#servicescard4");
    var animationTop = servicescardHolder.getBoundingClientRect().top;
    var animationTop1 = servicescard1.getBoundingClientRect().top;
    var animationTop2 = servicescard2.getBoundingClientRect().top;
    var animationTop3 = servicescard3.getBoundingClientRect().top;
    var animationTop4 = servicescard4.getBoundingClientRect().top;

    if (animationTop < windowHeight - 150) { servicescardHolder.classList.add('fadeFromLeft'); }
    else if (animationTop > windowHeight) { servicescardHolder.classList.remove('fadeFromLeft'); }
    if (animationTop1 < windowHeight - 150) { servicescard1.classList.add('fadeFromRight-delay1'); }
    else if (animationTop1 > windowHeight) { servicescard1.classList.remove('fadeFromRight-delay1'); }
    if (animationTop2 < windowHeight - 150) { servicescard2.classList.add('fadeFromRight-delay2'); }
    else if (animationTop2 > windowHeight) { servicescard2.classList.remove('fadeFromRight-delay2'); }
    if (animationTop3 < windowHeight - 150) { servicescard3.classList.add('fadeFromRight-delay1'); }
    else if (animationTop3 > windowHeight) { servicescard3.classList.remove('fadeFromRight-delay1'); }
    if (animationTop4 < windowHeight - 150) { servicescard4.classList.add('fadeFromRight-delay2'); }
    else if (animationTop4 > windowHeight) { servicescard4.classList.remove('fadeFromRight-delay2'); }

    /* Contact */
    var contactcardHolder = document.querySelector(".contact-card-holder");
    animationTop = contactcardHolder.getBoundingClientRect().top;

    if (animationTop < windowHeight - 150) { contactcardHolder.classList.add('fadeFromNothing'); }
    else if (animationTop > windowHeight) { contactcardHolder.classList.remove('fadeFromNothing'); }
}