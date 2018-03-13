let jokes = [
    {
        id:0,
        text:"Filming on location for Walker: \
        Texas Ranger, Chuck Norris brought a stillborn baby \
        lamb back to life by giving it a prolonged beard rub. \
        Shortly after the farm animal sprang back to life and a \
        crowd had gathered, Chuck Norris roundhouse kicked the\
         animal, breaking its neck, to remind the crew once\
          more that Chuck giveth, and the good Chuck,\
           he taketh away."
    },
    {
        id:1,
        text:"People can swim on water but Chuck Norris can swim on Land"

    }
];

let favorites = [
    {
        name:"",
        fav:[],
    }
]
class Favorite {
    constructor(name,fav){
        this.name=name;
        this.fav=fav;
    }
}
function obtainFav(req){
    
}
function addFave(req){
    
    const {currentId,name} = req.body;
    
    let newFav = [];
    
    let newFavorites = favorites.map((obj,i)=>{
        console.log(obj);
        console.log(obj.name, obj.fav)
        console.log(currentId,name)

        if (obj.name===name && obj.fav.includes(currentId+"")){
                console.log("already favorited");
                null;
            }
            else if (obj.name===name && !obj.fav.includes(currentId+"")){
                console.log("new ID");
                obj.fav.push(currentId);
            }
            else if (obj.name!==name){
                console.log("new name")
                let newName = new Favorite(name, currentId);
                favorites.push(newName);
            }
        }

    )
    console.log(favorites)
}




module.exports = {
    theJokes :(req,res)=>
    {
        res.status(200).json(jokes)
    },
    newFave : (req,res)=>{
        addFave(req);
        res.status(200).json(favorites)
    },
    getFav: (req,res)=>{
        res.status(200).json()
    }
    

    
}