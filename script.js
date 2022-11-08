var tl = gsap.timeline();

tl.from(".st", {
    stagger: .2,
    duration: 3,
    x: 30,
    opacity: 0,
    ease: "Expo.easeInOut"
})
tl.from("#img1", {
    stagger: .4,
    duration: 4,
    x: 40,
    opacity: 0,
    ease: "Expo.easeInOut"
}, '-=1')
.from('#cntnt h1', {
    y: 30,
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
}, '-=2.2')
tl.from("#cntnt #goal, #main1 #img4, #main1 #txt", {
    stagger: .5,
    duration: 2,
    y: 40,
    opacity: 0,
    ease: "Expo.easeInOut"
}, '-=1')
tl.from("#main1 #txts", {
    stagger: .1,
    duration: 2,
    y: 50,
    opacity: 0.3,
    ease: "Expo.easeInOut"
})
