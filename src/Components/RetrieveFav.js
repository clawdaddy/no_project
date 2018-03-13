import React, {Component} from 'react';
import GetJoke from './GetJoke';

export default class RetrieveFav extends Component{
    constructor(){
        super();
        this.state={
            name:"",
        }

    }
    handleChange(name){
        this.setState({
            name:name,
        })
    }
    render(){
        const {jokes,getFavFn,favorites} = this.props;
        console.log(favorites, jokes);
        let sFavorites = favorites.fav.map((id)=>id+"");
        let sJokes = jokes.map((joke)=>joke.id + "");
        let favJokes = sJokes.filter((joke)=>{
            return sFavorites.indexOf(joke.id)>-1
            }
        )

        return (
            <div>
            <input type = "text" onChange ={(e)=>
                this.handleChange(e.target.value)}></input>
            <button onClick={()=>
                getFavFn(this.state.name)}>Get Favorites!</button>
            
            {favJokes.map((joke,i)=>
                    {
                    // <input type = "text" onChange ={(e)=>
                    //     this.handleChange(e.target.value)}></input>
                    // <button onClick={()=>
                    //     getFavFn(this.state.name)}>Get Favorites!</button>
                    <GetJoke jokes={jokes}
                        currentId={joke.id}
                    />
                    }
                )

            }
            </div>  
        )
    }     
}
