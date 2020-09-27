import React from 'react'
import FirstSection from '../../FirstSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
    return (
        <div>
            <FirstSection {...homeObjOne} />
            <FirstSection {...homeObjTwo} />
            <FirstSection {...homeObjThree} />
            <FirstSection {...homeObjFour} />
        </div>
    )
}

export default Home;
