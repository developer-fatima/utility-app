import { useState } from "react"

export const TextUtility = () => {
    const [text, setText] = useState("")
    const [showText, setShowText] = useState("")
    const handleInput = (e) => {
        setText(e.target.value)
    }
    const toUppercase = () => {
        setShowText(text.toUpperCase());
    }

    const toLowercase = () => {
        setShowText(text.toLowerCase());
    }
    const toCapitalize = () => {
        const toCapital = text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setShowText(toCapital);
    }
    return (
        <div className="container">
            <h1>Text Utility App</h1>
            <input type="text" placeholder="Enter Text Here" onChange={handleInput}></input>
            <div>
                <button onClick={toUppercase}>Upper Case</button>
                <button onClick={toLowercase}>Lower Case</button>
                <button onClick={toCapitalize}>Capitilize</button>
            </div>
            <h2>{showText}</h2>
        </div>

    )
}