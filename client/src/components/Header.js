import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import RNC from 'react-native-css';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href = "/auth/google">Login With Google</a></li>;
      default:
        return <li><a href = "/api/logout">Log Out</a></li>;

    }
  }
  render() {
    var navStyle = {
      display: "flex",
      background: "#0abab5",
      width:1000,
      alignItems: "right"
    }
    var navWord = {
      display: "flex",
      color: "#E4E7E8",
    }
    var sentenceStyle = {
      display: "flex"
    }
    var blockStyle = {
      display: "inline-block",
      marginRight: 100
    };
    const { color, fontSize } = this.props;
    const styles = RNC`
    .nav {
      background-color:#E4E7E8;
      color: #0abab5;
      list-style: none;
      text-align: right;
      padding:15px 10px 0 0;
      margin-top:0;
    }

    .navWord {
      color: #0abab5;
      margin-right: 20px;
    }

    .nav > li {
      display: inline-block;
    }

    .nav > li:nth-child(5) {
      margin-right:20px;
    }

    .nav > li:nth-child(6) {
      margin-right:15px;
    }


    .nav > li > a {
      margin: 0 auto;
      font-size: 2.0rem;
      padding: 1.25rem 2.5rem;
      margin-bottom: 8px;
      display: block;
      border: 1px solid transparent;
      color: #eeeeee;
      background-color: #0abab5;
      font-weight: 300;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    .nav > li > a:hover {
      background-color: #ffffff;
      color: #0abab5;
      border-color: #0abab5;
    }

    .blocks {
  margin-top:50px;
  margin-bottom: 20px;
  display: inline-block;
  align-items: stretch;
  height: 100%;
}

.block {
  margin-bottom:20px;
  text-align: center;
  height:350px;
  width: 200px;
  margin-right:20px;
  display:inline-block;
  border-right: 2px solid;
  box-shadow: None;
  position:relative;
  vertical-align: top;
}

.blocks > .block:last-child {
  border-right: none;
}

    .aboutUs {
      text-align: center;
      padding-bottom:50px;
      margin-top: 40px;
      margin-bottom: 40px;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0px 10px 20px 3px #E4E7E8;
    }


  .aboutUsP {
      width:50%;
      margin-top:20px;
      font-size: 22px;
      margin-left:auto;
      margin-right: auto;
    }

    .aboutUsHead {
      background-color: #E4E7E8;
      margin:0;
      padding-top:5%;
      padding-bottom:5%;
    }

    .formbutton
{
    position: relative;
    display: block;
    padding: 19px 39px 18px 39px;
    color: #FFF;
    margin: 0 auto;
    background: #1abc9c;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 100%;
    border: 1px solid #16a085;
    border-width: 1px 1px 3px;
    margin-bottom: 10px;
}
.formnumber {
    background: #1abc9c;
    color: #fff;
    height: 30px;
    width: 30px;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
    border-radius: 15px 15px 15px 0px;
}

.forminput {
  font-family: Georgia, "Times New Roman", Times, serif;
background: rgba(255,255,255,.1);
border: none;
border-radius: 4px;
font-size: 16px;
margin: 0;
outline: 0;
padding: 7px;
width: 100%;
box-sizing: border-box;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
background-color: #e8eeef;
color:#8a97a0;
-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
margin-bottom: 30px;
}

.formfield {
  max-width: 500px;
    padding: 10px 20px;
    background: #f4f7f8;
    margin: 10px auto;
    padding: 20px;
    background: #f4f7f8;
    border-radius: 8px;
    font-family: Georgia, "Times New Roman", Times, serif;
}

.formhead {
  background-color:#E4E7E8;
  color: #0abab5;
  list-style: none;
  text-align: center;
  padding:15px 10px 0 0;
  margin-top:0;
}
.formbody {
  margin:0;
}

    `;


    return (
      <view>
      <ul class="nav" style = {styles.nav}>
        {this.props.children}
        <li><a style = {styles.navWord} href="*" id="js-trigger-overlay" >Home</a></li>
        <li><a style = {styles.navWord} href="#aboutUs" id="js-trigger-overlay">About Us</a></li>
        <li><a style = {styles.navWord} href="#whyUs" id="js-trigger-overlay">Why Choose Us</a></li>
        <li><a style = {styles.navWord} href="#form" id="js-trigger-overlay">Form</a></li>
        <li style = {styles.navWord} className = "right">
          {this.renderContent()}
        </li>
      </ul>
      <div class = "aboutUs" id = "aboutUs" style = {styles.aboutUs}>
    <h2 style = {styles.aboutUsHead}>Who are we?</h2>
    <div  class = "blocks" >
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>We are busy and independent</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>College students just like you</p>
    </div>
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>We want the latest and best tech</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>And we want old electronics to turn $$$</p>
    </div>
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>We are the tech-guys</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Who know A LOT about electronics</p>
    </div>
  </div>
  </div>
  <div class = "whyUs" id = "whyUs" style = {styles.aboutUs}>
    <h2 style = {styles.aboutUsHead}>Why choose us?</h2>
    <div class = "blocks">
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>We are experienced electronic sellers</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Leave the complication of procedure to us</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Save yourself time and energy</p>
    </div>
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>We pay close attention to market price</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Leave the research to us</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Ensure yourself the best plan</p>
    </div>
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>We work closely with our customers</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>We pick up your electronics from your dorm</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>We only take five percent of the sale price</p>
    </div>
  </div>
  </div>
  <div class = "howWork" id = "howWork" style = {styles.aboutUs}>
    <h2 style = {styles.aboutUsHead}>How it works</h2>
    <div class = "blocks">
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>It is simple!</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Self-check the device condition</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Submit the meet-up form</p>
    </div>
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Meet our tech-guys to further check the device</p><br></br>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Trust your device to us</p>
    </div>
    <div class = "block" style = {blockStyle}>
      <p style = {[styles.aboutUsP,sentenceStyle]}>Sit back and relax! You can sell the phone and get the latest phone in no time</p>
    </div>
  </div>
  </div>
  <div style = {styles.aboutUs}>
  <div style = {styles.sentenceStyle}>
  <div style = {styles.formbody}>
  <h2 style = {styles.aboutUsHead}>Form</h2>
  <div class = "form" id = "form" style = {styles.formfield}>
  <div class="form-style-5">
    <form method="post" action="/submit" id="myForm">
<fieldset>
<legend style = {styles.formhead}><span style = {styles.formnumber} class="number">1</span> Customer Info</legend>
<input style = {styles.forminput} type="text" name="firstName" placeholder="Your First Name" require></input>
<div style = {styles.navWord}>
<input style = {styles.forminput} type="text" name="lastName" placeholder="Your Last Name" ></input>
</div>
<input style = {styles.forminput} type="email" name="contact" placeholder="Your Email" ></input>
<input style = {styles.forminput} type="text" name="address" placeholder="Your Address on Campus" ></input>
</fieldset>
<fieldset>
<legend><span style = {styles.formnumber} class="number">2</span> Product Info</legend>
<label for="prodcut">Your product:</label>
<input style = {styles.forminput} type="text" name="product" placeholder="iPhone6" require></input>
<label for="broken">Broken:</label>
<input style = {styles.forminput} type="text" name="broken" placeholder="Yes/No" require></input>
<input style = {styles.forminput} type="text" name="description" placeholder="Description (optional)"></input>
<label for="pickup">Pick Up Time:</label>
<input style = {styles.forminput} type="date" name="date" ></input>
<input style = {styles.forminput} type="time" name="time"></input>
</fieldset>
<input style = {styles.forminput} type="submit" value="Submit" style = {styles.formbutton}></input>
</form>
</div>
</div>
</div>
</div>
</div>
<div class = "row">
  <div class = "container">
<footer>
  <div class = "col1">
  <h4>Contact Us</h4>
  <p>James Dong</p>
  <p>Donglun He</p>
</div>
<div class = "col2">
<h4>All Rights Reserved</h4>
</div>
</footer>
</div>
</div>
      </view>
    );
  }
}
function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Header);
