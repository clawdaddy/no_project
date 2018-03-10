import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetJoke from './Components/GetJoke';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      jokes:[{
        text:"",
        id:0,
      }],
      name:""
    }
  //  this.state=this.state.bind(this);
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
  

  render() {
    const {jokes}=this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chuck Norris Jokes</h1>
        </header>
        <div>
        {jokes.map(joke=>
          (<GetJoke joke={joke.text}
          id={joke.id}
          key={joke.id}
        />))}
          </div>
       
        
        
        
        
      </div>
    );
  }
}

export default App;
