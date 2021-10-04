import React from 'react';
import styled from 'styled-components';

const SyledItem = styled.div`

`



export default function Item(props) {
    const {title,desc,img} = props.data;
    return (
        <li>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <img src={img} alt={title} />
        </li>
    )
}
