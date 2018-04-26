import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetJoke from './Components/GetJoke';
import axios from 'axios';
import NameInsert from './Components/NameInsert'
import SaveName from './Components/SaveName'
import RetrieveFav from './Components/RetrieveFav'
//first task--get rid of id off of jokes and use the array index instead
//current Id could probably stay, and would simply indicate that index number of
//the array
class App extends Component {
  constructor(){
    super();
    this.state={
      jokes:[{
        text:"",
        id:0,
      }],
      currentId:0,
      
      favorites:[{
        name:"",
        fav:[],
      }],
      currentUser:""
    }
  this.nextJoke=this.nextJoke.bind(this);
  this.prevJoke=this.prevJoke.bind(this);
  this.saveName=this.saveName.bind(this);
  
  
  }
  componentDidMount(){
    axios.get('http://localhost:4020/api/joke').then((res)=>
    {
    this.setState({
        jokes:res.data,
        })
      }
    )
  }
  // getFav(name){
  //   axios.get(`http://localhost:4020/api/fav/`, {name}).then((res)=>
  // {this.setState({
  //   favorites:res.favorites,
  //       }
  //     )
  //     console.log(res.favorites)
  //   }
    
  // )
  // console.log(this.state.favorites);
  // }
  
  
  saveName(name){
    axios.post(`http://localhost:4020/api/name`,{name}
    ).then(result=>
      {
        alert(`signed in as ${result.data.currentUser}`);
        this.setState({favorites:result.data.favorites,
        currentUser:result.data.currentUser});
      }
    )
    
  }
  // saveJoke(name,currentId){
  //   axios.put(`http://localhost:4020/api/fav/`, {name,currentId}
  //   ).then(result=>
  //     {
  //       alert("Joke saved");
  //       console.log(result);
  //     }
  //   )
  // }
  
  
  nextJoke(id){
    //rework this function for an array
    let number=id+1;
    if (number===this.state.jokes.length){
      null
    }
    else{
    this.setState({
      currentId:number,
    })
  }
  }
  
  prevJoke(id){
    //rework this function for an array
    let number=id-1;
    if (number===-1){
      null
    }
    else {
      this.setState({
        currentId:number
      })
    }
  }

  
  
  render() {
    //rework all of this for jokes as an array instead of as an object
    const {currentId, jokes, favorites}=this.state;
    console.log(currentId,jokes, favorites);
    return (
      <div className="App">
        
        <div>
        <SaveName 
        currentId={currentId}
        saveNameFn={this.saveName}/>
        <GetJoke 
          currentId={currentId}
          
          jokes={jokes}
          nextJokeFn={this.nextJoke}
          prevJokeFn={this.prevJoke}
        />
        
        <NameInsert 
        currentId={currentId}
        
        jokes={jokes}
        nextJokeFn={this.nextJoke}
        prevJokeFn={this.prevJokeFn}
        />
        
        {/* <RetrieveFav getFavFn = {this.getFav}
        jokes = {jokes}
        favorites = {favorites}
        /> */}
          </div>  
      </div>
    );
  }
}

export default App;
