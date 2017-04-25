import React, { Component } from 'react';
// import { connect } from 'react-redux';
import SearchForm from './contactForm';


class Contact extends Component {

  handleSubmit = (values) => {
    console.log('handle submit',values);
    // this.props.dispatch(newSearch());
  }

  render() {
    return (
      <div>
        <h2>נשמח לענות לכל שאלה ועניין</h2>
        <SearchForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Contact;
