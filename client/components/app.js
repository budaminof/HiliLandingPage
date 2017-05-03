import React, { Component } from 'react';
import Contact from './contact.js';
import Head from './top.js';
import Middle from './middle';


export default class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Middle />
        <Contact />
      </div>
    );
  }
}
