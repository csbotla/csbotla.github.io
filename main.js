const shape1 = "M42.6,-9.6C51.9,14.7,53.8,45.7,36.5,60.7C19.1,75.8,-17.4,75,-35,59.5C-52.7,44,-51.5,13.8,-42.5,-10C-33.5,-33.9,-16.8,-51.5,0,-51.5C16.7,-51.5,33.3,-33.9,42.6,-9.6Z";
const shape2 = "M50.4,-14.5C54.8,-2.9,40.5,16.6,23,28.7C5.4,40.7,-15.4,45.3,-26.4,37.1C-37.4,28.9,-38.7,8,-32.6,-5.9C-26.6,-19.8,-13.3,-26.7,4.9,-28.3C23,-29.9,46,-26.2,50.4,-14.5Z";

d2 = "M49.3,-31.9C64.2,-20.6,77,0,73.3,17C69.6,34,49.5,47.6,29.4,54.8C9.3,62.1,-10.8,63.1,-23.1,54.6C-35.5,46.1,-40.2,28.2,-45,9.6C-49.8,-9,-54.6,-28.2,-47.2,-37.9C-39.7,-47.5,-19.8,-47.5,-1.3,-46.5C17.2,-45.4,34.4,-43.3,49.3,-31.9Z"
d1 = "M62.1,-47.3C75.3,-33,77.1,-7.5,70.1,13C63,33.5,47,48.9,27.1,59.8C7.3,70.7,-16.5,77.1,-33.2,69C-49.9,60.9,-59.7,38.4,-65.4,14.6C-71,-9.2,-72.7,-34.2,-61.1,-48.1C-49.5,-62,-24.8,-64.8,-0.1,-64.7C24.5,-64.5,49,-61.6,62.1,-47.3Z"

var svg = document.querySelector(".svgelement")

// document.querySelector("#svgelement").addEventListener("click",()=>{console.log("aaa")})



// gsap.from();
// gsap.from();





// tl.from(".svgelement", {
//     duration: 0.5,
//     x: 500,
//     // stagger: 0.2,
//     ease: "back.inOut(2)",
// }).from(".hi", {
//     duration: 0.5,
//     y: -500,
//     // stagger: 0.2,
//     ease: "back.inOut(2)"
// }).from(".name", {
//     duration: 0.5,
//     x: -900,
//     // stagger: 0.2,
//     ease: "back.inOut(2)"
// }).from("#nav-bar", {
//     duration: 1,
//     y: -300,
//     ease: "back.inOut"
// })
// tl.from(".ele",{
//     x:10000,
//     stagger:0.2
// })


let hometl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "50% 70%",
        end: "20% 10%",
        // markers: true,
        // toggleActions: "play none reverse none", 
        toggleActions: "restart reverse restart reset",
    }
});


hometl
    .fromTo(".svgelement", 0.8, {
        autoAlpha: 0,
        x: -700,
        ease: "back.inOut(0.8)"
    }, {
        autoAlpha: 1,
        x: 0,
        rotation: 360,
        ease: "back.inOut(0.1)"
    })
    .fromTo(".hi", 0.5, {
        autoAlpha: 0,
        ease: "back.inOut(0.1)"
    }, {
        autoAlpha: 1,
        ease: "back.inOut(0.1)"
    })
    .fromTo(".name", 0.5, {
        autoAlpha: 0,
        ease: "back.inOut(0.1)"
    }, {
        autoAlpha: 1,
        ease: "back.inOut(0.1)"
    })
    .fromTo(".scroll-down", 0.5, {
        autoAlpha: 0,
        ease: "back.inOut(0.1)"
    }, {
        autoAlpha: 1,
        ease: "back.inOut(0.1)"
    })

var tl = gsap.timeline();
tl.fromTo(".nav_ele",0.2, {
    autoAlpha: 0,
    scale:0.6,
    ease: "Power4.inOut(1)"
}, {
    autoAlpha: 1,
    scale:1,
    delay: 2,
    duration: 0.2,
    stagger: 0.1,
    ease: "Power4.inOut(1)"
})


