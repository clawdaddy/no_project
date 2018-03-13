import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetJoke from './Components/GetJoke';
import axios from 'axios';
import NameInsert from './Components/NameInsert'
import SaveFav from './Components/SaveFav'
import RetrieveFav from './Components/RetrieveFav'

class App extends Component {
  constructor(){
    super();
    this.state={
      jokes:[{
        text:"",
        id:0,
      }],
      currentId:0,
      
      favorites:{
        name:"",
        fav:[],
      }
    }
    
    
  this.nextJoke=this.nextJoke.bind(this);
  this.prevJoke=this.prevJoke.bind(this);
  this.saveJoke=this.saveJoke.bind(this);
  this.getFav=this.getFav.bind(this);
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
  getFav(name){
    axios.get(`http://localhost:4020/api/fav/`, {name}).then((res)=>
  {this.setState({
    favorites:res.favorites,
        }
      )
      console.log(res.favorites)
    }
    
  )
  console.log(this.state.favorites);
  }
  
  
  saveJoke(name, currentId){
    axios.post(`http://localhost:4020/api/fav/`, {currentId, name}
    ).then(result=>
      {
        alert("Joke saved");
        console.log(result);
      }
    )
  }
  
  
  nextJoke(id){
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
    const {currentId, jokes, favorites}=this.state;
    console.log(currentId,jokes, favorites);
    return (
      <div className="App">
        
        <div>
        {
           jokes[0] 
        ? <GetJoke 
          currentId={currentId}
          
          jokes={jokes}
          nextJokeFn={this.nextJoke}
          prevJokeFn={this.prevJoke}
        />
        :null
        }
        <NameInsert 
        currentId={currentId}
        
        jokes={jokes}
        nextJokeFn={this.nextJoke}
        prevJokeFn={this.prevJokeFn}
        />
        <SaveFav saveJokeFn={this.saveJoke}
        currentId={currentId}/>
        <RetrieveFav getFavFn = {this.getFav}
        jokes = {jokes}
        favorites = {favorites}
        />
          </div>  
      </div>
    );
  }
}

export default App;
