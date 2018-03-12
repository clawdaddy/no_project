import React, {Component} from 'react';


export default class SaveFav extends Component{
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
        const {saveJokeFn, currentId}=this.props;
        this.setState({
            favJoke:currentId,
        })
        saveJokeFn(this.state.name,this.state.favJoke);

    }
    render(){

        return (
            <div>
                <input type="text" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button onClick={()=>this.handleClick()}>Save Favorite!</button>

            </div>
        )

    }
}