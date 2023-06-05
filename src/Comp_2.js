import React from "react";
import { useState } from "react";

const Comp_2 = (props) => {
  const [click, setClick] = useState([]);

  const addHandler = () => {
    setClick(props.inputData);
    props.comp2Data(click);
  };

  console.log(click);

  return (
    <div>
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default Comp_2;
