import React from "react"
import Header from "./Header"
// import Image from './IMAGE'
import logo from "/src/icons/Desert.jpg"




class App extends React.Component {
    helpText = "Help text"
    render(){
        return (
            <div className="name">
                <Header title="title"/>
                <img alt='name' src={logo}/>
                <h1>{this.helpText}</h1>
                <input placeholder={this.helpText} type="text" onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
            </div>
        )
    }
    inputClick (){console.log('Cliked')}
    mouseOver (){ console.log('Mouse Over')}
}


export default App