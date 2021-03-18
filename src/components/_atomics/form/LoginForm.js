import React from "react";
import EmailField from "./EmailAddress";

function LoginForm({ initialValues, validate })
{
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});

  // change event handler
  const handleChange = evt => {
    const { name, value: newValue, type } = evt.target;

    // keep number fields as numbers
    const value = type === "number" ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;

    // check for a new error
    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error })
    });
  };

  // form submit handler
  const handleSubmit = evt => {
    evt.preventDefault();

    // validate the form
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError })
          },
          touched: {
            ...acc.touched,
            ...newTouched
          }
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched }
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // all fields were touched
      Object.values(formValidation.touched).every(t => t === true) // every touched field is true
    ) {
      alert(JSON.stringify(values, null, 2));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="first-name-input">
            First Name *
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
              required
            />
            {touched.firstName && errors.firstName}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="last-name-input">
            Last name *
            <input
              type="text"
              className="form-control"
              id="last-name-input"
              placeholder="Enter last name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastName"
              required
            />
            {touched.lastName && errors.lastName}
          </label>
        </div>
        <EmailField></EmailField>
        <div className="form-group">
          <label htmlFor="age">
            Age *
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              value={values.age || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="age"
              min="0"
              required
            />
            {touched.age && errors.age}
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
