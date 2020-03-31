//Creates the Sticks.js class.
class Sticks{
    //Creates the constructor.
    constructor(x,y,width,height,colour){
        //Creates the options for the stick.
        var options = {
            //Makes the stick static.
            isStatic: true,
            restitution:0,
            density:9
        }
        //Creates the body.
        this.body = Bodies.rectangle(x,y,width,height,colour,options);
        this.width = width;
        this.height = height;
        this.colour = colour;
        //Adds the body to the World.
        World.add(world,this.body);
    }
    //Displays the body.
    display(){  
        //Creates the variable to store the position of the body.
        var pos = this.body.position;
        //Draws the rectangle in the centre of the body.
        rectMode(CENTER);
        //Fills white colour to the rectangle.
        fill(this.colour);
        //Creates the rectangle at the bosition of the body.
        rect(pos.x,pos.y,this.width,this.height);
    }
}