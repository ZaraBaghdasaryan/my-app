
import React, { Component } from 'react';
import "./SkillLevel.css";

export default class SkillLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillPercentage: props.skillPercentage,
            skillText: props.skillText  
        }
        this.skillBar = React.createRef();
    }

    render() {

        return (
            <div>
            <div className="skillText">{this.state.skillText}</div>
            <div className="skillContainer">
                <div className="skillBar" ref={this.skillBar}></div>
            </div>
            </div>
            
        )

    }

    componentDidMount(){
       console.log(this.skillBar)
       this.skillBar.current.style.width = `${this.state.skillPercentage}%`
    }
}
