import React from "react";

const Comp_3 = (props) => {
  console.log(props);
  const deleteHandler = (index) => {
    props.deleteData(index);
  };
  return (
    <div>
      {props.userData.map((item, index) => (
        <li key={index} onClick={() => deleteHandler(index)}>
          {item}
        </li>
      ))}
    </div>
  );
};

export default Comp_3;
