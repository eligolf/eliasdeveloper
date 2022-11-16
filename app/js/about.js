// Add HTML to divs
document.querySelector('#my-about').innerHTML = `
<div class='content-wrapper'>
    <div class="content-card about-card-holder">
        <div class='row'>
            <div class='column-70'>
                <h2 class="title-text title-text-color-1 title-text-animation">About me.</h2>
                <p class="normal-text">Ever since I made my first Tic-Tac-Toe game in Python I have been fascinated by the emotions a few characters in a text editor can create for the user. Since then programming has developed into a serious passion for creating intuitive, modern, and interactive user experiences on the web.</p>
                <br>
                <p class="normal-text">I am from Sweden and currently work remotely as a freelance developer with clients ranging from individuals to medium sized companies. If you have a request or a question, don't hesitate to <a href="#contact">contact me</a>.</p>
            </div>
            <div class='column-70'>
                <img class="avatar-image" src="assets/images/elias-avatar-transparent.png" alt="Elias">
            </div>
        </div>
    </div>
</div>
`