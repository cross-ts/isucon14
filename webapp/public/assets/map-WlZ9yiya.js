import{j as e,r}from"./jsx-runtime-56DGgGmo.js";import{t as k}from"./bundle-mjs-Dnoi3Axr.js";import{B}from"./button-CS9qg6Tt.js";import{c as b}from"./colors-DB9lnfSt.js";import{C as Z}from"./chair-PB3Jm0Ii.js";import{T as _}from"./text-DfCqYLRl.js";const M=({color:t,...s})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 282 369.24",...s,children:e.jsx("path",{d:"M281.98 138.82C280.83 62.62 218.48.69 142.27 0 63.82-.68 0 62.71 0 141.01c0 18.6 3.6 36.35 10.14 52.61 2.8 6.94 6.13 13.61 9.94 19.95l12.47 17.55 92.15 129.71c7.97 11.22 24.63 11.22 32.6 0l92.15-129.71 12.47-17.55c3.81-6.34 7.14-13.01 9.94-19.95 6.8-16.9 10.42-35.4 10.12-54.8M141 182.95c-23.47 0-42.5-19.03-42.5-42.5s19.03-42.5 42.5-42.5 42.5 19.03 42.5 42.5-19.03 42.5-42.5 42.5",fill:t??"currentColor"})}),U=r.forwardRef(({children:t,center:s,onClose:n,className:o,...l},d)=>{const h=r.useRef(null),w=()=>{if(h.current){const f=h.current,i=()=>{n==null||n(),f.removeEventListener("transitionend",i)};f.addEventListener("transitionend",i),f.style.transform="translateY(100%)"}};return r.useEffect(()=>{const f=setTimeout(()=>{h.current&&(h.current.style.transform="",h.current.style.opacity="")},50);return()=>clearTimeout(f)},[]),r.useImperativeHandle(d,()=>({close:w})),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50 z-40"}),e.jsx("div",{className:k("fixed bottom-0 left-0 right-0 h-[90vh] bg-white rounded-t-3xl shadow-lg transition-transform duration-300 ease-in-out z-50 md:max-w-screen-md mx-auto",s&&"top-1/2 -translate-y-1/2 max-h-[50vh] rounded-3xl p-3 transition duration-300 ease-out",o),ref:h,style:{willChange:"transform",transform:s?"translateY(-40%)":"translateY(100%)",opacity:s?"0":""},...l,children:e.jsx("div",{className:"p-6 md:p-10 h-full",children:t})})]})});U.displayName="Modal";const gt=({direction:t,location:s,label:n,disabled:o,className:l,onClick:d,placeholder:h="場所を選択する",...w})=>e.jsxs(B,{disabled:o,className:k("relative",l),onClick:d,...w,children:[t==="to"&&e.jsx(M,{}),n&&e.jsx("span",{className:"absolute flex items-center h-full top-0 left-4 text-xs text-neutral-500 font-mono",children:n}),s?e.jsx("span",{className:"font-mono",children:`[${s.latitude}, ${s.longitude}]`}):e.jsx("span",{children:h})]}),G=[{src:"/images/buildings1.svg",width:170,height:100},{src:"/images/buildings2.svg",width:112,height:64},{src:"/images/buildings3.svg",width:112,height:64},{src:"/images/buildings4.svg",width:101,height:38},{src:"/images/buildings5.svg",width:79,height:32},{src:"/images/buildings6.svg",width:125,height:60},{src:"/images/house1.svg",width:81,height:46},{src:"/images/house2.svg",width:71,height:53}],tt=[[-307,-327],[310,-237],[165,-347],[178,-126],[71,-194],[-148,352],[-129,90],[248,149],[-261,-295],[-274,397],[-380,-215],[-132,124],[-235,-63],[-316,104],[-420,-120],[386,117],[-115,-65],[-55,-375],[194,-315],[108,-180],[399,-330],[-179,175],[-93,-39],[128,-217],[245,181],[351,66],[140,92],[-117,-97],[-154,-202],[-63,-188],[191,241],[123,211],[-341,173],[-163,229],[151,63],[-104,-137],[-200,-301],[-345,-88],[-216,-107],[-387,-275],[-242,-389],[-323,-36],[-276,-359],[-346,-239],[176,394],[110,51],[-358,78],[-329,-376],[397,-248],[-288,363],[243,-331],[241,210],[91,-395],[57,391],[-73,-220],[385,375],[-359,150],[-166,-363],[212,146],[366,-204],[190,207],[-80,-156],[-167,-428],[87,-96],[379,-261],[-347,222],[-134,205],[-243,226],[-289,-113],[-219,146],[364,-399],[227,-203],[53,-161],[163,-162],[209,108],[-277,-249],[-430,-334],[-81,-279],[-168,-51],[-250,145]],et=tt.map(([t,s],n)=>({image:G[n%G.length],coordinate:{latitude:t,longitude:s}})),st=[{name:"チェアタウン",centerCoordinate:{latitude:0,longitude:0},image:{src:"/images/town.svg",width:500,height:500},color:"#FF3600"},{name:"コシカケシティ",centerCoordinate:{latitude:300,longitude:300},image:{src:"/images/town.svg",width:500,height:500},color:"#0089A2"}],E=20,p=50,H=40,u=E*200,m=1e3,q=(t,s,n)=>Math.min(Math.max(t,s),n),v=({latitude:t,longitude:s})=>({x:-(t+m/2)/m*u,y:-(s+m/2)/m*u}),S=({x:t,y:s})=>({latitude:Math.ceil(-t/u*m-m/2),longitude:Math.ceil(-s/u*m-m/2)}),R=(t,s)=>({x:t.x-s.width/2,y:t.y-s.height/2}),nt=t=>{const s=S({x:0,y:0}),n=S({x:t.right,y:t.bottom});return{horizontalDistance:s.latitude-n.latitude,verticalDistance:s.longitude-n.longitude}},ot=(t,s)=>{t.fillStyle=b.neutral[100],t.fillRect(0,0,u,u),t.strokeStyle=b.neutral[200],t.lineWidth=2,t.lineCap="round",t.setLineDash([]),t.beginPath();for(let l=E;l<u;l+=E)t.moveTo(l,0),t.lineTo(l,u);for(let l=E;l<u;l+=E)t.moveTo(0,l),t.lineTo(u,l);t.stroke();const n=s.from?v(s.from):void 0,o=s.to?v(s.to):void 0;n&&o&&(t.strokeStyle=b.neutral[400],t.lineWidth=3,t.lineCap="round",t.setLineDash([3,12]),t.beginPath(),t.moveTo(-n.x,-n.y),t.lineTo(-o.x,-o.y),t.stroke()),n&&(t.fillStyle=b.neutral[800],t.beginPath(),t.arc(-n.x,-n.y,3,0,2*Math.PI),t.fill()),o&&(t.fillStyle=b.red[500],t.beginPath(),t.arc(-o.x,-o.y,3,0,2*Math.PI),t.fill())},rt=({pinSize:t=80,pinColor:s=b.black,pos:n,updateViewLocation:o})=>{const l=r.useMemo(()=>n&&S(n),[n]),[d,h]=r.useState(!1),w=r.useRef(null),f=r.useRef(null);return e.jsxs("div",{className:"flex items-center justify-center w-full h-full select-none",children:[e.jsxs("svg",{className:"absolute top-0 left-0 w-full h-full opacity-10",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"50%",y:"0",width:2,height:"100%"}),e.jsx("rect",{x:"0",y:"50%",width:"100%",height:2})]}),e.jsx(M,{className:"absolute mt-[-8px] opacity-60",color:s,width:t,height:t,style:{transform:`translateY(-${t/2}px)`}}),l&&e.jsx("div",{className:"absolute right-6 bottom-5 text-white font-mono bg-neutral-800 px-3 py-1 rounded-md",children:e.jsx("span",{children:`${l.latitude}, ${l.longitude}`})}),e.jsx(B,{className:"py-2 px-3 absolute left-4 bottom-4",onClick:()=>h(!0),children:"Custom"}),d&&l&&e.jsxs("div",{className:"p-4 bg-neutral-50 bg-opacity-80 absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col",children:[e.jsxs("div",{className:"flex flex-col w-full max-w-80",children:[e.jsxs("div",{className:"mb-3 flex-1",children:[e.jsx("label",{htmlFor:"latitude",className:"block text-neutral-600 mb-1",children:"Latitude:"}),e.jsx("input",{type:"number",id:"latitude",min:Math.ceil(-m/2),max:Math.ceil(m/2),defaultValue:l.latitude,placeholder:"latitude",className:"px-3 py-2 w-full border border-neutral-300 rounded focus:outline-none focus:ring-1 focus:ring-neutral-400",ref:w})]}),e.jsxs("div",{className:"mb-3 flex-1",children:[e.jsx("label",{htmlFor:"longtiude",className:"block text-neutral-600 mb-1",children:"Longitude:"}),e.jsx("input",{type:"number",id:"longtiude",min:Math.ceil(-m/2),max:Math.ceil(m/2),defaultValue:l.longitude,placeholder:"longitude",className:"px-3 py-2 w-full border border-neutral-300 rounded focus:outline-none focus:ring-1 focus:ring-neutral-400",ref:f})]})]}),e.jsx(B,{onClick:()=>{var N,y;const i={latitude:Number(((N=w.current)==null?void 0:N.value)??0),longitude:Number(((y=f.current)==null?void 0:y.value)??0)};o(i),h(!1)},children:"位置をセット"})]})]})},lt=({from:t,to:s})=>{const n=r.useMemo(()=>t&&v(t),[t]),o=r.useMemo(()=>s&&v(s),[s]);return e.jsxs("div",{className:"flex w-full h-full absolute top-0 left-0 select-none",children:[n&&e.jsx(M,{className:"absolute top-0 left-0 transition-transform duration-300 ease-in-out",color:b.black,width:p,height:p,style:{transform:`translate(${-n.x-p/2}px, ${-n.y-p-8}px)`}}),o&&e.jsx(M,{className:"absolute top-0 left-0 transition-transform duration-300 ease-in-out",color:b.red[500],width:p,height:p,style:{transform:`translate(${-o.x-p/2}px, ${-o.y-p-8}px)`}})]})},at=({chairs:t})=>e.jsx("div",{className:"flex w-full h-full absolute top-0 left-0 select-none",children:t==null?void 0:t.map(({id:s,model:n,current_coordinate:o},l)=>{const d=v(o);return e.jsx(Z,{model:n,width:H,height:H,className:"absolute top-0 left-0 transition-transform duration-300 ease-in-out",style:{transform:[`translate(${-d.x-p/2}px, ${-d.y-p-8}px)`,l%2===0?"scale(-1, 1)":""].join(" ")}},s)})}),it=r.memo(function(){return e.jsxs("div",{className:"flex w-full h-full absolute top-0 left-0 select-none",children:[st.map(({centerCoordinate:s,name:n,image:o,color:l})=>{const d=v(s);return e.jsx("div",{className:"absolute top-0 left-0",style:{transform:`translate(${-d.x-o.width/2}px, ${-d.y-o.height/2}px)`},children:e.jsxs("div",{className:"relative",style:{width:o.width,height:o.height},children:[e.jsx("div",{role:"presentation",className:"absolute rounded-full bg-neutral-300 bg-opacity-40",style:{width:o.width+20,height:o.width+20,top:-10,left:-10}}),e.jsx("img",{className:"absolute top-0 left-0",src:o.src,alt:n,width:o.width,height:o.height}),e.jsx("div",{className:"absolute bottom-[-54px] w-full text-center",children:e.jsx(_,{tagName:"span",className:"px-3 py-1 text-white rounded-md",style:{backgroundColor:l},size:"sm",children:n})})]})},n)}),et.map(({image:s,coordinate:n})=>{const o=v(n);return e.jsx("img",{className:"absolute top-0 left-0",style:{transform:`translate(${-o.x-s.width/2}px, ${-o.y-s.height/2}px)`},src:s.src,alt:"city object",width:s.width,height:s.height,loading:"lazy"},`${n.latitude}+${n.longitude}`)})]})}),xt=({selectable:t,selectorPinColor:s,onMove:n,onUpdateViewSize:o,from:l,to:d,chairs:h,initialCoordinate:w,className:f})=>{const i=r.useRef(n),N=r.useRef(o),y=r.useRef(null),X=r.useRef(null),[T,D]=r.useState(!1),[{x:L,y:P},I]=r.useState({x:0,y:0}),[Y,W]=r.useState({x:0,y:0}),[z,F]=r.useState({x:0,y:0}),[g,J]=r.useState(void 0),O=r.useCallback(a=>{var C,x;if(!y.current)return;const c=y.current.getBoundingClientRect();if(a){const j=v(a),$={x:j.x+c.width/2,y:j.y+c.height/2};I($),(C=i==null?void 0:i.current)==null||C.call(i,a);return}if(!a){const j={x:-u/2+c.width/2,y:-u/2+c.height/2};I(j),(x=i==null?void 0:i.current)==null||x.call(i,S(R(j,c)));return}},[]);r.useEffect(()=>{var c;if(!g)return;const a=nt(g);(c=N.current)==null||c.call(N,a)},[g]),r.useLayoutEffect(()=>{O(w)},[w,O]),r.useEffect(()=>{const a=X.current,c=a==null?void 0:a.getContext("2d");c&&ot(c,{from:l,to:d})},[l,d]),r.useEffect(()=>{const a=new ResizeObserver(c=>{J(c[0].contentRect)});return y.current&&a.observe(y.current),()=>{a.disconnect()}},[]);const K=r.useCallback(a=>{D(!0),F({x:a.pageX,y:a.pageY}),W({x:L,y:P})},[L,P]),Q=r.useCallback(a=>{D(!0),F({x:a.touches[0].pageX,y:a.touches[0].pageY}),W({x:L,y:P})},[L,P]);return r.useEffect(()=>{const a=()=>{F({x:0,y:0}),D(!1)};return window.addEventListener("mouseup",a),window.addEventListener("touchend",a),()=>{window.removeEventListener("mouseup",a),window.removeEventListener("touchend",a)}},[]),r.useEffect(()=>{const a=(x,j)=>{var A;if(!g)return;const $=q(Y.x-(z.x-x),-u+g.width,0),V=q(Y.y-(z.y-j),-u+g.height,0);I({x:$,y:V}),(A=i==null?void 0:i.current)==null||A.call(i,S(R({x:$,y:V},g)))},c=x=>{a(x.pageX,x.pageY)},C=x=>{a(x.touches[0].pageX,x.touches[0].pageY)};return T&&(window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("touchmove",C,{passive:!0})),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("touchmove",C)}},[T,z,Y,n,g]),e.jsxs("div",{className:k("w-full h-full relative overflow-hidden bg-neutral-200 select-none",T&&"cursor-grab",f),ref:y,onMouseDown:K,onTouchStart:Q,role:"button",tabIndex:0,children:[e.jsxs("div",{className:k("absolute top-0 left-0",!T&&"transition-transform duration-200 ease-in-out"),style:{transform:`translate(${L}px, ${P}px)`,width:u,height:u},children:[e.jsx("canvas",{width:u,height:u,ref:X}),e.jsx(it,{}),h&&h.length!==0&&e.jsx(at,{chairs:h}),e.jsx(lt,{from:l,to:d})]}),t&&g&&e.jsx(rt,{pos:R({x:L,y:P},g),updateViewLocation:O,pinColor:s})]})};export{gt as L,U as M,M as P,st as T,xt as a};