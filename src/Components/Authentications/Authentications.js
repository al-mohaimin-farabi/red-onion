import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import initializeFirebase from '../../Firebase/firebase';
import useFirebase from '../../Hooks/useFirebase'
import Background from '../../images/bannerbackground2.png';
import Logo from '../../images/logo2.png';
import './Authentications.scss';

initializeFirebase();

const Authentications = () => {
    const [newUser, setNewUser] = useState(false);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const { createUser, login } = useFirebase();

    const history = useHistory();

    useEffect(() => {
        if (window.location.pathname === '/login') setNewUser(false)
        else if (window.location.pathname === '/signup') setNewUser(true)
    }, [window.location.pathname])

    const onsubmit = data => {
        setLoading(true);
        const { name, email, password } = data;
        reset();
        if (newUser) {
            createUser(name, email, password)
                .then(() => {
                    setLoading(false);
                    history.push('/');
                })
                .catch(err => {
                    setLoading(false);
                    alert(err.message);
                })
        }
        else {
            console.log('login')
            login(email, password)
                .then(() => {
                    setLoading(false);
                    history.push('/');
                })
                .catch(err => {
                    setLoading(false);
                    alert(err.message);
                })
        }
    };
    return (
        <div style={{ backgroundImage: `url(${Background})` }} className="form-container" >
            <img src={Logo} alt="logo" className="form-container__logo" />
            <form onSubmit={handleSubmit(onsubmit)} className="form-container__form">
                {
                    newUser && <>
                        <input
                            placeholder="Name"
                            style={{ borderColor: `${errors.name ? 'red' : ''}` }}
                            {...register(
                                'name',
                                {
                                    pattern: { value: /^[A-Za-z\s]+$/, message: 'Invalid Name' },
                                    required: "Name is required"
                                },
                            )}
                        />
                        <p className="form-container__form__error">{errors.name?.message}&nbsp;</p>
                    </>
                }
                <input
                    placeholder="Email"
                    style={{ borderColor: `${errors.email ? 'red' : ''}` }}
                    {...register(
                        'email',
                        {
                            pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email' },
                            required: "Email is required"
                        },
                    )}
                />
                <p className="form-container__form__error">{errors.email?.message}&nbsp;</p>
                <input
                    type="password"
                    placeholder="Password"
                    style={{ borderColor: `${errors.password ? 'red' : ''}` }}
                    {...register(
                        'password',
                        {
                            minLength: { value: 8, message: "Password shoud be atleast 8 charecters long" },
                            required: "Password is required"
                        },
                    )}
                />
                <p className="form-container__form__error">{errors.password?.message}&nbsp;</p>
                {
                    newUser && <>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            style={{ borderColor: `${errors.confirmPassword ? 'red' : ''}` }}
                            {...register(
                                'confirmPassword',
                                {
                                    validate: value => value === watch('password') || 'Password did not match',
                                    required: "Confirm Password is required"
                                },
                            )}
                        />
                        <p className="form-container__form__error">{errors.confirmPassword?.message}&nbsp;</p>
                    </>
                }

                <button type="submit">
                    {!loading ? (newUser ? 'Sign up' : 'Sign in') : 'Loading...'}
                </button>

                <p
                    onClick={() => newUser ? history.push('/login') : history.push('/signup')}
                    className="form-container__toggle"
                >
                    {newUser ? 'Already have an account' : 'Create new account'}
                </p>

            </form>
        </div >
    );
};

export default Authentications;