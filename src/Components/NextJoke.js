import React, { Component } from "react";

export default class NextJoke extends Component{

render(){
const {nextJokeFn,currentId}=this.props;
    return(
        <button onClick={()=>nextJokeFn(currentId)}>Next Joke</button>
    )
}
    


}