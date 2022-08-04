import React from "react"
import Header from "./Header"

// import Image from './IMAGE'
import logo from "/src/icons/Desert.jpg"


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            helpText: "help text",
            userData:"",
        }
        this.inputClick=this.inputClick.bind(this)
    }

    render() {
        return (
            <div className="name">
                <Header title="title"/>
                <h1>{this.state.helpText}</h1>
                <h2>{this.state.userData}</h2>
                <img alt='name' src={logo}/>
                <h1>{this.state.helpText}</h1>
                <input placeholder={this.state.helpText} type="text"
                       onChange={event => this.setState({userData:event.target.value})}
                       onClick={this.inputClick}
                       onMouseEnter={this.mouseOver}
                />
            </div>
        )
    }

    inputClick() {
        console.log('Cliked')
        this.setState({helpText: "yeeeeees"})
    }


    mouseOver() {
        console.log('Mouse Over')
    }
}


export default App