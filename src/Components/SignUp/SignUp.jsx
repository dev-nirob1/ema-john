import React, { useContext, useState } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';


const SignUp = () => {

    const [error, setError] = useState('')
    const {createUser, user} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm, name)
        form.reset()
        setError('')

        if (password !== confirm) {
            setError(`Password didn't matched`)
            return
        }
        if (password.length < 6) {
            setError(`Your password must be 6 digits or more`)
            return
        }

         createUser(email, password)
         .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
         })
         .catch(error => {
            console.log(error)
            setError(error.message)
         })


    }


    return (

        <div>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className='form-control'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Your Name' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Your Email' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Your Password' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" placeholder='Confirm Password' />
                    </div>

                    <p className='error-message'>{error}</p>

                    <input className='btn' type="submit" value="Sign Up" />

                    <p className='create'><small>Already have an account? <Link to="/login">Login</Link></small></p>
                    <legend>or</legend>
                    <button className='btn-google'>Continue With Google</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;