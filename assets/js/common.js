export const qs=(s,r=document)=>r.querySelector(s);export const qsa=(s,r=document)=>[...r.querySelectorAll(s)];
export function map(v,a,b,c,d){return c+(d-c)*((v-a)/(b-a))}
export function clamp(v,a,b){return Math.min(b,Math.max(a,v))}
export function fullscreenButton(){const b=qs('.fullscreen');if(!b)return;b.addEventListener('click',async()=>{try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen()}catch(e){}})}
export function pointer(){const p={x:innerWidth/2,y:innerHeight/2,nx:0,ny:0};addEventListener('pointermove',e=>{p.x=e.clientX;p.y=e.clientY;p.nx=e.clientX/innerWidth*2-1;p.ny=e.clientY/innerHeight*2-1});return p}
export function resizeCanvas(c,ctx){const d=Math.min(devicePixelRatio||1,2),w=innerWidth,h=innerHeight;c.width=w*d;c.height=h*d;c.style.width=w+'px';c.style.height=h+'px';ctx.setTransform(d,0,0,d,0,0);return{w,h,d}}
