import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { Bar } from 'react-chartjs-2';

function DashBoard(props) {

    const [res, setRes] = useState([])

    const fetchData = async () => {
        const result = await fetch("http://localhost:3500/leads")
        const data = await result.json()
        setRes(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(res);

    const total = res.length;
    const pending = res.filter(user => user.status == "pending")
    const success = res.filter(user => user.status == "success")
    const rejected = res.filter(user => user.status == "rejected")


    return (
        <Container>
            <Sidebar />
            <div className='graph-one flex column center space-around'>
                <div className='cards flex row f-start'>
                    <Cards datas={{ title: "Total Leads", total }} />
                    <Cards datas={{ title: "Pending", total: pending.length }} />
                    <Cards datas={{ title: "Success", total: success.length }} />
                    <Cards datas={{ title: "Rejected", total: rejected.length }} />
                </div>
                <div>

                </div>
            </div>
        </Container>
    );
}


const Container = styled.div`
    
    display : grid;
    grid-template-columns: 1fr 3fr;

    .graph-one{
        border: 1px solid red;
        
        
    .cards{
        gap: 25px;
    }
}
    .graph-two{
        border: 1px solid red;
    }

`

export default DashBoard;