// tlcube.timeScale(0.4)

// gsap.set(".hi",{
//     x:1000,
// })

// gsap.to(".hi", {
//     scrollTrigger: {
//         trigger: ".hi",
//         start: "top 50%",
//         end: "bottom 20%",
//         toggleActions: "reset reverse restart reset",
//         // markers:true,
//     }, // start the animation when ".box" enters the viewport (once)
//     x:0,
//     ease: "back.inOut(1)",
// })



let abouttl = gsap.timeline({
    scrollTrigger: {
        trigger: ".aboutme",
        start: "50% 90%",
        end: "50% 20%",
        // markers: true,
        toggleActions: "restart pause resume reset",
    }
});

abouttl
    .fromTo(".aboutme h1", 0.3, {
        autoAlpha: 0,
        // x: -1000,
        ease: "back.inOut(0.3)"
    }, {
        // x: 0,
        autoAlpha: 1,
        ease: "back.inOut(.3)"
    }).fromTo("#para", 0.3, {
        autoAlpha: 0,
        // x: 2000,
        ease: "back.inOut(0.3)"
    }, {
        autoAlpha: 1,
        // x: 0,
        ease: "back.inOut(.3)"
    })


// gsap.from("#heading-resume", {
//     scrollTrigger: {
//         trigger: "#heading-resume",
//         start: "top 70%",
//         end: "bottom 50%",
//         toggleActions: "restart pause complete reset",
//         // markers:true,
//     }, // start the animation when ".box" enters the viewport (once)
//     x: -700,
//     ease: "Power4.easeOut"
// })

// gsap.from("#resumeiframe", {
//     scrollTrigger: {
//         trigger: "#resumeiframe",
//         start: "top 20%",
//         end: "bottom 80%",
//         toggleActions: "restart pause complete reset",
//         // markers:true,
//     }, // start the animation when ".box" enters the viewport (once)
//     x: 2000,
//     ease: "Power4.easeOut"
// })


let resumetl = gsap.timeline({
    scrollTrigger: {
        trigger: ".resume",
        start: "50% 90%",
        end: "50% 20%",
        // markers: true,
        toggleActions: "restart pause resume reset",
    }
});

resumetl
    .fromTo(".resume h1", 0.3, {
        autoAlpha: 0,
        // x: -700,
        ease: "back.inOut(0.3)"
    }, {
        // x: 0,
        autoAlpha: 1,
        ease: "back.inOut(.3)"
    }).fromTo("#resumeiframe", 1, {
        autoAlpha: 0,
        // x: 1000,
        ease: "back.inOut(0.3)"
    }, {
        autoAlpha: 1,
        // x: 0,
        ease: "back.inOut(.3)"
    })



let contacttl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "50% 70%",
        end: "50% 20%",
        // markers: true,
        toggleActions: "restart reverse restart reverse",
        // toggleActions: "restart pause resume reset",
    }
});

contacttl
    .fromTo(".contact h1", 0.3, {
        // y: -500,
        autoAlpha: 0,
        // ease: "back.inOut(0.3)"
    }, {
        // y: 0,
        autoAlpha: 1,
        ease: "back.out(.3)"
    }).fromTo("#svgs", 0.5, {
        scale: 0.6,
        autoAlpha: 0,
        transformOrigin: "center",
        ease: "back.inOut(1)",
    }, {
        scale: 1,
        autoAlpha: 1,
        ease: "back.inOut(1)",
    })







// gsap.from("#heading-contact", {
//     scrollTrigger: {
//         trigger: "#heading-contact",
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "restart pause complete reset",
//         // markers:true,
//     }, // start the animation when ".box" enters the viewport (once)
//     y: -1000,
//     ease: "Power4.easeOut",
//     opacity: 0.5,
// })


