import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './contactForm';
import scrollToComponent from 'react-scroll-to-component';
import * as actions from '../actions';


class Contact extends Component {
  constructor(props) {
    super(props);
  }

  handleScroll(event) {
    let anchor = document.getElementById('top');
    scrollToComponent(anchor);
  }

  handleSubmit(data) {
    actions.submitForm(data);
    console.log("form has been submitted.");
  }

  render() {
    console.log("container", this.props);
    return (
      <div className="contact">
        <h1>נשמח לענות לכל שאלה ועניין</h1>

        <SearchForm />

        <div className="icon">
          <a onClick={event => this.handleScroll(event) }><img src="/images/icon.png" /></a>
        </div>
        <div className="details col-md-6 col-md-offset-3">
          <div>
            <p>נדב &middot; טל. <a href="tel:+972777296172">052.8768856</a></p>
            <p><a href="mailto:nadav@denrto.co.il">Nadav@dentro.co.il</a></p>
          </div>

          <div>
            <p>הילי &middot; טל. <a href="tel:+972777296172">077.7296172</a></p>
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

function mapStateToProps (state) {
  return {
    msg: state.contact.msg,
    conversion: state.contact.conversion
  }
}

export default connect(mapStateToProps, actions)(Contact);
