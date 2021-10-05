import React from 'react';
import Item from './item';
import styled from 'styled-components';



const data = [
    {
        "title":"Grow Together",
        "desc":"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
        "img": "img/illustration-grow-together.svg"
    },
    {
        "title":"Flowing Conversations",
        "desc":"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        "img": "img/illustration-flowing-conversation.svg"
    },
    {
        "title":"Your Users",
        "desc":"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        "img": "img/illustration-your-users.svg"
    }
];

const StyledList = styled.ul`
    padding: 120px 70px;
`

export default function ItemList() {
    return (
        <StyledList>
            {
                data.map(item => <Item data={item}/>)
            }
        </StyledList>
    )
}
