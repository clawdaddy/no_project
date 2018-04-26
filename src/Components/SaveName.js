import React, {Component} from 'react';


export default class SaveName extends Component{
    constructor(){
        super();
        this.state=(
            {
            name:"",
            favJoke:0,
            }
        )
    }
    handleChange(name){
        this.setState({
            name:name,
        })
    }
    handleClick(){
        const {saveNameFn}=this.props;
        saveNameFn(this.state.name);

    }
    render(){
        return (
            <div>
                <input type="text" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button onClick={()=>this.handleClick()}>Login!</button>
            </div>
        )
    }
}