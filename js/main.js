//TweenMax.METHOD('SELECTOR', DURATION, {VARIABLES})

//use tweenmax selector
TweenMax.to("#bill1", 4, {
  x: 500,
  backgroundColor: "blue",
  padding: 20,
  border: "1px white solid"
});
//use jquery selector, separate from above becuase using different duration/timeline window for animation to complete
TweenMax.to($("#bill1"), 2, { y: 500, backgroundColor: "yellow" });

//transform attributes
TweenMax.to("#bob2", 3, { scale: 0.4, rotation: 360 });

//ease options
//https://greensock.com/docs/Easing
TweenMax.to("#cat", 4, { x: 800, ease: SteppedEase.config(2) });

//above all define what the end result of the animation.
//use TweenMax.from to define what picture starts as.
TweenMax.from("#cat2", 3, { ease: Elastic.easeOut, opacity: 0, scale: 0 });

//multiple targets using classes
//define delay to start of animation
//use staggerFrom to stagger, add timing after attributes object
TweenMax.staggerFrom(
  ".box",
  2,
  { delay: 1, opacity: 0, scale: 0.2, y: -100 },
  0.2
);

// can select multiple eg. TweenMax.to('.box, #cat', 3, {opacity:0})

//callback when animation complete, use onComplete as a variable

TweenMax.to(".box1", 4, { x: 300, ease: Bounce.easeOut, onComplete: finished });

function finished() {
  alert("onComplete called");
}
