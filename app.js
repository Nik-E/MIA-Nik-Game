console.log('APP.JS ONLINE');

//----------------DO NOT TOUCH, THIS SHIT WORKS--------------
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var scroll = -100;
var scrollDX = 1;

var canvasLeft = canvas.offsetLeft;
var canvasTop = canvas.offsetTop;
var elements = [];

var points = 0;
$('#points').html(points);
//-----------------------------------------------------------

// //
// function draw(ctx,circle){
//
//   if (!circle.complete){
//     setTimeout(function(){
//       draw(ctx,circle);
//     },50);
//     return;
//   }
//   ctx.drawImage(circle,3.5,0,65,65);
// }
//
// var circle = new Image();
// circle.src = "/Users/nik.echenique/code/projects/game/MIA-Nik-Game/Circle-Transparent-PNG.png";
// draw(ctx,circle);
// circle.addEventListener('load', function () {
//
// var interval = setInterval(function() {
//      var x = 3.5, y = scroll;
//
//      return function () {
//        ctx.clearRect(0, 0, innerWidth, innerHeight);
//        ctx.drawImage(circle, x, y,65,65);
//
//        y += scrollDX;
//        if (y > innerWidth) {
//          y = scroll;
//        }
//      };
//    }(), 10);
//  }, false);

// function draw(ctx,square){
//
//   if (!square.complete){
//     setTimeout(function(){
//       draw(ctx,square);
//     },50);
//     return;
//   }
//   ctx.drawImage(square,4,0,65,65);
// }
//
// var square = new Image();
// square.src = "/Users/nik.echenique/code/projects/game/MIA-Nik-Game/square.png";
// draw(ctx,square);
// square.addEventListener('load', function () {
//
// var interval = setInterval(function() {
//      var x = 4, y = scroll;
//
//      return function () {
//        ctx.clearRect(0, 0, innerWidth, innerHeight);
//        ctx.drawImage(square, x, y,65,65);
//
//        y += scrollDX;
//        if (y > innerWidth) {
//          y = scroll;
//        }
//      };
//    }(), 10);
//  }, false);


//
// function draw(ctx,triangle){
//
//   if (!triangle.complete){
//     setTimeout(function(){
//       draw(ctx,triangle);
//     },50);
//     return;
//   }
//   ctx.drawImage(triangle,5,0,65,65);
// }
//
// var triangle = new Image();
// triangle.src = "/Users/nik.echenique/code/projects/game/MIA-Nik-Game/Triangle-PNG-Pic.png";
// draw(ctx,triangle);
// triangle.addEventListener('load', function () {
//
// var interval = setInterval(function() {
//      var x = 4, y = scroll;
//
//      return function () {
//        ctx.clearRect(0, 0, innerWidth, innerHeight);
//        ctx.drawImage(triangle, x, y,65,65);
//
//        y += scrollDX;
//        if (y > innerWidth) {
//          y = scroll;
//        }
//      };
//    }(), 10);
//  }, false);















// function draw(ctx,triangle){
//
//   if (!triangle.complete){
//     setTimeout(function(){
//       draw(ctx,triangle);
//     },50);
//     return;
//   }
//   ctx.drawImage(triangle,5,0,65,65);
// }
//
// var triangle = new Image();
// triangle.src = "/Users/nik.echenique/code/projects/game/MIA-Nik-Game/Triangle-PNG-Pic.png";
// draw(ctx,triangle);
// triangle.addEventListener('load', function () {
//
// var interval = setInterval(function() {
//      var x = 4, y = scroll;
//
//      return function () {
//        ctx.clearRect(0, 0, innerWidth, innerHeight);
//        ctx.drawImage(triangle, x, y,65,65);
//
//        y += scrollDX;
//        if (y > innerWidth) {
//          y = scroll;
//        }
//      };
//    }(), 10);
//  }, false);
//
// Add element.

function TriangleShape(width,height,top,left){
   this.width = width;
   this.height = height;
   this.top = top;
   this.left = left;
}

elements.push(
  new TriangleShape(65,65,0,5)

);

