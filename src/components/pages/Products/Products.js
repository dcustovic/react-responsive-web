  
import React from 'react';
import FirstSection from '../../FirstSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      <FirstSection {...homeObjOne} />
      <FirstSection {...homeObjTwo} />
    </>
  );
}

export default Products;