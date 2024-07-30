import React,{useState} from "react";

export default function Textform(props) {
    const Handleupcase = ()=>{
     let newtext = text.toUpperCase();
     settext(newtext);
    props.showAlert("converted to uppercase!", "success");
    }
   const Handleonchange = (event)=>{
    settext(event.target.value)
   }
   const Handlelwcase =()=>{
     let lwtext = text.toLowerCase();
     settext(lwtext);
      props.showAlert("converted to lowrercase!", "success");
   }
   const Handlelclear = ()=>{
  let  cleartext = " ";
   settext(cleartext);
    props.showAlert("all texts cleared", "success");
   }
   const Handlelcopy = ()=>{
    let text = document.getElementById("mybox");
    
    navigator.clipboard.writeText(text.value);
     props.showAlert("Text copied", "success");
   }
    const [text, settext] = useState(" ");
  return (
    <>
      <div className="mb-3 my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <textarea className="form-control" id="mybox" onChange={Handleonchange} value={text} style={{backgroundColor:props.mode === 'dark'?'#042743':'white', color:props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-1 " onClick={Handleupcase} >Convert To Uppercase</button>
        <button className="btn btn-primary my-3 mx-1 " onClick={Handlelwcase} >Convert To Lowercase</button>
        <button className="btn btn-primary my-3 mx-1 " onClick={Handlelclear} >Clear All</button>
        <button className="btn btn-primary my-3 mx-1 " onClick={Handlelcopy} >Copy text</button>
      </div>
      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words ,{text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes Read </p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "enter something to preview"}</p>
      </div>
    </>
  );

}
