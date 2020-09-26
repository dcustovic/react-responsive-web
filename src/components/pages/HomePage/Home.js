import React from 'react'
import FirstSection from '../../FirstSection'
import { homeObjOne } from './Data';

function Home() {
    return (
        <div>
            <FirstSection {...homeObjOne} />
        </div>
    )
}

export default Home;
