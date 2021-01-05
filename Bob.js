class Bob {

    constructor(x,y,color){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 7.8,
        }
        this.color=color;
        this.body = Bodies.circle(x,y,25,options);
        World.add(world, this.body);

        console.log(this.body);
    
    }
    
    display(){
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }
    
    }