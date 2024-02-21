console.log("hello");

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".h4.fader");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars" });

  gsap.fromTo(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
      toggleActions: "play play reverse reverse",
    },
  });
});
