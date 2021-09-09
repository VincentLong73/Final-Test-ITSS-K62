import { exp } from 'prelude-ls'
import React, {useState} from 'react'

function Input({onAdd}){
    
    const [text, setText] = React.useState('')
    const handleClickCheckBox = e => setText(e.target.value)
    const handleKeyDown = e =>{
        if(e.keyCode === 13){
            onAdd(text)
            setText('')
        }
    }

    return (
        <div className="panel-block">
            <input
            class = "input"
            type = "text"
            placeholder="Enter to add"
            value={text}
            onChange = {handleClickCheckBox}
            onKeyDown = {handleKeyDown}/>

        </div>
    )
}

export default Input