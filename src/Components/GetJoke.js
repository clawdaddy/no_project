import React, {Component} from 'react';
import axios from 'axios';

export default class GetJoke extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         id:0,
    //         joke:"",
    //     }

    // }

    // chooseJoke(){

        
    // }

    render(){
        console.log(this.props.jokes)

        
        return(
        <div>
            <p>{this.props.jokes[0].joke}</p>
        </div>
            )
    }
}