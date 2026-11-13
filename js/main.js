// Main behaviour: theme, glass toggle, language (fa/en), mobile menu, preview dialog, animations
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const sv=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}},ld=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const tx=$$('[data-en]'),cs=$$('[data-ens]');
tx.forEach(e=>e.dataset.fa=e.innerHTML);
cs.forEach(c=>c.fa=[...c.querySelectorAll('small,h3,p')].map(x=>x.textContent));
function setLang(l){
 const en=l=='en',loc=en?'en-US':'fa-IR',d=document.documentElement;
 d.lang=l;d.dir=en?'ltr':'rtl';document.title=TT[l];
 tx.forEach(e=>e.innerHTML=en?e.dataset.en:e.dataset.fa);
 cs.forEach(c=>{const a=en?c.dataset.ens.split('|'):c.fa;c.querySelectorAll('small,h3,p').forEach((x,i)=>x.textContent=a[i])});
 $$('[data-p]').forEach(b=>b.textContent=(+b.dataset.p).toLocaleString(loc)+(en?'%':'٪'));
 $$('[data-n]').forEach(b=>b.textContent='+'+(+b.dataset.n).toLocaleString(loc));
 $$('[data-price]').forEach(b=>b.textContent=(+b.dataset.price).toLocaleString(loc)+(en?' Toman':' تومان'));
 const y=new Date();
 $('#fc').textContent=en?'© '+y.getFullYear()+' Ali. All rights reserved.':'© '+y.toLocaleDateString('fa-IR',{year:'numeric'})+' — تمامی حقوق محفوظ است.';
 $('#lg').textContent=en?'فا':'EN';sv('lang',l)}
function setTheme(t){document.documentElement.dataset.theme=t;$('#th').textContent=t=='dark'?'☀️':'🌙';sv('theme',t)}
$('#lg').onclick=()=>setLang(document.documentElement.lang=='en'?'fa':'en');
$('#th').onclick=()=>setTheme(document.documentElement.dataset.theme=='dark'?'light':'dark');
function setGlass(o){document.documentElement.dataset.g=o?'on':'off';$('#gl').style.opacity=o?1:.5;sv('glass',o?'on':'off')}
$('#gl').onclick=()=>setGlass(document.documentElement.dataset.g!='on');
setGlass(ld('glass')!='off');
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card,.cg a');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
const dg=$('#pv');
function t(s){const a=String(s).split('|');return document.documentElement.lang=='en'?(a[1]||a[0]):a[0].replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]).replace(/,/g,'٬')}
function lnk(a,k){a.href=PAY[k]||'#contact';if(PAY[k]){a.target='_blank';a.rel='noopener'}else a.removeAttribute('target')}
$$('.buy').forEach(a=>lnk(a,a.dataset.k));
$$('.pvb').forEach(b=>b.onclick=()=>{const k=b.dataset.k,p=PV[k],en=document.documentElement.lang=='en',lk='<tr class="lk">'+p.c.map(()=>'<td>••••••</td>').join('')+'</tr>';
 $('#pvt').textContent=b.closest('.card').querySelector('h3').textContent;
 $('#pvtb').innerHTML='<tr>'+p.c.map(x=>'<th>'+t(x)+'</th>').join('')+'</tr>'+p.r.map(r=>'<tr>'+r.map(x=>'<td>'+t(x)+'</td>').join('')+'</tr>').join('')+lk+lk;
 $('#pvn').textContent=t(p.n)+(en?' — The rest of the file is available after purchase.':' — ادامه فایل پس از دریافت در دسترس است.');
 lnk($('#pvbuy'),k);dg.showModal()});
$('#pvx').onclick=()=>dg.close();
dg.onclick=e=>{if(e.target==dg)dg.close()};
$('#pvbuy').addEventListener('click',()=>dg.close());
setTheme(ld('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
setLang(ld('lang')=='en'?'en':'fa');
const nv=$('nav ul'),ov=$('.ov'),cl=()=>{nv.classList.remove('open');ov.classList.remove('on')};
$('.menu').onclick=()=>{nv.classList.toggle('open');ov.classList.toggle('on')};
ov.onclick=cl;$$('nav a').forEach(a=>a.addEventListener('click',cl));
const io=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');
 if(t.dataset.n){const n=+t.dataset.n,s=Math.ceil(n/50);let c=0;const f=()=>{c=Math.min(n,c+s);t.textContent='+'+c.toLocaleString(document.documentElement.lang=='en'?'en-US':'fa-IR');if(c<n)requestAnimationFrame(f)};f()}
 t.querySelectorAll('.bar i').forEach(b=>b.style.width=b.dataset.w+'%');
 io.unobserve(t)}),{threshold:.15});
$$('.rv,[data-n]').forEach(e=>io.observe(e));
