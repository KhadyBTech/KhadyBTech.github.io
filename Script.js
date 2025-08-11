// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const tgt = document.querySelector(this.getAttribute('href'));
    if(tgt) tgt.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
// simple reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('reveal');
  });
},{threshold:0.12});
document.querySelectorAll('.card, .project-card, .testimonial, .case').forEach(el=>{
  el.classList.add('reveal-hidden'); observer.observe(el);
});
