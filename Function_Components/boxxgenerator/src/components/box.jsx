import React, { useState } from "react";
import Box from "./Boxs";

const BoxGenerator = props => {

  const [state, setState] = useState({
    boxes: [],
  });

  const onClickHandler = e => {
      e.preventDefault();
      setState({
        boxes: [...state.boxes, {color: state.newColor,}],newColor: "",});
    
  };
  const onChangeColorHandler = e => {
    e.preventDefault();
    setState({...state,newColor: e.target.value});
  };

  return (
    <div>
      <h1>Add a new box!</h1>
      <input type="text" name="" onChange={onChangeColorHandler} id="" />
      <button onClick={onClickHandler}>Submit</button>

      <div>
        {state.boxes.map((box) => (

          <Box
            bgColor={box.color}
          ></Box>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;