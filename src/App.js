// 1. Create an input field with a button.
// 2. When the button is clicked, the text in the input field should be added below in a list.
//  3. Whenever any list item is clicked, it should be removed from the list.
//  4. The list, input field, and button should be in separate child components.
// 5. There should be 1 parent component which calls the 3 components.

import { useState } from "react";
import Comp_1 from "./Comp_1";
import Comp_2 from "./Comp_2";
import Comp_3 from "./Comp_3";

function App() {
  const [inputData, setInputData] = useState([]);
  const [input, setInput] = useState("");

  const comp1Data = (data) => {
    setInput(data);
  };

  const comp2Data = () => {
    setInputData([...inputData, input]);
  };

  const deleteData = (idx) => {
    const newData = [...inputData];
    const del = newData.filter((item, index) => index !== idx);

    setInputData(del);
  };

  return (
    <div>
      <Comp_1 comp1Data={comp1Data} />
      <Comp_2 comp2Data={comp2Data} />
      <Comp_3 userData={inputData} deleteData={deleteData} />
    </div>
  );
}

export default App;
