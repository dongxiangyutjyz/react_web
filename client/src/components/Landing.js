import React, {Component} from 'react';
import {connect} from 'react-redux';

const Landing = () => {
  return (
    <div id = "parent">
    <ul class="nav">
      <div class="logo">
        <a href="#">LOGO</a>
      </div>
      <li><a href="*" id="js-trigger-overlay" >Home</a></li>
      <li><a href="#aboutUs" id="js-trigger-overlay">About Us</a></li>
      <li><a href="#whyUs" id="js-trigger-overlay">Why Choose Us</a></li>
      <li><a href="#form" id="js-trigger-overlay">Form</a></li>
      <li id = "login"></li>
    </ul>
    </div>
  );
};

export default Landing;
