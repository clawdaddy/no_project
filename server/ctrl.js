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
    constructor(name){
        this.name=name;
        this.fav=[];
    }
}
function obtainFav(req){
    
}
function addName(req){
    const {name} = req.body;
    let nameCount = 0;
    let indexNumber = 0;
    favorites.forEach((obj,i)=>{
        obj.name===name
        ? (nameCount += 1,
            indexNumber = i)
        :null
        }
    
    )
    if (nameCount>=1){
        return favorites[indexNumber];
        console.log(favorites);
    }
    else {
        favorites.push(new Favorite(name))
        console.log(favorites);
        return favorites[favorites.length-1];
    }
    console.log(favorites);
}

function newFav(req){

}




module.exports = {
    theJokes :(req,res)=>
    {
        res.status(200).json(jokes)
    },
    createName : (req,res, next)=>{
        let currentUser = addName(req).name;
        res.status(200).send({favorites,currentUser})
    },
    getFav: (req,res)=>{
        res.status(200).json()
    },

    updateJokes: (req,res)=>{

    }
    

    
}