import React, { useState } from "react";

const Comp_1 = (props) => {
  const inputHandler = (e) => {
    props.comp1Data(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={inputHandler} />
    </div>
  );
};

export default Comp_1;