// Render elements.
elements.forEach(function(element) {
  console.log('ELEMENT AT', element);
  function draw(ctx,triangle){

    if (!triangle.complete){
      setTimeout(function(){
        draw(ctx,triangle);
      },50);
      return;
    }
    ctx.drawImage(triangle,element.left,element.top,65,65);
  }

  var triangle = new Image();
  triangle.src = "Triangle-PNG-Pic.png";
  draw(ctx,triangle);
  triangle.addEventListener('load', function () {

  var interval = setInterval(function() {
       var x = element.left;

       return function () {
         ctx.clearRect(0, 0, innerWidth, innerHeight);
         ctx.drawImage(triangle, x, element.top, 65,65);

         element.top += scrollDX;
         if (element.top > innerWidth) {
           element.top = scroll;
         }
       };
     }(), 10);
   }, false);


    ctx.fillRect(triangle.left,triangle.top,triangle.width, triangle.height);
});


 // Add event listener for `click` events.
 canvas.addEventListener('click', function(event) {
     var x = event.pageX - canvasLeft,
         y = event.pageY - canvasTop;
     console.log(x, y);

 // Collision detection between clicked offset and element
     elements.forEach(function(oneElement) {
         if (y > oneElement.top && y < oneElement.top + oneElement.height && x > oneElement.left && x < oneElement.left + oneElement.width) {
           points += 1;
         }
     });

 }, false);

 // // Add element.
 //
 // function triangle(width,height,top,left){
 //    this.width = width;
 //    this.height = height;
 //    this.top = top;
 //    this.left = left;
 // }
 //
 // elements.push(
 //   new TriangleShape(65,65,0,5)
 //
 // );
 //
 // // Render elements.
 // elements.forEach(function(element) {
 //   function draw(ctx,triangle){
 //
 //     if (!triangle.complete){
 //       setTimeout(function(){
 //         draw(ctx,triangle);
 //       },50);
 //       return;
 //     }
 //     ctx.drawImage(triangle,5,0,65,65);
 //   }
 //
 //   var triangle = new Image();
 //   triangle.src = "/Users/nik.echenique/code/projects/game/MIA-Nik-Game/Triangle-PNG-Pic.png";
 //   draw(ctx,triangle);
 //   triangle.addEventListener('load', function () {
 //
 //   var interval = setInterval(function() {
 //        var x = 4, y = scroll;
 //
 //        return function () {
 //          ctx.clearRect(0, 0, innerWidth, innerHeight);
 //          ctx.drawImage(triangle, x, y,65,65);
 //
 //          y += scrollDX;
 //          if (y > innerWidth) {
 //            y = scroll;
 //          }
 //        };
 //      }(), 10);
 //    }, false);
 //
 //
 //     ctx.fillRect(elements.triangle.left, elements.triangle.top, elements.triangle.width, elements.triangle.height);
 // });





































// function draw(ctx, diamond){
//   if(!diamond.complete){
//     setTimeout(function(){
//       draw(ctx,diamond);
//     },50);
//     return;
//   }
//   ctx.drawImage(diamond,3.5,0,65,65);
// }
//
//
// var diamond = new Image();
// diamond.src = "/Users/nik.echenique/code/projects/game/MIA-Nik-Game/120px-Gelbe_Raute.png";
// draw(ctx,diamond);
// diamond.addEventListener('load', function () {
//
// var interval = setInterval(function() {
//      var x = 3.5, y = scroll;
//
//      return function () {
//        ctx.clearRect(0, 0, innerWidth, innerHeight);
//        ctx.drawImage(diamond, x, y,65,65);
//
//        y += scrollDX;
//        if (y > innerWidth) {
//          y = scroll;
//        }
//      };
//    }(), 10);
//  }, false);

//
//
// function draw(ctx, star){
//   if(!star.complete){
//     setTimeout(function(){
//       draw(ctx,star);
//     },50);
//     return;
//   }
//   ctx.drawImage(star,3.5,0,65,65);
// }
//
// var star = new Image();
// star.src = "/Users/nik.echenique/code/projects/game/MIA-Nik-Game/Star_filled.png";
// draw(ctx,star);
// star.addEventListener('load', function () {
//
// var interval = setInterval(function() {
//      var x = 3.5, y = scroll;
//
//      return function () {
//        ctx.clearRect(0, 0, innerWidth, innerHeight);
//        ctx.drawImage(star, x, y,65,65);
//
//        y += scrollDX;
//        if (y > innerWidth) {
//          y = scroll;
//        }
//      };
//    }(), 10);
//  }, false);