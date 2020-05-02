import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
        <a className='navbar-brand' href='./'>
          Brand
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#myNavbar'
          aria-controls='myNavbar'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='myNavbar'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='./home'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='./about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link disabled' to='./home'>
                No Where
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='./topics'>
                Topics
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='./other'>
                Redirect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
