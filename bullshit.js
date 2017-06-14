

// --------------DO NOT TOUCH, THIS SHIT WORKS-----------------
function Square(x,scroll) {
  this.x= 6.5;
  this.y = scroll;

  this.draw = function (){
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(6.5,scroll,60,60);
  };

  this.update = function (){
    function animateSquare(){
      requestAnimationFrame(animateSquare);
      ctx.clearRect(0,0,innerWidth,innerHeight);
      ctx.fillRect(6.5,scroll,60,60);
      scroll += scrollDX;
      if (scroll >= 450){
        scroll = -100;
      }
    }
    animateSquare();
  };
}
// -------------------------------------------

function Circle(x,y) {
  this.x= 36;
  this.y = scroll;

  this.draw = function (){
    ctx.fillStyle = 'maroon';
    ctx.beginPath();
    ctx.arc(x ,scroll ,30 ,0 , Math.PI * 2 ,false);
    ctx.fill();
  };
  this.update = function (){

    function animateCircle(){
      requestAnimationFrame(animateCircle);

      ctx.clearRect(0,0,innerWidth,innerHeight);

      ctx.beginPath();

      ctx.arc(x,scroll,30,0, Math.PI * 2 ,false);

      ctx.fill();
      scroll += scrollDX;

      if (scroll >= 450){
        scroll = -100;
      }
    }

    animateCircle();
  };
}
// -------------------------------


var circle1 = new Circle(36, scroll,30,0, Math.PI * 2,false);
circle1.draw();
circle1.update();

var squ = new Square(6.5, scroll, 60, 60);
squ.draw();
squ.update();



var shapesArray = [];
for (var  i = 0;  i < 100; i++){
  shapesArray.push(new Circle (36, scroll,30,0, Math.PI * 2,false));
  shapesArray.push(new Square(6.5,scroll,60,60));
}


for (var i = 0; i < shapesArray.length; i++){

   scroll += 1;
  shapesArray[i].update();
}
