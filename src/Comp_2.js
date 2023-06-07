import React from "react";
import { useState } from "react";

const Comp_2 = (props) => {
  

  const addHandler = () => {
   
    props.comp2Data();
  };

 

  return (
    <div>
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default Comp_2;
