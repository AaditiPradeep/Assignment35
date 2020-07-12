class Game {
    constructor(){

    }

    getState(){
      var gSRef = database.ref('gameState');
      gSRef.on("value", function(data){
         gameState = data.val();
      }) 
    }


start(){
    if(gameState===0){
        voter = new Voter();
        voter.getCount();
        form = new Form();
        form.display();
    }
}
}