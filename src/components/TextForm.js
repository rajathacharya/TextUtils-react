import React, {useState} from 'react'

export default function TextForm(props) {

    // Convert to Uppercase
    const handleUpClick = () => {
        let newtext  = text.toUpperCase();
        if(newtext === "") {
            alert("Enter the text");
        }else {
            setText(newtext);
        }
    }

    // Convert to LowerCase
    const handleLowClick = () => {
        let newtext  = text.toLowerCase();
        if(newtext === "") {
            alert("Enter the text");
        }else {
            setText(newtext);
        }
        
    }

    // Delete sentence
    const handleDelClick = () => {
        let newtext  = "";
        setText(newtext);
    }

    // Backspace code
    const backSpace = () => {
       let word = text.split("");
       if(word.length > 0){
        word.pop();
       }
       setText(word.join(""));
    }

    // Copy
    const handelCopy = () => {
        let copytext = document.getElementById("myBox")
        copytext.select();
        navigator.clipboard.writeText(copytext.value)
    }

    //Remove extra spaces
    const handelExtrapaces = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
    }
    
    const handleOnchange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className={`container text-${props.textcolor === 'light'? 'dark' : 'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.textcolor === 'light'? 'dark' : 'light'}`}  value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#3a3c3f'}} id="myBox"  placeholder="Enter the Text" rows="8"></textarea>
            </div>
            <button className="btn btn-secondary " onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-secondary mx-3" onClick={handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-secondary m-2" onClick={handleDelClick} >Delete</button>
            <button className="btn btn-secondary m-2" onClick={backSpace} >BackSpace</button>
            <button className="btn btn-secondary m-2" onClick={handelCopy} >Copy</button>
            <button className="btn btn-secondary m-2" onClick={handelExtrapaces} >Remove extra Spaces</button>
        </div>
        <div className={`container my-3 text-${props.textcolor === 'light'? 'dark' : 'light'} `}>
            <h2>Your Text Contains</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )

}
