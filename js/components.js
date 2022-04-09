class Player {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.floor = y;
        this.maxJump = 0;
        this.wasItUp = false;
        this.speedY = 0;
        this.ctx = gamePlane.context;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
        if(this.y - this.speedY >= this.maxJump && !this.wasItUp){
        this.y -= this.speedY;
        }else{
            this.wasItUp = true;
            if(this.floor <= this.y){
                console.log(this.floor, this.y);
                this.wasItUp = false;
                this.speedY = 0;
            }else{
                this.y += this.speedY;
            }
            
        }
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    changePos(key){
        if(['ArrowUp', ' '].includes(key)){
            this.speedY = 2
            console.log("CHECKING" + key)
        }
    }
}
class Rock {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
        this.ctx = gamePlane.context;
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
        console.log("PEFRESH");
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.x -= 2;
    }
}
