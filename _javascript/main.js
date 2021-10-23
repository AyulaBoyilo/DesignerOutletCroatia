// Smooth Scroll
;(function($){
    $('.soft_scroll').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
    
            const hash = this.hash;
    
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 70
                },
                1500
            );
        }
    });
})(jQuery);

// Universal variables
var viewWidth = document.querySelector('body').offsetWidth;

// Animation nadnaslov on scroll
gsap.from('.osoba__nadnaslov__rendeli',{
  scrollTrigger: {
      trigger: '.osoba__nadnaslov__rendeli',
      start: 'top 90%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})
gsap.from('.osoba__nadnaslov__elenajel',{
  scrollTrigger: {
      trigger: '.osoba__nadnaslov__elenajel',
      start: 'top 90%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})
gsap.from('.osoba__nadnaslov__patrik',{
  scrollTrigger: {
      trigger: '.osoba__nadnaslov__patrik',
      start: 'top 90%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})

// Animation naslov on scroll
gsap.from('#rendeli',{
  scrollTrigger: {
      trigger: '#rendeli',
      start: 'top 90%'
  },
  x: viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})
gsap.from('#elenajel',{
  scrollTrigger: {
      trigger: '#elenajel',
      start: 'top 90%'
  },
  x: viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})
gsap.from('#patrik',{
  scrollTrigger: {
      trigger: '#patrik',
      start: 'top 90%'
  },
  x: viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})
