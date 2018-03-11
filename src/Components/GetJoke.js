import React, {Component} from 'react';
import axios from 'axios';
import NextJoke from "./NextJoke"
import PrevJoke from "./PrevJoke"
console.log(this.props);
export default class GetJoke extends Component{
    render(){
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