import React from 'react';

function HomeNav() {
    return (
        <nav class="nav-container">

            <div class="container1" id="galeria">
                <a href="gallery.html"> <div class="overlay text">galeria</div> </a>
            </div>

            <div class="container1" id="aboutme">
                <div class="overlay text">about me</div>
            </div>

            <div class="container1" id="contacto">
                <div class="overlay text">contacto</div>
            </div>

        </nav>
    )
}

export default HomeNav;