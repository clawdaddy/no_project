import React, {Component} from 'react';
import axios from 'axios';
import NextJoke from "./NextJoke"
import PrevJoke from "./PrevJoke"

export default class GetJoke extends Component{
    render(){
        //rework this for jokes as an array instead of as an object
        console.log(this.props);
        const {currentId, jokes}=this.props;
        
        const {id, text}=jokes[currentId];
        console.log(currentId,jokes);
        console.log(id,text);
        
        return(
        <div>
            { <p key={currentId}>{text}</p>}
            <PrevJoke prevJokeFn = {this.props.prevJokeFn}
            currentId = {this.props.currentId}/>

        <NextJoke nextJokeFn = {this.props.nextJokeFn}
        currentId = {this.props.currentId}/>
        </div>
            )
    }
}