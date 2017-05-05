import React, { Component } from 'react';
import { Field, reduxForm, handleSubmit, reset } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.name) errors.name = 'בבקשה הקלד שם';
  if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'בבקשה הקלד כתובת אימייל';
  return errors
}

const renderField = ({ input, label, type,
    meta: { touched, error } }) => (
      <div className="from-field">
        {touched && ((error && <p className="danger">{error}</p>))}
        <label>{label}</label>
        <input {...input} type={type} />
      </div>
  );


class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="contact-form">
        <form onSubmit={handleSubmit} >

          <Field name="name" component={ renderField } type="text" label="שם."
            required/>

          <Field name="phone" component={ renderField } type="tel" label="טלפון."
            required/>

          <Field name="email" component={ renderField } type="email" label="EMAIL."
            required/>

          <button type="submit">
            <span>שלח</span>
            <img src="/images/arrow.png"></img>
          </button>
        </form>
      </div>
    )
  }
}

ContactForm = reduxForm({
  form: 'contactForm',
  validate 
})(ContactForm);

export default ContactForm;
