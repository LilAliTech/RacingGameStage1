class Game{
    constructor(){

    }
    // to get state of the game - READ data

    getstate(){
        var gameStateRef = database.ref('gameState');
        // anonymous functions
        gameStateRef.on("value",function(data){
            gameState = data.val(); // gameState variable - use '=' sign
        })
    }

    // To update the state of the game - WRITE data

    update(state){
        database.ref('/').update({
            gameState : state   // database field gameState - use ':' 
        }) ;
    }


    start(){
        if(gameState === 0){
            player=new Player();
            form = new Form();
            form.display();
            player.getCount();
        }
    }
}