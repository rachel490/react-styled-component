import React from 'react';
import Item from './item';
import growTogetherImage from '../static/images/illustration-grow-together.svg';
import flowingConversationImage from '../static/images/illustration-flowing-conversation.svg';
import yourUsersImage from '../static/images/illustration-your-users.svg';


const data = [
    {
        "title":"Grow Together",
        "desc":"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
        "img":`${growTogetherImage}`
    },
    {
        "title":"Flowing Conversations",
        "desc":"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        "img":`${flowingConversationImage}`
    },
    {
        "title":"Your Users",
        "desc":"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        "img":`${yourUsersImage}`
    }
];

export default function ItemList() {
    return (
        <ul>
            {
                data.map(item => <Item data={item}/>)
            }
        </ul>
    )
}
