import React, {Component} from 'react';
import GetJoke from './GetJoke';

export default class NameInsert extends Component{
    constructor(){
        super();
        this.state={
            names:[
                {name:"",
                favs:[],
            }
            
            ],
            nameToInsert:"",
            insertedName:"",
        }
    }

    handleInput(name){
       this.setState({nameToInsert:name})
    }
    
    insertName(){
        const {currentId,jokes} = this.props;
        let text= jokes[currentId].text.split(" ")
        console.log(text)
        let newText = text.map((word)=> word==="Chuck" ||word==="Chuck," || word==="Chuck."
        ? word=this.state.nameToInsert 
        :word=word
    )
    console.log(newText);
    let editedText = "";
    newText.map((word)=>editedText+=` ${word}`)
    console.log(editedText);
    // this.setState({insertedName:insertedName})
    

    }
    

    render(){
        const {currentId,jokes,nextJokeFn,prevJokeFn,key} = this.props;
        return (
            <div>
                <input onChange ={(e)=>this.handleInput(e.target.value)}>
                </input>
                <button onClick={()=>this.insertName()}>Insert Name!</button>
                <p>{this.state.insertedName}</p>

            </div>

        )
    }
}