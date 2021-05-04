import React from 'react';
import CardContent from './CardContent';
import { Container } from './ComponentStyle/HomeStyle';

function Home() {

    const cardIteams = [
        {
            "cardtext":"Task List",
            "status":0
        },
        {
            "cardtext":"In Progress",
            "status":1
        },
        {
            "cardtext":"Review"
            ,"status":2
        },
        {
            "cardtext":"Done"
            ,"status":3
        }
    ];

    return (<Container>
        {cardIteams.length != 0 ? 
            cardIteams.map(data=><CardContent cardtext={data.cardtext} status={data.status} />)
            :''}
    </Container>
    )
}

export default Home;