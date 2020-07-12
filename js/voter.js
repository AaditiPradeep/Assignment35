class Voter{
    constructor(){}


getCount(){
    var votersCountRef = database.ref('votersCount');
    votersCountRef.on("value", function(data){
        votersCount = data.val();
    })
}

updateCount(count){
    database.ref('/').update({
        votersCount:count
    })
}

async update(name){
    var email = await database.ref('votersEmail').once("value");
  database.ref('/').update({
  votersEmail:email.val()+","+name
})
}

 async updateAnswer(ans){
    var answer = await database.ref('votersAnswer').once("value");
   database.ref('/').update({
       votersAnswer:answer.val()+","+ans
   })
}
}

