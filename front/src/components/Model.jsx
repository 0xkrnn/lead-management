import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Model({ open }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [organization, setOrgansization] = useState("");



    const { openModel, setOpenModel,fetchData } = open
    const naviagte = useNavigate()

    const handleNewLead = async () => {
        const newLead = {
            name,
            email,
            status,
            organization
        }

        console.log(newLead);

        const result = await fetch("http://127.0.0.1:3500/leads", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLead)
        })

        if(result.status == 201){
            fetchData()
            setOpenModel(false)
        }

    }


    if (!openModel) return null

    return (
        <Container className='overlay'>
            <form className="form flex column" action="" method='post'>

                <div className='form-head'>
                    <span>Add Lead</span>
                    <FontAwesomeIcon icon={faX} onClick={() => setOpenModel(false)} />
                </div>

                <div className="form-group flex row">
                    <label htmlFor="textinput">Name</label>
                    <div className="">
                        <input id="textinput" name="textinput" type="text" placeholder="Name here" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                </div>

                <div className="form-group flex row">
                    <label htmlFor="textinput">Email</label>
                    <div>
                        <input id="textinput" name="textinput" type="text" placeholder="Email here" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div>

                <div className="form-group flex row">
                    <label htmlFor="selectbasic">Status</label>
                    <div className="select">
                        <select id="selectbasic" name="selectbasic" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value=""></option>
                            <option value="pending">Pending</option>
                            <option value="success">Success</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>

                <div className="form-group flex row">
                    <label htmlFor="textinput">Organization</label>
                    <div>
                        <input id="textinput" name="textinput" type="text" placeholder="Company name here" value={organization} onChange={(e) => setOrgansization(e.target.value)} required />
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <button className="btn" type='button' onClick={handleNewLead} > Create </button>
                    </div>
                </div>
            </form>

        </Container>
    );
}

const Container = styled.div`

    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.2s linear;

    .form{
        padding: 10px 40px;
        width: 30%;
        gap: 20px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: #05010d;

        .form-head{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            span{
                font-weight: 600;
                font-size: 1.5rem;
                color: #61e361;
            }

            svg{
                color: red;
                font-weight: 700;
                position: relative;
                bottom: -10px;
                right: 10px;
                cursor: pointer;

            }
        }

        .form-group{
            justify-content: space-between;

            .select{
                /* width: 100%; */
                width: 193px;
                outline: none;
            }

            input{
                outline : none;
                padding: 5px;
            }

            .btn{
                /* background-color: #61e361; */
                border: none;
                outline: none;
                padding: 8px 13px;
                border-radius: 5px;
                color: white;
                background-color: transparent;
                border: 1px solid #61e361;
                cursor: pointer;
                transition: all 0.2s linear;
            }

            .btn:hover{
                color: white;
                background-color: #61e361;
                border-color:white ;
            }
        }


    }
`

export default Model;