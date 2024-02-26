import React, { useState } from 'react';
import img from "../assets/images/form.webp"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("")

    const [validator, setValidator] = useState("")
    const navigate = useNavigate()

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    async function onLogin() {
        if (email && pwd) {
            if (validateEmail(email)) {
                const result = await fetch("http://127.0.0.1:3500/api/user/login", {
                    method: "POST",
                    credentials: 'include',
                    redirect: 'follow',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password: pwd
                    })
                })

                if (result.status == 400) {
                    setValidator("Email does not exist ")
                } else if (result.status == 401) {
                    setValidator("Email & password doesn't match")
                }
                else {
                    setValidator("")
                    navigate("/user")
                }

            }
        }
    }


    return (
        <Container className='flex center'>
            <div className='form-bg flex space-around center'>
                <img src={img} alt="form-image" className='form-image' />
                <div>
                    <form action="" method='post' className='form flex column '>
                        <h3 className='form-head'> Login </h3>
                        <span className='error-message'>{validator}</span>
                        <section className='form-section'>
                            {/* <div className='placeholder'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <label htmlFor="username"> Email</label>
                            </div> */}
                            <input
                                type="text"
                                className='input'
                                value={email}
                                placeholder='Enter email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </section>
                        <section className='form-section'>
                            {/* <div className='placeholder flex'>
                                <FontAwesomeIcon icon={faLock} />
                                <label htmlFor="password"> Password </label>
                            </div> */}
                            <input
                                type='password'
                                className='input'
                                value={pwd}
                                placeholder='Enter password'
                                onChange={(e) => setPwd(e.target.value)}
                            />
                        </section>
                        <button type='button' className='button' onClick={onLogin}>
                            Login
                        </button>
                        <NavLink to="/register" className='indicator'>To create an account &ndash;&ndash;&gt;</NavLink>
                    </form>


                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    justify-content: center;
    background-color: #0C0016;
    .form-bg{
        background-color: white;
        width: 60%;
        height: 70vh ;
        border-radius: 50px;

        .form-image{
            height: 250px;
        }

        .form{

            gap: 20px;
            /* border: 1px solid red; */
            padding:100px ;

            .form-section{
                position: relative;
            }

            .error-message{
                color: red;
                position: relative;
                font-size: 12px;
                text-align: center;
            }


            .placeholder{
                color : black;
                position: absolute;
                bottom: 6px;
                left: 10px;
                font-size: 12px;
                gap:5px;
            }

            input{
                height: 25px;
                outline: none;
            }


            .form-head{
                color: #18191a;
                text-align: center;
            }

            .button{
                height: 30px;
            }

            .indicator{
                color: blue;
                font-size:11px;
                background-color: white;
                text-decoration: none;
                text-align: center;
            }
        }

    }
`

export default Login;