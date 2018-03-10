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
        id:0,
        jokes:"This is a joke"
      }],
      name:""
    }
  //  this.state=this.state.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:4020/api/joke').then((res)=>
    {console.log(res)
    this.setState({
        jokes:res.data,
      }),
      console.log(this.state.jokes)}
    )
    
  }
  

  render() {
    console.log(this.state.jokes);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chuck Norris Jokes</h1>
        </header>
        
        <div className="oneJoke">
          <GetJoke jokes={this.state.jokes}/>
          
        </div>
        
        
        
        
      </div>
    );
  }
}

export default App;
