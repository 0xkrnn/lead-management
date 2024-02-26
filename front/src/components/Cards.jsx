import React from 'react';
import { styled } from 'styled-components'

function Cards({datas}) {

   const {title,total} = datas

    return (
        <Container className='flex center column'>
            <h3>{title}</h3>
            <h1>{total}</h1>
        </Container>
    );
}

const Container = styled.div`
    width: 160px;
    height: 160px;
    background-color:#404BFF ;
    justify-content: center;
`


export default Cards;