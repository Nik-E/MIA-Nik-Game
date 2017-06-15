console.log('APP.JS ONLINE');

// $(document).ready(function(){
//   $('#game').hide();
//   $('#start-button').one('click',function (){
//       $('#start-screen').fadeOut();
//       $('#game').fadeIn();
//
//       startGame();
//   });
// });

//----------------DO NOT TOUCH, THIS SHIT WORKS--------------
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var scroll = -65;
var scrollDX = 2;

var canvasLeft = canvas.offsetLeft;
var canvasTop = canvas.offsetTop;
var elements = [];

var bonus = 1;
var score = 0;
var speed = 100;
//-----------------------------------------------------------

//---------------Beautiful, Amazing, Gold. I swear to God if you fucking touch this code.........-------------------
function MovingShapes (){
  this.shapeType = shapes[(Math.floor(Math.random()*5))];
  this.selectedShapeImg = new Image();
  this.selectedShapeImg.src = this.shapeType.type;
  this.top = this.shapeType.top + scroll;
  this.height = this.shapeType.height;
  this.left = this.shapeType.left;
  this.width = this.shapeType.width;
  this.scoreEffect = this.shapeType.scoreEffect;
  this.bonusEffect = this.shapeType.bonusEffect;
  this.speedEffect = this.shapeType.speedEffect;
}

MovingShapes.prototype.drawSelectedShape =

  function (){
var shapePicked = this.shapeType;
var myTop = this.top;
var selectedShapeImg = this.selectedShapeImg;


    function draw(ctx,selectedShapeImg){

      // console.log("non stop shit: ", shapePicked.type, myTop);

      if (!selectedShapeImg.complete){
        setTimeout(function(){
          draw(ctx,selectedShapeImg);
        },50);
        return;
      }

      ctx.drawImage(selectedShapeImg, shapePicked.left, myTop, shapePicked.width, shapePicked.height);
    }

    draw(ctx,selectedShapeImg);

};
var shapes = [
    {
     type: "triangle-PNG-Pic.png",
     width: 65,
     height: 65,
     top: 0,
     left: 5,
     scoreEffect: +2,
     bonusEffect: +0.5,
     speedEffect: +1,

   },
   {
    type: "square.png",
    width: 65,
    height: 65,
    top: 0,
    left: 4,
    scoreEffect: -1,
    bonusEffect: -0.25,
    speedEffect: -0.25,

  },
  {
   type: "circle-transparent-PNG.png",
   width: 65,
   height: 65,
   top: 0,
   left: 3.5,
   scoreEffect: +2,
   bonusEffect: +0.5,
   speedEffect: +0.5,

  },
  {
   type: "star_filled.png",
   width: 65,
   height: 65,
   top: 0,
   left: 3.5,
   scoreEffect: +3,
   bonusEffect: -2,
   speedEffect: -5,

  },
  {
   type: "120px-Gelbe_Raute.png",
   width: 65,
   height: 65,
   top: 0,
   left: 3.5,
   scoreEffect: -10,
   bonusEffect: +5,
   speedEffect: +5,

  }
  ];






function makeFirstFive() {
    setTimeout(function(){
      var shape1 = new MovingShapes();
      shape1.drawSelectedShape();
      elements.push(shape1);
    },1000);
    setTimeout(function(){
      var shape2 = new MovingShapes();
      shape2.drawSelectedShape();
      elements.push(shape2);
    },2500);
    setTimeout(function(){
      var shape3 = new MovingShapes();
      shape3.drawSelectedShape();
      elements.push(shape3);
    },4000);
    setTimeout(function(){
      var shape4 = new MovingShapes();
      shape4.drawSelectedShape();
      elements.push(shape4);
    },5500);
    setTimeout(function(){
      var shape5 = new MovingShapes();
      shape5.drawSelectedShape();
      elements.push(shape5);
    },7000);

  }

makeFirstFive();
setInterval(function(){


  setTimeout(function(){
    var shape1 = new MovingShapes();
    shape1.drawSelectedShape();
    elements.push(shape1);
    },1000);
  setTimeout(function(){
    var shape2 = new MovingShapes();
    shape2.drawSelectedShape();
    elements.push(shape2);
    },2500);
  setTimeout(function(){
    var shape3 = new MovingShapes();
    shape3.drawSelectedShape();
    elements.push(shape3);
    },4000);
  setTimeout(function(){
    var shape4 = new MovingShapes();
    shape4.drawSelectedShape();
    elements.push(shape4);
    },5500);
  setTimeout(function(){
    var shape5 = new MovingShapes();
    shape5.drawSelectedShape();
    elements.push(shape5);
    },7000);


},7500);

var elements = [];

var interval = setInterval(function() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  var updatedElements = [];

  elements.forEach(function (element) {
    element.top += scrollDX;
    element.drawSelectedShape();






    if (element.top < innerHeight) {
      updatedElements.push(element);
    }
  });

  elements = updatedElements;

}, 1000/30);

//----------------------------------


//-----------Click functionality------
 // Add event listener for `click` events.
 canvas.addEventListener('click', function(event) {
     var x = event.pageX - canvasLeft,
         y = event.pageY - canvasTop;


 // Collision detection between clicked offset and element
     elements.forEach(function(element) {
       var shapeTop = element.top;
       var shapeHeight = element.height;
       var shapeLeft = element.left;
       var shapeWidth = element.width;
       var shapeScoreEffect = element.scoreEffect;
       var shapeBonusEffect = element.bonusEffect;
       var shapeSpeedEffect = element.speedEffect;

         if (y > shapeTop && y < shapeTop + shapeHeight && x > shapeLeft && x < shapeLeft + shapeWidth) {

              bonus=bonus+shapeBonusEffect;
              var scmult = document.getElementById('scmult');
              scmult.innerHTML=bonus;

              score=((score+shapeScoreEffect) * bonus);
              var points = document.getElementById('points');
              points.innerHTML=score;

              speed=speed+shapeSpeedEffect;
              var spmult =document.getElementById('spmult');
              spmult.innerHTML=speed;
         }
     });
   }, false);
//--------------End of Click functionality---
//---------------------------------------------------------------------------------




//-------Timer---------------
window.onload = function(){
  var hou = 0;
  var sec = 30;
  var timer = setInterval(function(){
    var displaySec = sec;

    if (0 <= sec && sec < 10) {
      displaySec = "0" + sec;
    }

    document.getElementById("timer").innerHTML = "0"+hou +":" + displaySec;
    sec--;

    if(sec < 0)
    {
      sec = 0;
      clearInterval(timer);
    }
  }, 1000);
};
//---------------------------
