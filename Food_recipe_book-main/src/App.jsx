import React, { Component } from 'react';
import './App.css';
import { callApi } from './api';

export default class App extends Component {

  constructor() {
    super();
    this.userRegistration = this.userRegistration.bind(this);
    this.signin = this.signin.bind(this);
    this.closesignin = this.closesignin.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.signinResponse = this.signinResponse.bind(this);
    this.openAbout = this.openAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
  }

  showSignin() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("signin").style.display = "block";
    document.getElementById("signup").style.display = "none";
    document.getElementById("popupheader").innerHTML = "Login";
  }

  closesignin(event) {
    if (event.target.id === "popup") {
      document.getElementById("popup").style.display = "none";
    }
  }

  showSignup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById("popupheader").innerHTML = "Create An Account";
  }

  userRegistration() {
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const role = document.getElementById("role");
    const signuppassword = document.getElementById("pass");
    const confirmpassword = document.getElementById("Confirmpass");

    fullname.style.border = "";
    email.style.border = "";
    role.style.border = "";
    signuppassword.style.border = "";
    confirmpassword.style.border = "";

    if (fullname.value === '') {
      fullname.style.border = "1px solid red";
      fullname.focus();
      return;
    }

    if (signuppassword.value !== confirmpassword.value) {
      confirmpassword.style.border = "1px solid red";
      alert("Passwords do not match");
      return;
    }

    const data = JSON.stringify({
      fullname: fullname.value,
      email: email.value,
      password: signuppassword.value,
      role: role.value
    });

    callApi("POST", "http://localhost:9090/users/signup", data, this.getResponse);
  }

  getResponse(res) {
    const resp = res.split('::');
    alert(resp[1]);
    if (resp[0] === "200") {
      document.getElementById("signup").style.display = "none";
      document.getElementById("signin").style.display = "block";
    }
  }

  signin() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const responseDiv = document.getElementById("responseDiv");

    username.style.border = "";
    password.style.border = "";
    responseDiv.innerHTML = "";

    if (username.value === "") {
      username.style.border = "1px solid red";
      username.focus();
      return;
    }

    if (password.value === "") {
      password.style.border = "1px solid red";
      password.focus();
      return;
    }

    const data = JSON.stringify({
      email: username.value,
      password: password.value
    });

    callApi("POST", "http://localhost:9090/users/signin", data, this.signinResponse);
  }

  signinResponse(res) {
    const rdata = res.split('::');
    const responseDiv = document.getElementById("responseDiv");

    if (rdata[0] === "200") {
      setSession("csrid", rdata[1], 1);
      window.location.replace("/dashboard");
    } else {
      responseDiv.innerHTML = `<br/><label style='color:red'>${rdata[1]}</label>`;
    }
  }

  openAbout() {
    document.getElementById("aboutPopup").style.display = "block";
  }

  closeAbout(event) {
    if (
      event.target.className === "popup-overlay" ||
      event.target.className === "close-btn"
    ) {
      document.getElementById("aboutPopup").style.display = "none";
    }
  }

  render() {
    return (
      <div id="Container">
        {/* Signin/Signup Popup */}
        <div id="popup" onClick={this.closesignin}>
          <div id="popupwindow">
            <div id="popupheader">Login</div>

            <div id="signin">
              <label className='usernamelabel'><span>User</span>Name</label>
              <input type="text" id="username" placeholder="Uname/email" />
              <label className='passwordlabel'>Password</label>
              <input type="password" id="password" />
              <div className="forgotpassword">Forgot <label>Password?</label></div>
              <button className="signinbutton" onClick={this.signin}>Signin</button>
              <div id="responseDiv"></div>
              <div className="donthaveaccount">Don't have an account?<br />
                <label onClick={this.showSignup}>Sign Up Now</label>
              </div>
            </div>

            <div id="signup">
              <label>Full Name*</label>
              <input type="text" id="fullname" />
              <label>Email Id*</label>
              <input type="email" id="email" placeholder="email@gmail.com" />
              <label>Select the Role*</label>
              <select id="role">
                <option value=""></option>
                <option value="2">Chef</option>
                <option value="3">User</option>
              </select>
              <label>Password*</label>
              <input type="password" id="pass" />
              <label>Confirm Password*</label>
              <input type="password" id="Confirmpass" />
              <button onClick={this.userRegistration}>Register</button>
              <div className="haveaccount">Do you already have an account?<br />
                <span onClick={this.showSignin}>Sign In</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Popup */}
        <div id="aboutPopup" className="popup-overlay" onClick={this.closeAbout}>
          <div className="about-popup-content">
            <span className="close-btn" onClick={this.closeAbout}>&times;</span>
            <div className="about-content-wrapper">
              <img src="/sizzlyW.png" alt="About" className="about-image" />
              <div className="about-text">
                <h2>ABOUT PAGE!</h2>
                <p>At SIZZLY, we believe everyone can be a chef in their own kitchen.
Our mission is to make home cooking simple, fun, and inspiring.
With trusted recipes and expert tips, we help you cook with confidence.
Join our growing community of passionate home cooks today! <br /> For any queries, contact us at-sizzly@gmail.com</p>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-google"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div id="header">
          <img className="logo" src="/sizzlyG.png" />
          <div className="logotext"><span>SIZZLY</span></div>
          <img className="signin" src="/signiniconG.png" onClick={this.showSignin} />
          <div className="signintext" onClick={this.showSignin}>Signin</div>
          <div className="abouttext" onClick={this.openAbout}>About</div>
          <div className="contact_us">Help?:<span>Contact Us</span></div>
        </div>

        {/* Content */}
        <div id="content">
          <div className="text">Everyone can be a <br />&nbsp;&nbsp;&nbsp; chef in their own kitchen</div>
          <img className="logoh" src="./sizzlyW.png" />
          <img className="contentlogo" src="./homeicW.png" />
        </div>

        {/* Footer */}
        <div id="footer">
          <div className="footertext"></div>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img className="socialmediaicons" src="/twitter.png" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="socialmediaicons" src="/facebook.png" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="socialmediaicons" src="/instagram.png" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img className="socialmediaicons" src="/youtube.png" />
          </a>
        </div>
      </div>
    );
  }
}

// Cookie session utilities
export function setSession(sesname, sesvalue, expday) {
  const D = new Date();
  D.setTime(D.getTime() + expday * 86400000);
  document.cookie = `${sesname}=${sesvalue}; expires=${D.toUTCString()}; path=/; secure`;
}

export function getSession(sesname) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieData = decodedCookie.split(';');
  for (let item of cookieData) {
    if (item.includes(sesname)) {
      return item.substring(item.indexOf(sesname) + sesname.length + 1);
    }
  }
  return "";
}
