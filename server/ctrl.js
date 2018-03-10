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
module.exports = {
    theJokes :(req,res)=>
    {
        res.status(200).json(jokes)
    },
    

    
}