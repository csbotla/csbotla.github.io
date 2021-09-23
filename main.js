window.addEventListener("load", function () {
  console.log("loaded");
  document.getElementsByTagName("html")[0].style.overflowY = "auto";
  document.querySelector(".logo").style.display = "none";
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".loader").style.display = "none";
});

// gsap.registerPlugin("ScrollTrigger");

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".about",
//     markers: true,
//     start: "0% 40%",
//     end: "100% 95%",
//     pinSpacing: false,
//     // pin: true,
//     scrub: 1,
//     toggleActions: "restart pause resume reverse",
//   },
// });

// tl.fromTo(
//   ".about-title",
//   {
//     opacity: 1,
//     letterSpacing: "1vmin",
//     scaleX: "100%",
//     scaleY: "100%",
//     ease: "back.Out(5)",
//     transition: "all 0.3s ease in",
//   },
//   {
//     duration: 2,
//     y: "140%",
//     fontSize: "10vmin",
//     fontStyle:"italic",
//     scaleX: "250%",
//     scaleY: "250%",
//     // writingMode: "vertical-rl",
//     // textOrientation: "mixed",
//     // letterSpacing: "10vmin",
//     // marginRight: "-20vmin",
//     opacity: 0.3,
//     filter:"blur(3px)",
//     zIndex: 0,
//     transition: "all 0.1s ease in",
//     // opacity: 0.2,
//     // color: "#e5dfe5",
//     ease: "back.In(5)",
//   }
// ).fromTo(
//   ".about-info",
//   { opacity: 0.7 },
//   {
//     opacity: 0.9,
//     duration: 1,
//     y: "-10vmin",
//     x: "0vmin",
//     zIndex: 1,
//     // boxShadow:"-2px -2px 2px 0px #757083,2px 2px 2px 0px gray",
//     // maxWidth: "80vmin",
//     // color: "#cecece",
//   }
// );
// // tl.fromTo(
// //   ".about-title",
// //   { opacity: 1, letterSpacing: "10px", ease: "back.Out(2)" },
// //   {
// //     duration: 2,
// //     y: "35vmin",
// //     letterSpacing: "10vmin",
// //     opacity: 0.2,
// //     color: "#e5dfe5",
// //     ease: "back.In(2)",
// //   }
// // ).fromTo(
// //   ".about-info",
// //   { opacity: 0.3 },
// //   { opacity: 0.9, duration: 1, color: "#cecece" }
// // );

// // tl.fromTo(
// //   ".about-info",
// //   0.3,
// //   {
// //     zIndex: 2,
// //     opacity: 0.8,
// //     ease: "back.Out(2)",
// //   },
// //   {
// //     opacity: 1,
// //     // color: "white",
// //     ease: "back.Out(2)",
// //   }
// // );
