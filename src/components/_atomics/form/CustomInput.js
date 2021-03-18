export const CustomInput = ({ fieldType = 'text', ValidationMessage = '', ...others }) => {
    return (
        <div className="form-group">
            <label htmlFor={others.name}>
                {others.label || 'Email address'} {others.required && '*'}
                <input type={fieldType} className={classes.join(' ')} {...others} />
            </label>
            {ValidationMessage && others.touched && others.errors.email && <ValidationMessage {...others} />}
        </div>
    );
};
