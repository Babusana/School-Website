const init = () =>{
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()
gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers:true,
    start: "top 0%",
    end: "top -70%",
    scrub: 1
}})
tl.from(".page2 h1",{
  x:-100,
  duration:3,
  delay:2,
})
tl.from(".page2 li",{
  y:-200,
  rotate: 10,
  opacity: 0,
  delay:1.3
},"anim")
tl.from(".page2 > img",{
  opacity:0,
  duration:1.2,
  delay:1.3,
},"anim")


var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    markers:true,
    start: "top 20%",
    end: "top 270%",
    scrub: 2
}})
tl2.from(".page3 h1",{
  scale:5,
  rotate:30,
  duration:"1",
  delay:"1.3",
  opacity:0,
})
tl2.from(".page3 p",{
  x:-100,
  duration:5,
  delay:1.3,
  opacity:0,
},"anim1")
tl2.from(".page3 a",{
  scale:0.1,
  duration:5,
  delay:1.3,
},"anim1")
tl2.from(".ab",{
  y:200,
  duration:5,
  delay:2,
})


var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    markers:true,
    start: "top 20%",
    end: "top 270%",
    scrub: 2
}})
tl3.from(".div1",{
  scale:0.2,
  delay:1,
  duration:"1",
  opacity:0,
})
tl3.from(".f",{
  scale:0.2,
  delay:2,
  duration:"1",
  opacity:0,
})
tl3.from(".s",{
  scale:0.2,
  delay:3,
  duration:"1",
  opacity:0,
})
tl3.from(".t",{
  scale:0.2,
  delay:4,
  duration:"1",
  opacity:0,
})

