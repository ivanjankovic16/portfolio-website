"use strict";
// Header and Footer on all - - - - - - - - - - - - - - - - - - - - - - - - - - 
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="main-header">
            <nav class="main-nav">  
                <ul class="nav-list">
                    <li class="navbar-element">
                        <a href="index">Home
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="navbar-element">
                        <a href="about">About
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="navbar-element">
                        <a href="career">Career
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>   
                    </li>
                    <li class="navbar-element">
                        <a href="links">Links
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="navbar-element">
                        <a href="contact">Contact
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="hamburger-container">
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
                <ul class="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="links.html">Links</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-container">
                <div class="inner-footer-left">
                    <div class="linkedin-container">
                        <a href="https://www.linkedin.com/in/ivan-jankovic-3a1a16102/" title="LinkedIn" rel="noopener noreferrer">
                            <img src="../pictures/icons8-linkedin-circled-51.png" id="li-icon" alt="linkedin image">
                        </a>
                    </div>
                    <div class="copyright-container">
                        <p>&copy; 2021 Ivan Janković<br/>All Rights Reserved</p>
                    </div>
                </div>
                <div class="inner-footer-right">
                    <ul class="footer-contact">
                        <li>Ivan Jankovic</li>
                        <li><a href="mailto:i.jankovic@rocketmail.com">i.jankovic@rocketmail.com</a></li>
                        <li>+385989326491</li>
                        <li>FRONT-END DEVELOPER</li>
                    </ul>
                    <div class="parallel-container">
                        <div class="parallel-box parallel1"></div>
                        <div class="parallel-box parallel2"></div>
                        <div class="parallel-box parallel3"></div>
                        <div class="parallel-box parallel4"></div>
                    </div>
                </div>              
            </div>
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);

// video lazy-load
document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});