// gsap.from("#svgs", {
//     scrollTrigger: {
//         trigger: "#svgs",
//         start: "top 90%",
//         end: "bottom 10%",
//         // toggleActions:"restart pause restart reverse",
//         toggleActions: "restart pause reset reverse",
//         // markers:true,
//     }, // start the animation when ".box" enters the viewport (once)
//     y: 100,
//     ease: "back.inOut(1)",
// })

// gsap.set(".sm", {y: 400});

ScrollTrigger.batch(".sm", {
    //interval: 0.1, // time window (in seconds) for batching to occur. 
    //batchMax: 3,   // maximum batch size (targets)
    // toggleActions: "restart pause reset reverse",
    toggleActions: "restart reverse restart reverse",
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: {
            each: 0.15,
            grid: [1, 3]
        },
        overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {
        opacity: 0,
        y: -100,
        overwrite: true
    }),
    onEnterBack: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: -0.15,
        overwrite: true
    }),
    onLeaveBack: batch => gsap.set(batch, {
        opacity: 0,
        y: 100,
        overwrite: true
    }),
    // you can also define things like start, end, etc.
    start: "top 80%",
    end: "bottom 30%",
    // markers:true,

});



let intereststl = gsap.timeline({
    scrollTrigger: {
        trigger: ".interests",
        start: "50% 90%",
        end: "45% 20%",
        // markers: true,
        toggleActions: "restart pause resume reset",
    }
});

intereststl
    .fromTo(".interests h1", 0.3, {
        autoAlpha: 0,
        // y: -1000,
        ease: "back.inOut(0.3)"
    }, {
        autoAlpha: 1,
        // y: 0,
        ease: "back.inOut(.3)"
    }).fromTo(".interest_items", 0.3, {
        autoAlpha: 0,
        // y: 1000,
        ease: "back.inOut(0.3)"
    }, {
        autoAlpha: 1,
        // y: 0,
        ease: "back.inOut(.3)"
    })



// gsap.from("#heading-interests", {
//     scrollTrigger: {
//         trigger: "#heading-interests",
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "restart pause complete reset",
//         // markers:true,
//     }, // start the animation when ".box" enters the viewport (once)
//     y: -1000,
//     ease: "Power4.easeOut",
//     opacity: 0.5,
// })



ScrollTrigger.batch(".interest_items", {
    //interval: 0.1, // time window (in seconds) for batching to occur. 
    //batchMax: 3,   // maximum batch size (targets)
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        // y: 0,
        autoAlpha: 1,
        stagger: {
            each: 0.3,
            // grid: [1, 3]
        },
        overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {
        opacity: 0,
        // y: -100,
        autoAlpha: 0,
        overwrite: true
    }),
    onEnterBack: batch => gsap.to(batch, {
        opacity: 1,
        // y: 0,
        autoAlpha: 1,
        stagger: 0.15,
        overwrite: true
    }),
    onLeaveBack: batch => gsap.set(batch, {
        opacity: 0,
        // y: 100,
        autoAlpha: 0,
        overwrite: true
    }),
    // you can also define things like start, end, etc.
    start: "top 70%",
    end: "bottom 30%",
    // markers:true,
});



svg.addEventListener("mouseenter", () => {
    const timeline = anime.timeline({
        duration: 2000,
        loop: false,
        direction: 'alternate',
    })

    timeline.add({
        targets: [".shape", ".name"],
        d: [{
            value: d2,
        }],
        // fill: '#6F8695',
        fill: '#f2a365',
        opacity: '0.8'

    })
})

svg.addEventListener("mouseleave", () => {
    const timeline = anime.timeline({
        duration: 2000,
        loop: false,
        direction: 'alternate',
    })

    timeline.add({
        targets: [".shape", ".name"],
        d: [{
            value: d1,
        }],
        fill: '#e84545',
        opacity: 1

    })
})