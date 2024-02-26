import React from 'react';
import styled from 'styled-components';
import SidebarData from './SidebarData';
import { NavLink } from "react-router-dom"

function Sidebar() {
    return (
        <Container>
            <ul className='list flex column'>
                {SidebarData.map(item => {
                    return (
                        <li key={item.title} className='flex row center'>
                            {item.icon}
                            <NavLink to={item.link}>  {item.title} </NavLink>
                        </li>
                    )
                })}
            </ul>
        </Container>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    height: 100vh;
    min-width: 250px;
    background-color: #18191a;
    .list{
        list-style-type: none;
        gap: 5px;
        padding: 0;
        width: 100%;
        margin-top: 100px;
        cursor: pointer;
        li{
            padding: 15px 0px;
            width: 100%;
            gap: 30px;
            svg{
                margin-left: 50px;
            }
            a{
                text-decoration: none;
                color: #f4f4f6;   
            }     
        }
        li:hover{
            background-color: #0a0611;
        }

    }
`

export default Sidebar;