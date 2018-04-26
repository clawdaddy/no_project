import React, {Component} from 'react';

export default class PrevJoke extends Component{
    render(){
    const  {currentId, prevJokeFn}=this.props
        return(
            <button onClick={()=>prevJokeFn(this.props.currentId)}>Previous Joke</button>

        )
    }
}