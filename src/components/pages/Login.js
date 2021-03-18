import React, {useEffect} from 'react';
import Form from "../_atomics/form";
import {TextInput} from "../_atomics/form/text";
import {requiredValidator} from "../_atomics/form/validations";
import {emailValidator} from "../_atomics/form/EmailAddress";

function Login({history}) {
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
                <h4 className="card-header">Accenture - Login</h4>
                <div className="card-body">
                    <Form onSubmit={data => console.log(data)}>
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
                        <button className="submit-btn" type="submit">
                            Login
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

export {Login};
