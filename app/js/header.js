// Window functions
window.onscroll = function (e){
	checkHeaderState();
};

window.onload = function (e){
	checkHeaderState();
};

// Add header HTML to divs with id="my-header"
document.querySelector('#my-header').innerHTML = `
<header>
	<div class="header-bar">
		<a class="header-logo" href="/">
			<img src="assets/images/only-logo-light-blue.png" alt="Elias Nilsson">
		</a>
		<div class="desktop-navigation" id="desktop-navigation">		
			<a class="desktop-navlist-item" href="/#portfolio" aria-label="See portfolio">Portfolio</a>
			<a class="desktop-navlist-item" href="/#about" aria-label="See about me">About me</a>				
			<a class="desktop-navlist-item" href="/#services" aria-label="See services">Services</a>			
			<a class="primary-button ls-25" href="/#contact" aria-label="Contact me">Contact</a>		
		</div>	
		<div class="nav-burger-toggle">
			<span class="nav-burger-top"></span>
			<span class="nav-burger-middle"></span>
			<span class="nav-burger-bottom"></span>
			<span class="visually-hidden">Meny</span>
		</div>
	</div>
	<div class="mobile-navigation" id="mobile-navigation">
		<div class="mobile-nav-middle">
			<ul class="mobile-nav-list ls-10">				
				<li><a class="mobile-navlist-item" href="/#portfolio" aria-label="See portfolio">Portfolio</a></li>	
				<li><a class="mobile-navlist-item" href="/#about" aria-label="See about me">About me</a></li>				
				<li><a class="mobile-navlist-item" href="/#services" aria-label="See services">Services</a></li>		
			</ul>	
			<div class="mobile-nav-contact-button ls-25 mobile-navlist-item"><a href="/#contact" class="primary-button" aria-label="Contact me">Contact me!</a></div>			
		</div>
		<div class="mobile-nav-bottom">
			<div class="mobile-nav-social ls-25">
				<a href="https://www.facebook.com/eliasdevelopercom" target="_blank" aria-label="Visit my Facebook page"><i class="fa-brands fa-facebook-f"></i></a>
				<a href="https://www.linkedin.com/in/elias-nilsson/" target="_blank" aria-label="Visit my LinkedIn page"><i class="fa-brands fa-linkedin-in"></i></a>
				<a href="https://github.com/eligolf" target="_blank" aria-label="Visit my GitHub page"><i class="fa-brands fa-github"></i></a>
			</div>
		</div>
	</div>		
</header>
`

// Click to open/close mobile hamburger menu
const navToggle = document.querySelector(".nav-burger-toggle");
const mobileNav = document.querySelector(".mobile-navigation");

navToggle.addEventListener('click', () => {

	// Show/hide the navbar 
    navToggle.toggleAttribute("menu-open", !mobileNav.hasAttribute("data-visible"));
    mobileNav.toggleAttribute("data-visible");
	
	// Check if open, if so don't show any background. Else show it again.
	if(mobileNav.hasAttribute("data-visible")){
		navToggle.style.background = "none";
	}else{	
		navToggle.style.background = "var(--color-sticky-header)";		
	}
})

// Close nav bar when clicking their links
let navItemArray = document.querySelectorAll(".mobile-navlist-item");
navItemArray.forEach(function(elem) {
    elem.addEventListener('click', function() {
		navToggle.toggleAttribute("menu-open", !mobileNav.hasAttribute("data-visible"));
		mobileNav.toggleAttribute("data-visible");
    });
});

// Close nav bar when resizing window
window.onresize = function () {
	mobileNav.removeAttribute("data-visible");
	navToggle.removeAttribute("menu-open");
};

// Creates a sticky header when being scrolled, only show background when not opened
const headerBar = document.querySelector(".header-bar");
const headerLogo = document.querySelector(".header-logo");
function checkHeaderState(){
	if(window.scrollY > 10){		
		if(!mobileNav.hasAttribute("data-visible")){
			headerBar.style.background = "var(--color-sticky-header)";
			headerBar.style.marginTop = "0em"
		}		
		else{
			headerBar.style.background = "none";
			headerBar.style.marginTop = "1em";
		}	
	}else{	
		headerBar.style.background = "none";
		headerBar.style.marginTop = "1em";
	}
}