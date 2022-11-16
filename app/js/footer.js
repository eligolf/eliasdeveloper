// Variables
var currentYear = new Date().getFullYear();

// Add footer HTML to divs with id="my-footer"
document.querySelector('#my-footer').innerHTML = `
<footer>
    <a class="footer-logo" href="/">
        <img src="assets/images/only-logo-light-blue.png" alt="Elias Nilsson">
    </a>
    <div class="copyright-statement ls-10">
        © ${currentYear} Elias Nilsson
    </div>
    <div>
        <div class="mobile-nav-social ls-25">
            <a href="https://www.facebook.com/eliasdevelopercom" target="_blank" aria-label="Visit my Facebook page"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/elias-nilsson/" target="_blank" aria-label="Visit my LinkedIn page"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/eligolf" target="_blank" aria-label="Visit my GitHub page"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
</footer>
`