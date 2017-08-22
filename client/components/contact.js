import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './contactForm';
import scrollToComponent from 'react-scroll-to-component';
import * as actions from '../actions';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConversion: false
    };
  }

  handleScroll(event) {
    let anchor = document.getElementById('top');
    scrollToComponent(anchor);
  }

  handleSubmit (data) {
    event.preventDefault();
    this.props.submitForm(data);

    var google_conversion_id = 852164689;
    var google_conversion_language = "en";
    var google_conversion_format = "3";
    var google_conversion_color = "ffffff";
    var google_conversion_label = "J9k5CITuhnQQ0YCslgM";
    var google_remarketing_only = false;

    this.setState({
      showConversion: true
    });

    }

  renderGoogleStuff() {
    // render google conversion image
    let divStyle = {
      display: 'inline',
      height: 1,
      width: 1,
      border: 'none'
    }
     return (
        <div>
         <img style={{ divStyle }}  alt=""  src="//www.googleadservices.com/pagead/conversion/852164689/?label=J9k5CITuhnQQ0YCslgM&amp;guid=ON&amp;script=0"></img>
       </div>
     );
   }


  render() {

    return (
      <div className="contact">
        <h1>נשמח לענות לכל שאלה ועניין</h1>

        <SearchForm onSubmit={ this.handleSubmit.bind(this) }/>

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

            { this.state.showConversion ? this.renderGoogleStuff() : <div></div> }

        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    msg: state.contact.msg
  }
}

export default connect(mapStateToProps, actions)(Contact);
