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
        const {id,joke}=this.props;
        console.log(id,joke);
        
        return(
        <div>
            <ul>
            <li key={id}>{joke}</li>
            </ul>
        </div>
            )
    }
}