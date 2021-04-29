class Form{
    constructor(){

    }

     display(){
        var title = createElement('h2');
        title.html("Racing game");
        title.position(370,100); // x,y 

        var input = createInput("")
        input.position(370,200);

        var button = createButton("Register");
        button.position(410,240);

        var greeting = createElement('h2');
        //greeting.position()

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            greeting.html('Welcome' + name);
            greeting.position(250,300);
        });
     }
}