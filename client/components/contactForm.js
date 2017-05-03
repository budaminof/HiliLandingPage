import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.name) errors.name = 'בבקשה הקלד שם';
  if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'בבקשה הקלד כתובת אימייל';
  return errors
}

const warn = values => {
  const warnings = {}
  // add warning if needed.
  // if (values.age < 19)  warnings.age = 'Hmm, you seem a bit young...' ;
  return warnings
}
// this function can't be in the render function because when the component
// rerender, it loses focus.
const renderField = ({ input, label, type,
    meta: { touched, error, warning } }) => (
      <div className="from-field">
        {touched && ((error && <p className="danger">{error}</p>) ||
        (warning && <p>{warning}</p>))}
        <label>{label}</label>
        <input {...input} type={type} />
      </div>
  );


class ContactForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="contact-form">
        <form onSubmit={ handleSubmit } >

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
  form: 'contactForm', // a unique name for this form
  validate,  // <--- validation function given to redux-form
  warn
})(ContactForm);

export default ContactForm;
