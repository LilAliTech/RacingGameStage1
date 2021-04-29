class Player{
    constructor(){

    }


    getCount(){
        var playerCount1 = database.ref('playerCount');
        // anonymous functions
        playerCount1.on("value",function(data){
            playerCount = data.val(); // gameState variable - use '=' sign
        })
    }

    // To update the state of the game - WRITE data

    updateCount(Count){
        database.ref('/').update({
            playerCount : Count   // database field gameState - use ':' 
        }) ;
    }

    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name : name
        });
    }


}