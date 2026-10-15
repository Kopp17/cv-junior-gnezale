/* Loader commun — affiché avant le site, retiré une fois la page chargée */
(function(){
var s=document.currentScript,d=s.dataset,bg=d.bg||'#0a1424',ac=d.ac||'#ff8a2b',fg=d.fg||'#ffffff',
logo=d.logo||'',name=d.n||'',t0=Date.now(),MIN=+d.min||900;
var st=document.createElement('style');
st.textContent='#ldr{position:fixed;inset:0;z-index:2147483647;background:'+bg+';color:'+fg+';display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;font-family:"Segoe UI",Arial,sans-serif;transition:opacity .55s ease,visibility .55s}'
+'#ldr.out{opacity:0;visibility:hidden}'
+'#ldr .ring{position:relative;width:112px;height:112px;display:grid;place-items:center}'
+'#ldr .ring::before,#ldr .ring::after{content:"";position:absolute;inset:0;border-radius:50%;border:3px solid transparent;border-top-color:'+ac+';animation:ldspin 1.1s linear infinite}'
+'#ldr .ring::after{inset:12px;border-top-color:'+fg+';opacity:.45;animation-duration:1.7s;animation-direction:reverse}'
+'#ldr .lg{font-size:30px;font-weight:800;letter-spacing:2px;color:'+ac+';animation:ldpulse 1.6s ease-in-out infinite}'
+'#ldr .nm{font-size:13px;letter-spacing:4px;text-transform:uppercase;opacity:.75}'
+'#ldr .bar{width:150px;height:3px;border-radius:3px;background:'+fg+'22;overflow:hidden}'
+'#ldr .bar i{display:block;height:100%;width:0;background:'+ac+';animation:ldbar '+(MIN/1000+.4)+'s ease-out forwards}'
+'@keyframes ldspin{to{transform:rotate(360deg)}}@keyframes ldpulse{50%{transform:scale(1.12);opacity:.8}}@keyframes ldbar{to{width:92%}}'
+'@media(prefers-reduced-motion:reduce){#ldr .ring::before,#ldr .ring::after,#ldr .lg{animation:none}}';
var el=document.createElement('div');el.id='ldr';el.setAttribute('role','status');el.setAttribute('aria-label','Chargement');
el.innerHTML='<div class="ring"><span class="lg"></span></div><div class="nm"></div><div class="bar"><i></i></div>';
el.querySelector('.lg').textContent=logo||name.split(/\s+/).map(function(w){return w[0]}).join('').slice(0,3).toUpperCase();
el.querySelector('.nm').textContent=name;
document.head.appendChild(st);document.documentElement.appendChild(el);
var lock=document.documentElement.style;lock.overflow='hidden';
var done=false;function hide(){if(done)return;done=true;
setTimeout(function(){el.classList.add('out');lock.overflow='';setTimeout(function(){el.remove();st.remove()},650)},Math.max(0,MIN-(Date.now()-t0)))}
if(document.readyState==='complete')hide();else addEventListener('load',hide);
setTimeout(hide,5000);
})();
