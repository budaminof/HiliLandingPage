import React, { Component } from 'react';
import SearchForm from './contactForm';
import scrollToComponent from 'react-scroll-to-component';


class Contact extends Component {

  handleSubmit = (values) => {
    console.log('handle submit',values);
    // this.props.dispatch(newSearch());
  }

  handleScroll(event) {
    let anchor = document.getElementById('top');
    scrollToComponent(anchor);
  }

  render() {
    return (
      <div className="contact">
        <h1>נשמח לענות לכל שאלה ועניין</h1>
        <SearchForm onSubmit={this.handleSubmit} />
        <div className="icon">
          <a onClick={event => this.handleScroll(event) }><img src="/images/icon.png" /></a>
        </div>
        <div className="details col-md-8 col-md-offset-2">
          <div>
            <p>נדב ברק &middot; טל. 052.8768856</p>
            <p><a href="mailto:nadav@denrto.co.il ">Nadav@dentro.co.il</a></p>
          </div>

          <div>
            <p>הילי ברק &middot; טל. 052.3395986</p>
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

export default Contact;
