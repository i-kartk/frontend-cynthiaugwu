// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
 
function circleFlatkaro() {
    let timeoutScale;
    let xprev = 0
    let yprev = 0

    const min_scale_value = 0.8
    const max_scale_value = 1.2;

    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeoutScale);

        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientY - yprev;

        xprev = dets.clientX
        yprev = dets.clientY

        let xfinal = gsap.utils.clamp(min_scale_value, max_scale_value, xdiff) 
        let yfinal = gsap.utils.clamp(min_scale_value, max_scale_value, ydiff)

        circleMouseFollower(xfinal, yfinal)

        timeoutScale = setTimeout(function () {
            let circle = document.querySelector(".mini-circle");
            circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xfinal}, ${yfinal}`
        }, 100);    
    });
}


function circleMouseFollower(xfinal, yfinal) {
    window.addEventListener("mousemove",function(dets) {
        console.log(dets);
        const circle = document.querySelector(".mini-circle")
        circle.style.transform =`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xfinal}, ${yfinal})`;  
    });   
}




function firstPageAnimation(){
    
    let tl = gsap.timeline ();
    tl.from("nav",{
        y:'-10',
        opacity:0,
        duration:2,
        ease: Expo.easeInOut
    })

        tl.to(".bounding-elem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2,
            delay: -1
        })

        tl.from(".landing-footer",{
            y: -10,
            opacity: 0,
            delay:-1,
            duration: 1.5,
            ease: Expo.easeInOut
        })
}

circleMouseFollower();
circleFlatkaro();
firstPageAnimation();