function startAnimation(){var e=window.innerHeight,t=document.querySelector(".portfolio-card-holder"),a=document.querySelector("#portfoliocard1"),o=document.querySelector("#portfoliocard2"),r=document.querySelector("#portfoliocard3"),d=document.querySelector("#portfoliocard4"),i=t.getBoundingClientRect().top,s=a.getBoundingClientRect().top,l=o.getBoundingClientRect().top,c=r.getBoundingClientRect().top,n=d.getBoundingClientRect().top;i<e-150?t.classList.add("fadeFromLeft"):i>e&&t.classList.remove("fadeFromLeft"),s<e-150?a.classList.add("fadeFromRight-delay1"):s>e&&a.classList.remove("fadeFromRight-delay1"),l<e-150?o.classList.add("fadeFromRight-delay2"):l>e&&o.classList.remove("fadeFromRight-delay2"),c<e-150?r.classList.add("fadeFromRight-delay1"):c>e&&r.classList.remove("fadeFromRight-delay1"),n<e-150?d.classList.add("fadeFromRight-delay2"):n>e&&d.classList.remove("fadeFromRight-delay2");var g=document.querySelector(".about-card-holder");(i=g.getBoundingClientRect().top)<e-150?g.classList.add("fadeFromLeft"):i>e&&g.classList.remove("fadeFromLeft");var m=document.querySelector(".services-card-holder"),f=document.querySelector("#servicescard1"),u=document.querySelector("#servicescard2"),L=document.querySelector("#servicescard3"),y=document.querySelector("#servicescard4"),i=m.getBoundingClientRect().top,s=f.getBoundingClientRect().top,l=u.getBoundingClientRect().top,c=L.getBoundingClientRect().top,n=y.getBoundingClientRect().top;i<e-150?m.classList.add("fadeFromLeft"):i>e&&m.classList.remove("fadeFromLeft"),s<e-150?f.classList.add("fadeFromRight-delay1"):s>e&&f.classList.remove("fadeFromRight-delay1"),l<e-150?u.classList.add("fadeFromRight-delay2"):l>e&&u.classList.remove("fadeFromRight-delay2"),c<e-150?L.classList.add("fadeFromRight-delay1"):c>e&&L.classList.remove("fadeFromRight-delay1"),n<e-150?y.classList.add("fadeFromRight-delay2"):n>e&&y.classList.remove("fadeFromRight-delay2");var R=document.querySelector(".contact-card-holder");(i=R.getBoundingClientRect().top)<e-150?R.classList.add("fadeFromNothing"):i>e&&R.classList.remove("fadeFromNothing")}!function(){var e=["modern websites","user experiences","interactive designs","digital engagement","company branding"],t=0;setInterval(function(){$("#changing-title-words").fadeOut(function(){$(this).html(e[t=(t+1)%e.length]).fadeIn()})},2e3)}(),window.addEventListener("scroll",startAnimation);