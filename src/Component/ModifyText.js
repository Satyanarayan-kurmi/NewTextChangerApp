import React, {useState} from 'react'

const styles={
  
}

export default function ModifyText(props) {
    const convertUppercase = ()=>{
        setText(text.toUpperCase())
    }

    const convertToLower = ()=>{ 
        setText(text.toLowerCase())
    }

    const clearText = ()=>{ 
        setText('')
    }

    const handleChange = (e)=>{
        setText(e.target.value)
    }

    const docopy = () => {
        let text = document.getElementById("Textarea");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState(''); 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="Textarea" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertUppercase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertToLower}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={docopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div  className="summary container my-3" style={{color: props.mode==='dark'?'white':'#042743', border:'3px solid #91eb91',
    borderRadius:'5px',
    padding:'5px 10px'}}>
            <h2>Text summary</h2>
            <p><strong >Word and Character : </strong>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p><strong >Required Time to read : </strong> {0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
            <h2>Preview</h2>

            <p >{text.length>0?text:"Enter text to see preview...!"}</p>
        </div>
        </>
    )
}