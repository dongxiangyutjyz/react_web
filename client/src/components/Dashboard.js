import React, {Component} from 'react';
import {connect} from 'react-redux';

const Dashboard = () => {
  return (
    <div>
    Dashboard
    <div className = "fixed-action-btn">
      <a className = "btn-floating btn-large red">
        <i className = "material-icons">add</i>
      </a>
      <h1> hello world</h1>
    </div>
    </div>
  )
}

export default Dashboard;
