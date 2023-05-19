import { useState } from 'react';
import PropTypes from 'prop-types';
export default function Textform(props) {
    const [text, settext] = useState("");
    const handleupclick=()=>
    {
        console.log("upper case was clicked" + text)
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const handledownclick=()=>
    {
        console.log("lower case was clicked" + text)
        let newtext=text.toLowerCase();
        settext(newtext);
    }
    const handleOnChange=(event)=>
    {
        settext(event.target.value);
    }
    const [myStyle, setmyStyle] = useState
    (
        {
            color :'black',
            backgroundColor : 'white',
        }
    );
    const [btntext, setBtnText] = useState("Enable Dark Mode")
    const toggle=()=>
    {
        if (myStyle.color === 'black')
        {
         setmyStyle (
         {
            color :'white',
            backgroundColor : 'black',
            border : '2px solid white'
         })
         setBtnText("Enable Light Mode")
        }
        else
        {
            setmyStyle ( 
         {
            color :'black',
            backgroundColor : 'white'
         }   )
         setBtnText("Enable Dark Mode")
        }
    }
  return (
    <div className = "container" >
        <form>
        <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="3"style = {myStyle}></textarea>
</div>
</form>
    <button className= "btn btn-primary mx-2 " onClick={handleupclick} >Convert to Uppercase </button>
    <button className= "btn btn-primary mx-2" onClick={handledownclick}>Convert to Lowercase </button>
    <button className= "btn btn-primary" onClick={toggle}style = {myStyle}> {btntext} </button>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <b></b>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        {text}
    </div>
    </div>
  )
}
Textform.propTypes = {
    label:PropTypes.string.isRequired,
    text:PropTypes.string
}
Textform.defaultProps = {
    label:'',
    text:''
}