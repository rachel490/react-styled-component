import React from 'react';
import styled from 'styled-components';


const StyledItem = styled.li`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    border: 3px solid rgba(0,0,0,.1);
    border-radius : 15px;
    margin-bottom: 50px;
    padding: 50px 0;

    div {
        width: 400px;
        margin: 0 200px 0 50px;
    }

    img {
        height: 300px;
    }

    h2 {
        font-size: 35px;
    }


`



export default function Item(props) {
    const {title,desc,img} = props.data;
    return (
        <StyledItem>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <img src={img} alt={title} />
        </StyledItem>
    )
}
