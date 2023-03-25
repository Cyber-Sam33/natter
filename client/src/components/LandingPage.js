import React from "react";
import Axios from "axios";
import logo from "./natter_logo.png";
import video from "../video/vid-natter.mp4";

export default function LandingPage() {
  return (
    <body id="page-top">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
          <a className="navbar-brand fw-bold ml-20" href="#page-top"></a>
          <img src={logo} class="rounded mx-auto d-block" alt="Natter Logo" />
          <form className="collapse navbar-collapse d-flex text-center">
            <div className="form-outline form-black text-center col-md-12">
              <button className="btn-lg btn-primary rounded-pill mr-3 mb-2 ">
                <span className="d-flex align-items-center">
                  <i className="bi-chat-text-fill me-2 mr-2"></i>
                  <span className="big">Click to Natter</span>
                </span>
              </button>
              <input type="text" placeholder="Enter your name..."></input>
            </div>
          </form>
        </div>
      </nav>
      <section>
        <video autoPlay loop muted plays-inline controls width="100%">
          <source src={video} type="video/mp4" />
          Sorry your browser doesn't support videos.
        </video>
      </section>
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <p className="lead fw-normal mb-5">Simply enter your name, choose your interest group and you're ready to natter!</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="masthead-device-mockup">
                <div className="device-wrapper">
                  <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                    <div>
                      <img src="https://cdn-icons-png.flaticon.com/512/610/610413.png" alt="Speech bubbles" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="h2 fs-1 text-white mb-4">"Good mental health starts with a good natter!"</div>
              <img src="https://cdn-icons-png.flaticon.com/512/3002/3002655.png" alt="Two people having a good natter" />
            </div>
          </div>
        </div>
      </aside>
    </body>
  );
}





