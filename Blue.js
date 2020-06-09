class Blue{
    constructor(x,y,width,height){
        var options = {
            restitution : 1.0,
            friction : 1.0,
            density : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
    }
    display(){
        fill('yellow');
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
            //console.log(this.body.speed);
            if(this.body.speed < 3){
             super.display();
            }
            else{
              World.remove(world, this.body);
              push();
              this.Visiblity = this.Visiblity - 5;
              tint(255,this.Visiblity);
              image(this.image, this.body.position.x, this.body.position.y, 50, 50);
              pop();
            }
        }
            score(){
            if(this.Visiblity <  0 && this.Visiblity > -1005){
              score ++
            
          }
         
         
         
         }
    
}