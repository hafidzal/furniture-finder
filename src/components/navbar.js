import React, { Component } from 'react';
import Search from './common/search';

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar-style">
            <div className="navbar-list-style">
                <Search history={this.props.history}/>
            </div>
        </nav>
    )
  }
}