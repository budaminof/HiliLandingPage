import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './contactForm';
import scrollToComponent from 'react-scroll-to-component';
import * as actions from '../actions';

class Contact extends Component {

  handleScroll(event) {
    let anchor = document.getElementById('top');
    scrollToComponent(anchor);
  }

  render() {
    return (
      <div className="contact">
        <h1>נשמח לענות לכל שאלה ועניין</h1>
        <SearchForm onSubmit={ actions.submitForm }/>
        <div className="icon">
          <a onClick={event => this.handleScroll(event) }><img src="/images/icon.png" /></a>
        </div>
        <div className="details col-md-8 col-md-offset-2">
          <div>
            <p>נדב ברק &middot; טל. <a href="tel:+972528768856">052.8768856</a></p>
            <p><a href="mailto:nadav@denrto.co.il ">Nadav@dentro.co.il</a></p>
          </div>

          <div>
            <p>הילי ברק &middot; טל. <a href="tel:+97253395986">052.3395986</a></p>
            <p><a href="mailto:hili@dentro.co.il">Hili@dentro.co.il</a></p>
          </div>

          <div>
            <p>אומנות החידוש והשימור</p>
            <p><a onClick={event => this.handleScroll(event) }>Dentro.co.il</a></p>
          </div>

          <div>
            <a onClick={event => this.handleScroll(event) }><img src="/images/dentro-details.png"/></a>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Contact);
