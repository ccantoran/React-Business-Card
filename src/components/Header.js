import React from "react"
import Headshot from "../headshot.png"

export default function Header(){
   return (
    <main>
        <img src={Headshot}></img>
        <div className="words">
            <h1>Catherine Cantoran</h1>
            <h2>Software Engineer</h2>
            <h3>catherinecantoran.com</h3>
        </div>
        <div className="buttons">
            <button><a href="https://www.linkedin.com/in/catherine-cantoran/">LinkedIn</a></button>
            <button><a href="https://www.catherinecantoran.com/"></a>Website</button>
        </div>
        
    </main>
   )
} 