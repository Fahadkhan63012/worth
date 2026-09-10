document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
 menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});
 document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
 const reveal=()=>document.querySelectorAll('.reveal').forEach(x=>{if(x.getBoundingClientRect().top<innerHeight-80)x.classList.add('visible')});addEventListener('scroll',reveal);reveal();
 const top=document.querySelector('.backtop');addEventListener('scroll',()=>{if(top)top.style.display=scrollY>500?'grid':'none'});top?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')nav?.classList.remove('open')});
 document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>{let f=b.parentElement;f.classList.toggle('open');b.querySelector('span').textContent=f.classList.contains('open')?'−':'+'}));
 const form=document.querySelector('#inquiryForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();let ok=true;form.querySelectorAll('[required]').forEach(f=>{let er=f.parentElement.querySelector('.error');if(!f.value.trim()){ok=false;er.textContent='This field is required.';f.style.borderColor='#b11e35'}else{er.textContent='';f.style.borderColor=''}});let em=form.querySelector('#email');if(em.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)){ok=false;em.parentElement.querySelector('.error').textContent='Enter a valid email address.'}let ph=form.querySelector('#phone');if(ph.value&&!/^[0-9+\-\s]{10,15}$/.test(ph.value)){ok=false;ph.parentElement.querySelector('.error').textContent='Enter a valid phone number.'}let s=document.querySelector('.success');if(ok){s.style.display='block';s.textContent='Thank you! Your inquiry has been recorded. We will contact you soon.';form.reset()}else s.style.display='none'});}
 document.querySelectorAll('.year').forEach(x=>x.textContent=new Date().getFullYear());
});
