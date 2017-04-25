import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.name) errors.name = 'Please enter a name';
  if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Please enter a valid Email';
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
      <div>
        <input {...input} type={type} />
        {touched && ((error && <p className="danger">{error}</p>) ||
        (warning && <p>{warning}</p>))}
      </div>
  );

class ContactForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="contact">
        <form onSubmit={ handleSubmit } >

          <Field name="name" component={ renderField } type="text" label="name"
            required/>

          <Field name="company" component={ renderField } type="text" label="company"
            required/>

          <Field name="email" component={ renderField } type="email" label="email"
            required/>

          <button type="submit">send</button>
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
