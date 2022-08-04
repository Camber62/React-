import React from "react"
import Button from "./button"

class Header extends React.Component {
    render(){
        return(
            <header>{this.props.title}

                <Button />
                <Button text="yes"/>
            </header>

        )
    }
}


export default Header