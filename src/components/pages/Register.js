import React, { useEffect } from 'react';
import Form from "../_atomics/form";
import {TextInput} from "../_atomics/form/text";
import {isEqualValidator, nameValidator, requiredValidator} from "../_atomics/form/validations";
import {emailValidator} from "../_atomics/form/EmailAddress";

function Register({ history }) {
    /*
    useEffect(() => {
        // redirect to home if already logged in
        if (userService.isLoggedIn) {
            history.push('/');
        }        
    }, [history]);
    */

    return (
        <div className="col-md-6 offset-md-3 mt-5 text-center">
            <div className="card">
                <h4 className="card-header">Accenture - Register</h4>
                <div className="card-body">
                    <Form onSubmit={data => console.log(data)}>
                        <TextInput
                            name="first_name"
                            validators={[requiredValidator, nameValidator]}
                            placeholder="John"
                            label="First Name"
                        />
                        <TextInput
                            name="last_name"
                            validators={[requiredValidator, nameValidator]}
                            placeholder="Smith"
                            label="Last Name"
                        />
                        <TextInput
                            name="email"
                            validators={[requiredValidator, emailValidator]}
                            placeholder="eine.musterperson@domain.at"
                            label="Email"
                        />
                        <TextInput
                            name="password"
                            type="password"
                            validators={[requiredValidator]}
                            placeholder="****"
                            label="Password"
                        />
                        <TextInput
                            name="password_confirmation"
                            type="password"
                            validators={[requiredValidator, isEqualValidator('password')]}
                            placeholder="****"
                            label="Password Confirmation"
                        />
                        <TextInput
                            name="acquisition"
                            placeholder="Radio, Social Media..."
                            label="How did you hear about us?"
                        />

                        <button className="submit-btn" type="submit">
                            Register!
                        </button>
                        <button className="submit-btn danger" type="reset">
                            Reset
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export { Register };
