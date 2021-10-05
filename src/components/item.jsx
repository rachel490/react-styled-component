import React from 'react';
import styled from 'styled-components';


const StyledItem = styled.li`
    display: flex;
    flex-direction: ${(props) => props.reverse === "true" ? "row-reverse" : "row" };
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 15px rgba(0,0,0,.05);
    border-radius : 15px;
    margin-bottom: 50px;
    padding: 50px 20px 50px 120px;
    

    div {
        width: 500px;
        line-height: 1.4rem;
    }

    img {
        height: 330px;
    }

    h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }

    p{
        color: rgba(0,0,0,.4);
    }
`


export default function Item(props) {
    const {title,desc,img,reverse} = props.data;
    return (
        <StyledItem reverse={reverse}>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <img src={img} alt={title} />
        </StyledItem>
    )
}

