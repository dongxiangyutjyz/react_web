import React, {Component} from 'react';
import {connect} from 'react-redux';
const express = require('express');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const mongoURI = 'mongodb://xdong2:James__1998@ds141534.mlab.com:41534/xdong2_emaily_dev';

mongoose.connect(mongoURI);

const app = express();

const DescriptionSchema = new Schema({
  firstName: String
  //lastName = String;
  /*gender = String;
  number = String;
  broken = String;
  broken_description = String;*/
});

var Description = mongoose.model('Description',DescriptionSchema);

app.post('/addname',(req,res) => {
  var myData = new Description(req.body);
  myData.save()
    .then(item => {
        res.send("Name saved to database");
    })
    .catch(err => {
        res.status(400).send("Unable to save to database");
    });
});

const Forms = () => {
  return (
    <div>
      <h1></h1>
      <form method="post" action="/addname">
        <label>Enter Your Name</label>
            <input type="text" name="firstName" placeholder="Enter first name..." required />
            <input type="text" name="lastName" placeholder="Enter last name..." required />
            <input type="submit" />
        </form>
    </div>
  );
};

export default Forms;
