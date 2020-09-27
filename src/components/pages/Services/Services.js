import React from 'react';
import FirstSection from '../../FirstSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <FirstSection {...homeObjOne} />
      <FirstSection {...homeObjThree} />
    </>
  );
}

export default Services;