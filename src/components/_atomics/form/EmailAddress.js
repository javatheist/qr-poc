
export const emailValidator = (value) => (
  new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(value) ? "" : "Please enter a valid email."
);

// function EmailField({ initialValues, validate }) {

const EmailField = props => {

    const classes = ["form-control"];

    if (props.touched && !props.valid) {
        classes.push('control-error');
    }

    return (
        <div className="form-group">
            <label htmlFor="email">
                {props.label || 'Email address'} {props.required && '*'}
                <input type="email" className={classes.join(' ')} {...props} />
            </label>
            {props.touched && props.errors.email}
        </div>
    );
}

export default EmailField;
