import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

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
    return (
      <nav>
        <div className = "nav-wrapper">
          <Link
          to={this.props.auth ? '/forms':'/'}
          className = "left brand-logo"
          >
            Emaily
          </Link>
          <ul className = "right">
            {this.renderContent()}
          </ul>
        </div>
        <form method="post" action="/addname">
 <label>Enter Your Name</label><br>
 <input type="text" name="firstName" placeholder="Enter first name..." required>
 <input type="text" name="lastName" placeholder="Enter last name..." required>
 <input type="submit" value="Add Name">
 </form>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Header);
