


import React, { Component } from 'react';
import SearchForm from './contactForm';


class Contact extends Component {

  handleSubmit = (values) => {
    console.log('handle submit',values);
    // this.props.dispatch(newSearch());
  }

  render() {
    return (
      <div className="contact">
        <h1>נשמח לענות לכל שאלה ועניין</h1>
        <SearchForm onSubmit={this.handleSubmit} />
        <div className="icon">
          <img src="/images/icon.png" />
        </div>
        <div className="details col-md-8 col-md-offset-2">
          <div>
            <p>נדב ברק &middot; טל. 052.8768856</p>
            <p>Nadav@dentro.co.il</p>
          </div>

          <div>
            <p>הילי ברק &middot; טל. 052.3395986</p>
            <p>Hili@dentro.co.il</p>
          </div>

          <div>
            <p>אומנות החידוש והשימור</p>
            <p>Dentro.co.il</p>
          </div>

          <div>
            <img src="/images/dentro-details.png"/>
          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
