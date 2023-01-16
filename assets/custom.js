jQuery(window).bind("pageshow", function(event) { //fix safari bug backward/forwards cache  needed for page transitions
    if (event.originalEvent.persisted) {
        window.location.reload() 
    }
})


gsap.registerPlugin(ScrollTrigger);


gsap.set('.fadeIn', {  opacity: 0   })
    
var fadeIns = gsap.utils.toArray('.fadeIn');

fadeIns.forEach((section) => {
  
  gsap.to(section, { alpha: 1,
    scrollTrigger: {
        trigger: section,
        start: 'top 95%',
        scrub: true,
        end: 'top 65%',
      toggleActions: "play none none reverse"
        //markers: true
      },
      ease: "power2.inOut"
	});
  
})

    

gsap.set('.fadeInUp', {  opacity: 0, y: 20   })
    
var fadeInUps = gsap.utils.toArray('.fadeInUp');

fadeInUps.forEach((section) => {
  
  gsap.to(section, { alpha: 1, y: 0,
    scrollTrigger: {
        trigger: section,
        start: 'top 95%',
        scrub: false,
        end: 'top 75%',
      toggleActions: "play none none reverse"
        //markers: true
      },
      ease: "power2.inOut"
	});
  
})




gsap.set('.fadeInLeft', {  opacity: 0, x: -30   })
    
var fadeInLefts = gsap.utils.toArray('.fadeInLeft');

fadeInLefts.forEach((section) => {
  
  gsap.to(section, { alpha: 1, x: 0,
    scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        scrub: true,
        end: 'top 30%',
        //markers: true
      },
      ease: "power3.inOut"
	});
  
})




gsap.set('.fadeInRight', {  opacity: 0, x: 30   })
    
var fadeInRights = gsap.utils.toArray('.fadeInRight');

fadeInRights.forEach((section) => {
  
  gsap.to(section, { alpha: 1, x: 0,
    scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        scrub: true,
        end: 'top 30%',
        //markers: true
      },
      ease: "power3.inOut"
	});
  
})


/*
gsap.defaults({ease: "power3"});
gsap.set(".fadeInStaggered", {opacity: 0});

ScrollTrigger.batch(".fadeInStaggered", {
  //interval: 0.1, // time window (in seconds) for batching to occur. 
  //batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {opacity: 1, stagger: {each: 0.333, grid: [1, 3], duration: 1, ease: 'Power3.easeInOut'}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {opacity: 0, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1, stagger: 0.333, overwrite: true, duration: 3, ease: 'Power3.easeInOut'}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, overwrite: true}),
  start: 'top 80%'
});


// when ScrollTrigger does a refresh(), it maps all the positioning data which 
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal 
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".fadeInStaggered", {opacity: 0}));
*/


gsap.defaults({ease: "power3"});
gsap.set(".fadeInStaggered", {opacity: "0"});


ScrollTrigger.batch(".fadeInStaggered", {
  start: "top bottom-=10px",
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1.5, stagger: 0.15}),
  onLeaveBack:batch => gsap.to(batch, {opacity: 0, y: 10, duration: 1.5, stagger: 0.1})
});


// when ScrollTrigger does a refresh(), it maps all the positioning data which 
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal 
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".fadeInStaggered", {y: 0, opacity: 0 }));

  



gsap.set('.parallax', {  y: -60   })
var parallax = gsap.utils.toArray('.parallax');
parallax.forEach((section) => {
  
  gsap.to(section, { yPercent: 60,
    scrollTrigger: {
        trigger: section,
        //start: 'top 90%',
        scrub: true,
        //end: 'bottom 90%',
        //markers: true
      },
      //ease: "power3.inOut"
	});
  
})


gsap.set('.parallaxSlow', {  y: 50   })
var parallaxSlow = gsap.utils.toArray('.parallaxSlow');
parallaxSlow.forEach((section) => {
  
  gsap.to(section, { yPercent: -10,
    scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        scrub: true,
        end: 'bottom 90%',
       // markers: true
      },
      //ease: "power3.inOut"
	});
  
})


gsap.set('.parallaxUp', {  y: 60   })
gsap.to(".parallaxUp", {
  yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallaxUpContainer",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});

gsap.set('.parallax-image-with-text', {  y: 90   })
gsap.to(".parallax-image-with-text", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-image-with-text-container",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});


/*
gsap.set('.parallaxDown', {  y: -60   })
gsap.to(".parallaxDown", {
  yPercent: 45,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallaxContainer",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});
*/

gsap.set('.parallaxDown', {  y: -60   })
var parallaxDown = gsap.utils.toArray('.parallaxDown');
parallaxDown.forEach((section) => {
  
  gsap.to(section, { yPercent: 35,
    scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        scrub: true,
        end: 'bottom 20%'
        //markers: true
      },
     // ease: "power1.inOut"
	});
  
})

gsap.set('.parallaxIcon', {  y: 120   })
var parallaxIcon = gsap.utils.toArray('.parallaxIcon');
parallaxIcon.forEach((section) => {
  
  gsap.to(section, { yPercent: -120,
    scrollTrigger: {
        trigger: "#MainContent",
        start: 'top top',
        scrub: true,
        end: 'bottom bottom'
      },
     // ease: "power1.inOut"
	});
  
})







var avoidWidows = (function(classname) {
  var els = document.querySelectorAll('.'.concat(classname));
  els.forEach(function(el) {
    // Split headline into array using spaces as delimiters
    var elArr = el.innerHTML.split(' ');

    // Remove last two words from array and join them together with non-breaking space
    var lastWords = elArr.splice(-2, 2).join('&nbsp');

    // Add last two words back to headline array
    elArr.push(lastWords);

    // Change html for headline. The last two words will not break now, resulting in no widows!
    el.innerHTML = elArr.join(' ');
  });
   
})('no-widow');
  

jQuery(document).ready(function($) {

  
  jQuery('a:not(.external):not([target="_blank"]), div.swatchProductColor').on('click', function(e) {
	  
	  console.log('link clicked');
		
		if (jQuery(this).hasClass('external')) { return true; }
		e.preventDefault();
		if (jQuery(this).data('href')) { $href = jQuery(this).data('href'); } 
			else { $href=jQuery(this).attr('href'); }

		if ($href!='#') { 
			jQuery('#MainContent').animate({ 'opacity':'0', 'margin-top':'0%'}, function() {
				window.location.href=$href;
			});
		} 
	})
   
   
})




jQuery(window).on('load resize', function($) {
  
 // jQuery('body:not(.template-index) #animsition').css({ 'margin-top' : jQuery('.site-header').height() * 1 });
  
})


jQuery(window).on('load', function() {

	jQuery('#MainContent').animate({'opacity': '1'}, function() {
		if(window.location.hash) { 
			jQuery("html, body").animate({ scrollTop: jQuery(window.location.hash).offset().top - 20 });
			}
		}
	)
})

 
