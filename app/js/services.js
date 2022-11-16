// Add HTML to divs
document.querySelector('#my-services').innerHTML = `
<div class='content-wrapper'>
    <div class="content-card services-card-holder">
        <h2 class="title-text title-text-color-4 title-text-animation">Services.</h2>
        <p class="normal-text">Below you find the services I currently offer to my clients. I suggest you <a href="#contact">message me</a> with more information about your needs to get a personal offer.</p>
        <br>
        <div class='my-grid'>
            <div id="servicescard1" class="services-card">
                <h3 class="services-card-title">WordPress Website.</h3>
                <p class="normal-text">You get a modern WordPress site for your needs which is easy to maintain and update with content. </p>
                <ul>
                    <li><p class="normal-text"><u><b>Suitable for</u>: </b> More generic blogs or e-commerce sites.</p></li>
                    <li><p class="normal-text"><u><b>Cost</u>: </b> Low to medium.</p></li>
                    <li><p class="normal-text"><u><b>Time to market</u>: </b> Short.</p></li>
                    <li><p class="normal-text"><u><b>Maintainability</u>: </b> Easy.</p></li>
                </ul>
            </div>
            <div id="servicescard2" class="services-card">
                <h3 class="services-card-title">Custom Website.</h3>
                <p class="normal-text">I create a completely custom and unique website from scratch which makes you stand out in the crowded internet marketplace.</p>
                <ul>
                    <li><p class="normal-text"><u><b>Suitable for</u>: </b> Brands that want to stand out from the crowd.</p></li>
                    <li><p class="normal-text"><u><b>Cost</u>: </b> High.</p></li>
                    <li><p class="normal-text"><u><b>Time to market</u>: </b> Medium to long.</p></li>
                    <li><p class="normal-text"><u><b>Maintainability</u>: </b> Difficult.</p></li>
                </ul>
            </div>  
            <div id="servicescard3" class="services-card">
                <h3 class="services-card-title">Management and Maintenance.</h3>
                <p class="normal-text">I manage and maintain your website to a fixed monthly price so you don't have to worry about downtime, updates or compability issues. This includes e.g. hosting, updating softwares/plugins and support.</p>
                <ul>
                    <li><p class="normal-text"><u><b>Suitable for</u>: </b> Everyone.</p></li>
                    <li><p class="normal-text"><u><b>Cost</u>: </b> Low.</p></li>
                </ul>
            </div> 
            <div id="servicescard4" class="services-card">
                <h3 class="services-card-title">Software Development.</h3>
                <p class="normal-text">I create applications, tools and other software related products, mainly for smaller companies. <a href="#contact">Let me know what you need</a> and I will get back to you with more information. </p>
            </div>                
        </div>
    </div>
</div>
`