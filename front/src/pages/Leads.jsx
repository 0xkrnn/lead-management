import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Model from '../components/Model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import EditLeadModels from '../components/EditLeadModel';

function Leads() {

    const [openModel, setOpenModel] = useState(false);
    const [editLeadModel, setEditModel] = useState(false);

    const [allLeads, setAllLeads] = useState("");
    const [defaultVal,setDefaultVal] = useState([])

    const handleLeadEdit =  (lead) => {
        setEditModel(true);
        setDefaultVal(lead)
    }

    const fetchData = async () => {
        const result = await fetch("http://127.0.0.1:3500/leads", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const data = await result.json();
        setAllLeads(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Container>
            <Sidebar />
            <div>
                <div className='lead-head flex space-around'>
                    <h1>All Leads</h1>
                    <button className='button' onClick={() => setOpenModel(true)}> Add new Lead</button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Organization</th>
                            <th>Date of Creation</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody >
                        {allLeads
                            ? allLeads.map((lead, index) => {
                                return (
                                    <tr key={lead._id}>
                                        <td>{index + 1}</td>
                                        <td> {lead.name} </td>
                                        <td> {lead.email}</td>
                                        <td> {lead.status} </td>
                                        <td>{lead.organization}</td>
                                        <td> {lead.date_of_creation} </td>
                                        <td className='edit' onClick={() => handleLeadEdit(lead)}><FontAwesomeIcon icon={faPenToSquare} /></td>
                                    </tr>
                                )
                            })
                            : <tr> No data </tr>
                        }
                    </tbody>
                </table>

                <div>
                    <Model open={{ openModel, setOpenModel,fetchData }} />
                </div>

                <div>
                    <EditLeadModels open={{editLeadModel,setEditModel,defaultVal,fetchData}} />
                </div>

            </div >
        </Container >
    );
}

const Container = styled.div`
    display : grid;
    grid-template-columns: 1fr 4fr;

    .table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 80%;
        margin: 0% auto;
        border: 1px solid #ddd;

        .edit{
            cursor: pointer;
        }

    }

    .table td, .table th {
        border: 1px solid #ddd;
        padding: 20px;
        height: max-content;
    }

    .table tr:nth-child(even){background-color: #313133;}

    .table tr:hover {background-color: #494b4d;}

    .table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #101111;
        color: white;
    }    

`

export default Leads;