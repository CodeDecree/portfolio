let myFont;

function preload() {
  // Load the Poppins font
  myFont = loadFont('Fonts/Roboto-Regular.ttf');
}

class Button extends Box {

    constructor(x, y, w, h,buttonText) {
        super(x, y, w, h);
        this.buttonText = buttonText;
    }   

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(200)
        noStroke()
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        textFont(myFont);
        textSize(18);
        textAlign(CENTER, CENTER);
        fill(0);
        noStroke();
        text(this.buttonText, 0, 0);
        pop();
    }
}