import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { use } from "react";
function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    
    setInputText(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleExpand(){
    setExpand(() => {return expand?false:true});
  }
  return (
    <div>
      <form onClick={handleExpand}>
        {expand?<input onChange={handleChange} value={inputText.title} name="title" placeholder="Title" />:null}
        <textarea onChange={handleChange} value={inputText.content} name="content" placeholder="Take a note..." rows={expand?3:1} />
        <button type="button" onClick={() => {
        props.onAdd(inputText);
        setInputText({title: "", content: ""});
      }}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
