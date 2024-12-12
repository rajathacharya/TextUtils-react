import React, {useState} from 'react'

export default function About() {

    const [text, setText] = useState("Dark")
    const [myStyle, setmyStyle] = useState({
        color: "black",
        backgroundColor: 'white'
    })

    let DarkMode = () => {
        if(text === "Dark"){
            setText("Light")
            setmyStyle({
                color: "white",
                backgroundColor: 'black',
                border: '1px solid white'
            })
        } else {
            setText("Dark")
            setmyStyle({
                color: "black",
                backgroundColor: 'white'
            })
        }
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils is a free, open-source application designed to simplify text transformations and analysis. It allows users to convert text to uppercase, lowercase, or remove extra spaces effortlessly. The app provides real-time word and character counts, making it ideal for quick text evaluations. Built with React.js, it offers a seamless and interactive user experience. Users can access it anytime via its live demo, ensuring convenience and accessibility for all.
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils is built to ensure broad browser compatibility, making it accessible on all modern web browsers like Chrome, Firefox, Safari, and Edge. Its lightweight design and responsive interface guarantee smooth performance across devices, including desktops, tablets, and smartphones. By leveraging React.js, the application maintains consistent functionality and visual appeal regardless of the browser used. This ensures users can rely on TextUtils without worrying about compatibility issues.
        </div>
        </div>
    </div>
    </div>
    </div>
    )
}
