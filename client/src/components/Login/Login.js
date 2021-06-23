import React, { useState } from "react";
import Auth from '../../utils/auths';

const Login = () => {
    // functionality
    return (
        <main>
            <form>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name='email'
                        id='email'
                    // value={formState.email}
                    // onChange={}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name='password'
                        id='password'
                    // value={formState.password}
                    // onChange={}
                    />
                </div>


                <button type="submit" className="btn">
                    Sign in
                </button>

            </form>
            {/* {error && <div>Sign up failed</div>} */}
        </main>
    );
};


export default Login;