import React, { Component } from 'react';
import Contact from './contact.js';
import Head from './top.js';
import Carousel from './carousel.js';
import Middle from './middle';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Carousel />
        <Middle />
        <Contact />
        <Footer />
      </div>
    );
  }
}
