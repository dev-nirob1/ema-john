import React, { useContext, useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { signIn } = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')
        setSuccess('')

        signIn(email, password)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Welcome to ema-john')
                form.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            });
    }



    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Your Email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Your Password' />
                </div>
                <p className='error-message'>{error}</p>
                <p className='success-message'>{success}</p>

                <input className='btn' type="submit" value="Login" />

                <p className='create'><small>New to ema-john? <Link to="/sign-up">Create new account</Link></small></p>
                <legend>or</legend>
                <button className='btn-google'>Continue With Google</button>
            </form>
        </div>
    );
};

export default Login;