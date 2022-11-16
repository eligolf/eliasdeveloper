// Add HTML to divs
document.querySelector('#my-portfolio').innerHTML = `
    <div class='content-wrapper'>
        <div class="content-card portfolio-card-holder">
            <h2 class="title-text title-text-color-4 title-text-animation">Portfolio.</h2>
            <p class="normal-text">Below is a selection of projects I have worked on besides this website. Feel free to <a href="#contact">send me a message</a> if you want to know more.</p>
            <br>
            <div class='my-grid'>
                <div id="portfoliocard1" class="portfolio-card portfolio-card-bg-auktionera">
                    <div class="card-top-row">
                        <h3 class="card-title">Auktionera</h3>
                        <div>
                            <a class="card-icon" href="https://auktionera.ax/" target="_blank" aria-label="Visit Auktionera website"><i class="fa-solid fa-globe"></i></a>
                            <a class="card-icon" href="https://facebook.com/auktionera" target="_blank" aria-label="Visit Auktionera Facebook page"><i class="fa-brands fa-facebook"></i></a>                            
                        </div>
                    </div>
                    <p class="normal-text">I developed the website for Auktionera which is a circular market site for the Åland Islands where individuals and companies can buy and sell products through fixed price- or bidding listings.</p>
                    <ul>
                        <li><p class="normal-text"><u><b>Service</u>: </b> Website development, management and maintenance.</p></li>
                        <li><p class="normal-text"><u><b>Skills</u>: </b> WordPress, HTML, PHP, JavaScript, SQL.</p></li>
                        <li><p class="normal-text"><u><b>Complexity</u>: </b> High.</p></li>
                    </ul>
                </div>
                <div id="portfoliocard2" class="portfolio-card portfolio-card-bg-eir">
                    <div class="card-top-row">
                        <h3 class="card-title">Eir Music</h3>
                        <div>
                            <a class="card-icon" href="https://www.facebook.com/eirmusicgroup" target="_blank" aria-label="Visit Eir Music Facebook page"><i class="fa-brands fa-facebook"></i></a>                            
                        </div>
                    </div>
                    <p class="normal-text">Eir Music is a music production company based in Sweden. I developed their website in WordPress which had some basic functionality such as a blog, audio showcase, and customer reviews.</p>
                    <ul>
                        <li><p class="normal-text"><u><b>Service</u>:</b>  Website development.</p></li>
                        <li><p class="normal-text"><u><b>Skills</u>: </b> WordPress, HTML, PHP.</p></li>
                        <li><p class="normal-text"><u><b>Complexity</u>: </b> Low.</p></li>
                    </ul>
                </div>
                <div id="portfoliocard3" class="portfolio-card portfolio-card-bg-endamat">
                    <div class="card-top-row">
                        <h3 class="card-title">Endamat Chess</h3>
                        <div>
                            <a class="card-icon" href="https://github.com/eligolf/Endamat-Chess" target="_blank" aria-label="Visit GitHub repository for Endamat Chess"><i class="fa-brands fa-github"></i></a>                            
                        </div>
                    </div>
                    <p class="normal-text">Endamat Chess is a bitboard chess engine I wrote from scratch in Python. I also developed a user interface so that people easily can play against the engine with various settings. The code is open source on GitHub.</p>
                    <ul>
                        <li><p class="normal-text"><u><b>Service</u>:</b>  Software development.</p></li>
                        <li><p class="normal-text"><u><b>Skills</u>: </b> Python, PyGame, Chess.</p></li>
                        <li><p class="normal-text"><u><b>Complexity</u>: </b> High.</p></li>
                    </ul>
                </div>
                <div id="portfoliocard4" class="portfolio-card portfolio-card-bg-snake3d">
                    <div class="card-top-row">
                        <h3 class="card-title">Snake 3D - Space Adventure</h3>
                        <div>
                            <a class="card-icon" href="https://play.google.com/store/apps/details?id=com.SlimHippoGames.Snake3D&hl=en_US&gl=US" target="_blank" aria-label="Visit Snake 3D Google Play Store page"><i class="fa-brands fa-google-play"></i></a>                            
                        </div>
                    </div>
                    <p class="normal-text">Snake 3D - Space Adventure is a free mobile game I created in Unity and programmed in C#. Some 3D models were made in Blender and the animations were programmed in Unity.</p>
                    <ul>
                        <li><p class="normal-text"><u><b>Service</u>:</b>  Software development.</p></li>
                        <li><p class="normal-text"><u><b>Skills</u>: </b> C#, Unity, Blender.</p></li>
                        <li><p class="normal-text"><u><b>Complexity</u>: </b> Medium.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`