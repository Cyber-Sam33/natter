import React from "react";
import Axios from "axios";

export default function LandingPage() {
  return (
    <body id="page-top">
      {/* {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
          {/* <a className="navbar-brand fw-bold ml-20" href="#page-top">Natter</a> */}
          <form className="collapse navbar-collapse d-flex">
            <div className="form-outline form-black text-center col-md-12">
              <button className="btn-lg btn-primary rounded-pill mr-3 ">
                <span className="d-flex align-items-center">
                  <i className="bi-chat-text-fill me-2"></i>
                  <span className="big">Click to Natter</span>
                </span>
              </button>
              <input type="text" placeholder="Enter your name..."></input>
            </div>
          </form>
        </div>
      </nav>
      {/* <!-- Mashead header--> */}
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              {/* <!-- Mashead text and app badges--> */}
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                {/* <h1 className="display-1 lh-1 mb-3">Natter!!!!</h1> */}
                {/* <form className="d-flex">
                  <div className="form-outline form-black">
                    <button className="btn-lg btn-primary rounded-pill mr-3 ">
                      <span className="d-flex align-items-center">
                        <i className="bi-chat-text-fill me-2"></i>
                        <span className="big">Click to Natter</span>
                      </span>
                    </button>
                    <input type="text" placeholder="Enter your name..."></input>
                  </div>
                </form> */}
                <p className="lead fw-normal mb-5">Simply enter your name and you're ready to natter!</p>
                {/* <div className="d-flex flex-column flex-lg-row align-items-center">
                  <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
                  <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              {/* <!-- Masthead device mockup feature--> */}
              <div className="masthead-device-mockup">
                {/* <svg className="circle mb-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                      <stop className="gradient-start-color" offset="0%"></stop>
                      <stop className="gradient-end-color" offset="100%"></stop>
                    </linearGradient>
                  </defs> */}
                {/* <circle cx="50" cy="50" r="50"></circle></svg> */}
                {/* <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg"> */}
                {/* <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect> */}
                {/* <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg> */}
                {/* <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg> */}
                <div className="device-wrapper">
                  <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                    <div>
                      {/* <!-- PUT CONTENTS HERE:-->
                      <!-- * * This can be a video, image, or just about anything else.-->
                      <!-- * * Set the max width of your media to 100% and the height to-->
                      <!-- * * 100% like the demo example below.--> */}
                      <img src="https://cdn-icons-png.flaticon.com/512/610/610413.png" alt="Speech bubbles" />

                      {/* <video muted="muted" autoplay="" loop="><source src="assets/img/demo-screen.mp4" type="video/mp4" /></video> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Quote/testimonial aside--> */}
      <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="h2 fs-1 text-white mb-4">"The solution to have good mental health is to natter!"</div>
              <img src="https://cdn-icons-png.flaticon.com/512/3002/3002655.png" alt="Two people having a good natter" />
            </div>
          </div>
        </div>
      </aside>
      {/* <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script> */}
    </body>
  );
}





