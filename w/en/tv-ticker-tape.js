import{a as At}from"./chunks/DF3VWTWS.js";import"./chunks/G5PNI725.js";import"./chunks/23ZVXCLI.js";import{a as Pt}from"./chunks/JO3TEX75.js";import{a as Bt}from"./chunks/ZXPQKRSS.js";import{a as A}from"./chunks/KOLAGT2L.js";import{c as Lt}from"./chunks/B7PTA23N.js";import"./chunks/7EFNAT65.js";import"./chunks/OJRWMBGV.js";import"./chunks/FJFP5OV6.js";import{a as Ot}from"./chunks/R5Q57AFS.js";import"./chunks/JI35TWYP.js";import"./chunks/ELXS25A6.js";import{a as L}from"./chunks/JKLMXFYJ.js";import"./chunks/O7FK2ER5.js";import{a as Ct}from"./chunks/ZTLCCZPE.js";import{a as It}from"./chunks/EAD7U643.js";import"./chunks/5IUJAIWO.js";import"./chunks/IW2D2DXK.js";import{a as Ht}from"./chunks/6Z4AYFFS.js";import"./chunks/GBZMCNSV.js";import"./chunks/E2UWQEUJ.js";import"./chunks/W7NGUL6O.js";import{a as zt,b as Dt,c as Tt,d as Wt,f as Nt,i as Ut,j as qt}from"./chunks/6PG5ZDKC.js";import"./chunks/EGV2JSIE.js";import"./chunks/XPJFQE5E.js";import{b as O}from"./chunks/MNMKVMLH.js";import"./chunks/BECGHJQI.js";import"./chunks/45JJY7SB.js";import"./chunks/YGY3ELN2.js";import{a as Mt}from"./chunks/GXLHIOIB.js";import"./chunks/77V6BDVN.js";import"./chunks/RONFYACH.js";import"./chunks/UNXCCIFM.js";import"./chunks/NXKKAFG6.js";import"./chunks/YEXZFFQD.js";import"./chunks/BNXZED42.js";import"./chunks/S7ERBBFV.js";import"./chunks/IYAMVG3C.js";import{a as Et}from"./chunks/KA4RFIQM.js";import"./chunks/73N6PIHO.js";import"./chunks/2AXELCRE.js";import"./chunks/GUGQ7HZR.js";import{a as $t,b as et}from"./chunks/OF3QI276.js";import"./chunks/DTMVJ4GA.js";import{a as Rt}from"./chunks/5SI2HJB7.js";import{a as T}from"./chunks/NU2NMHCG.js";import{a as k,b as d,e as St,g as wt,i as M,j as h,k as mt,m as P,n}from"./chunks/KOICDSQW.js";import{d as i,e as o,f as r,g as s,h as bt}from"./chunks/VGCFA3QL.js";var Ft=k`.content{display:flex;flex-direction:column;gap:8px}tv-ticker-chart-item{block-size:60px}`;var Xt,H,jt,Gt,y,dt,it=(y=class extends P{constructor(){super(...arguments);o(this,H)}static async setup(){import("./chunks/5XXFB2TM.js"),import("./chunks/OEMR2VPY.js")}static async loader(){await Promise.all([import("./chunks/2WZBKILT.js"),import("./chunks/RTP7GHQ4.js"),import("./chunks/2QHCVRDV.js")])}static popoverMarkup(t,e,a="top",c){return d`<tv-styled-popover
\t\t\t${A({symbol:e,interval:"5",timeFrame:"LASTSESSION",...c})}
\t\t\tplacement=${a}
\t\t\t${et(t)}
\t\t\twidth="300"
\t\t\texpected-height="210"
\t\t\t.loader=${this.loader}
\t\t>
\t\t\t<template>
\t\t\t\t<tv-popover-chart-performance-grid></tv-popover-chart-performance-grid
\t\t\t></template>
\t\t</tv-styled-popover>`}render(){return d` <tv-skeleton spinner="auto">
\t\t\t<div class="content">
\t\t\t\t<tv-ticker-chart-item
\t\t\t\t\t${L("internal")}
\t\t\t\t></tv-ticker-chart-item>
\t\t\t\t<tv-performance-grid ${L()}></tv-performance-grid>
\t\t\t\t<tv-simple-button
\t\t\t\t\t${L()}
\t\t\t\t\tsize="small"
\t\t\t\t\tcursorPointer
\t\t\t\t\tstretch
\t\t\t\t\tvariant="primary"
\t\t\t\t\tcolor="bold"
\t\t\t\t\t@click=${s(this,H,Gt)}
\t\t\t\t\t>See more</tv-simple-button
\t\t\t\t>
\t\t\t</div>
\t\t</tv-skeleton>`}},H=new WeakSet,jt=function(){return this.getRootNode().host},Gt=function(){if(!s(this,H,jt).call(this))return;let e=new O({n0:"symbol"});this.dispatchEvent(e)},dt=new WeakMap,o(y,dt,Xt=()=>(y.styles=Ft,y)),Xt());it=n([T("tv-popover-chart-performance-grid")],it);var Yt=k`.content{display:flex;flex-direction:column;gap:8px}`;var Jt,B,Kt,Qt,_,ut,ot=(_=class extends P{constructor(){super(...arguments);o(this,B)}static async setup(){import("./chunks/5XXFB2TM.js"),import("./chunks/OEMR2VPY.js")}static async loader(){await Promise.all([import("./chunks/64BPAAAX.js"),import("./chunks/2QHCVRDV.js")])}static popoverMarkup(t,e,a="top",c){return d`<tv-styled-popover
\t\t\t${A({symbol:e,...c})}
\t\t\tplacement=${a}
\t\t\t${et(t)}
\t\t\twidth="300"
\t\t\texpected-height="204"
\t\t\t.loader=${this.loader}
\t\t>
\t\t\t<template>
\t\t\t\t<tv-popover-performance-grid></tv-popover-performance-grid
\t\t\t></template>
\t\t</tv-styled-popover>`}render(){return d` <tv-skeleton spinner="auto"
\t\t\t><div class="content">
\t\t\t\t<tv-ticker-performance-grid></tv-ticker-performance-grid>
\t\t\t\t<tv-simple-button
\t\t\t\t\t${L()}
\t\t\t\t\tsize="small"
\t\t\t\t\tcursorPointer
\t\t\t\t\tstretch
\t\t\t\t\tvariant="primary"
\t\t\t\t\tcolor="bold"
\t\t\t\t\t@click=${s(this,B,Qt)}
\t\t\t\t\t>See more</tv-simple-button
\t\t\t\t>
\t\t\t</div></tv-skeleton
\t\t>`}},B=new WeakSet,Kt=function(){return this.getRootNode().host},Qt=function(){if(!s(this,B,Kt).call(this))return;let e=new O({n0:"symbol"});this.dispatchEvent(e)},ut=new WeakMap,o(_,ut,Jt=()=>(_.styles=Yt,_)),Jt());ot=n([T("tv-popover-performance-grid")],ot);var he=Ut({symbols:["FOREXCOM:SPXUSD","FOREXCOM:NSXUSD","FOREXCOM:DJI","FX:EURUSD","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","CMCMARKETS:GOLD"],direction:"horizontal",hideChart:!1,lineChartType:"Area",itemSize:"normal"},{hoverType:"chart-performance-grid",showHover:!1}),Vt=qt(he,{hoverType:Nt(),showHover:Wt()});var Zt=k`:host{block-size:100%;contain:content;display:block!important;inline-size:100%}#track{contain:content;display:grid;grid-template-columns:100% var(--he);grid-template-rows:100%;overflow:hidden}:host([direction=vertical]) #track{block-size:100%;grid-template-columns:100%;grid-template-rows:100% var(--he)}slot{contain:layout;display:grid;grid-column:2;grid-row:1;grid-template-columns:1fr;grid-template-rows:1fr;place-items:center}:host([direction=vertical]) slot{grid-column:1;grid-row:2}slot::slotted(*){block-size:100%;grid-column:1;grid-row:1;inline-size:100%;will-change:transform}:host([direction=horizontal]) slot::slotted(*){flex-shrink:0;inline-size:var(--he,150px)!important}:host([direction=vertical]) slot::slotted(*){block-size:var(--he,150px)!important;flex-shrink:0}`;var te,$,rt,z,C,f,D,E,p,ee,ft,R,N,j,W,ie,vt,I,x,G,Y,oe,b,gt,v=(b=class extends wt{constructor(){super();o(this,p);o(this,$);o(this,rt);o(this,z);o(this,C);o(this,f);o(this,D);o(this,E);o(this,R);o(this,N);o(this,j);o(this,I);o(this,x);o(this,G);o(this,Y);this.direction="horizontal",this.speed=50,this.dimension=150,r(this,$,150),this.gap=0,this._trackDimensions=null,this._isRtl=!1,r(this,rt,void 0),this.pause=!1,r(this,z,!1),r(this,C,!1),r(this,f,[]),r(this,E,()=>{r(this,C,i(this,D).matches),i(this,C)?s(this,p,ee).call(this):s(this,p,ft).call(this)}),r(this,R,void 0),r(this,N,void 0),r(this,j,0),r(this,I,()=>{if(i(this,p,vt))for(let t of i(this,f))t.pause()}),r(this,x,()=>{if(!i(this,p,vt))for(let t of i(this,f))t.play()}),r(this,G,()=>{r(this,z,!0),i(this,I).call(this)}),r(this,Y,()=>{r(this,z,!1),i(this,x).call(this)}),r(this,D,globalThis.matchMedia("(prefers-reduced-motion)")),new Ht(this,{callback:t=>{if(t.length===0)return;let e=t[t.length-1].contentRect;e&&(this._trackDimensions={height:e.height,width:e.width})}})}connectedCallback(){super.connectedCallback(),i(this,D).addEventListener("change",i(this,E)),i(this,E).call(this),this._isRtl=this.f1()}disconnectedCallback(){super.disconnectedCallback(),i(this,D).removeEventListener("change",i(this,E)),s(this,p,ft).call(this)}f1(){return getComputedStyle(this).direction==="rtl"}firstUpdated(){var e;s(this,p,W).call(this);let t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t&&t.addEventListener("slotchange",()=>{s(this,p,W).call(this)})}updated(t){if(t.has("speed")||t.has("dimension")||t.has("gap")||t.has("direction")){s(this,p,W).call(this);return}if(t.has("_trackDimensions")){let e=this.direction==="horizontal"?"width":"height",a=t.get("_trackDimensions");(!a||!this._trackDimensions||a[e]!==this._trackDimensions[e])&&s(this,p,W).call(this)}t.has("pause")&&(this.pause?i(this,I).call(this):i(this,x).call(this))}render(){return d`
\t\t\t<div
\t\t\t\tid="track"
\t\t\t\t@mouseenter=${i(this,G)}
\t\t\t\t@mouseleave=${i(this,Y)}
\t\t\t>
\t\t\t\t<slot></slot>
\t\t\t</div>
\t\t`}},$=new WeakMap,rt=new WeakMap,z=new WeakMap,C=new WeakMap,f=new WeakMap,D=new WeakMap,E=new WeakMap,p=new WeakSet,ee=function(){i(this,I).call(this),r(this,N,window.setInterval(()=>{s(this,p,W).call(this,bt(this,j)._++)},2e3))},ft=function(){i(this,x).call(this),clearInterval(i(this,N))},R=new WeakMap,N=new WeakMap,j=new WeakMap,W=function(t){var pt;if(s(this,p,oe).call(this),i(this,R)!==void 0&&window.clearTimeout(i(this,R)),!this._trackDimensions)return;let e=(pt=this.shadowRoot)==null?void 0:pt.querySelector("slot"),a=e?e.assignedElements({flatten:!0}):[],c=a.length,g=this.direction==="horizontal",u=g?this._trackDimensions.width:this._trackDimensions.height,Q=g?"translateX":"translateY",at=(this.dimension+this.gap)*c;if(c<3||at<=u){let lt=(c-1)*this.gap,q=(u-lt)/c;this.style.setProperty("--he",q+"px");let F=0,V=g&&this._isRtl;for(let X of a){let w=F*(q+this.gap),ht=V?u-w:-u+w;X.style.setProperty("transform",`${Q}(${Math.round(ht)}px)`),F++}return}let ct=u/(c-1)-this.gap;r(this,$,Math.max(this.dimension,ct)),this.style.setProperty("--he",i(this,$)+"px"),s(this,p,ie).call(this,a,u,c,t),r(this,R,window.setTimeout(()=>i(this,x).call(this),1e3))},ie=function(t,e,a,c){let g=this.direction==="horizontal",u=i(this,$)+this.gap,Q=a*u,at=1e3*Q/this.speed,ct=t.length,lt=1e3*((c||0)%ct*u/this.speed),q=g?"translateX":"translateY",F=0,V=[],X=g&&this._isRtl,w=X?-1:1;for(let ht of t){let Z=w*-1*e+w*F*u,tt=X?Math.min(0,Z):Math.max(0,Z),ae=tt-w*Q,ce=(X?tt-Z:Z-tt)/this.speed*1e3-w*lt,pe=[{transform:`${q}(${tt}px)`},{transform:`${q}(${ae}px)`}],le={duration:at,iterations:1/0,easing:"linear",delay:ce},xt=ht.animate(pe,le);xt.pause(),V.push(xt),F++}r(this,f,V)},vt=function(){return i(this,C)||i(this,z)||this.pause},I=new WeakMap,x=new WeakMap,G=new WeakMap,Y=new WeakMap,oe=function(){for(let t of i(this,f))t.cancel();r(this,f,[])},gt=new WeakMap,o(b,gt,te=()=>(b.styles=Zt,b)),te());n([M({type:String,reflect:!0})],v.prototype,"direction",void 0);n([M({type:Number})],v.prototype,"speed",void 0);n([M({type:Number})],v.prototype,"dimension",void 0);n([M({type:Number})],v.prototype,"gap",void 0);n([h()],v.prototype,"_trackDimensions",void 0);n([h()],v.prototype,"_isRtl",void 0);n([M({type:Boolean})],v.prototype,"pause",void 0);v=n([T("tv-infinite-ticker")],v);var re=k`.ticker-item{block-size:var(--awj,50px);border-radius:2px;box-sizing:border-box;padding:8px}.horizontal .ticker-item{margin:4px 0}tv-infinite-ticker.horizontal{margin-block:-4px}tv-infinite-ticker.vertical{inline-size:calc(100% + 8px);margin-inline-start:-4px}.vertical .ticker-item{inline-size:calc(100% - 8px)}.ticker-item:hover{background-color:var(--es);cursor:pointer}.horizontal .ticker-item:after{border-inline-end:1px solid var(--ck);content:"";inline-size:0;inset-block:-4px;inset-inline-end:calc(-1px + var(--gap)*-1);position:absolute}tv-infinite-ticker.horizontal,tv-infinite-ticker.vertical{overflow:hidden}.vertical .ticker-item:after{block-size:0;border-block-end:1px solid var(--ck);content:"";inset-block-end:calc(-1px + var(--gap)*-1);inset-inline:-8px;position:absolute}`;var se,me={horizontal_compact:[48,404],horizontal_normal:[74,345],vertical_compact:[48,0],vertical_normal:[88,0]},de={horizontal_compact:-80,horizontal_normal:-150},ue={},U,l,kt,yt,J,ne,st,K,S,_t,m=(S=class extends P{constructor(){super(...arguments);o(this,l);o(this,U);o(this,J);o(this,K);this._itemHeight=64,this._itemWidth=320,this._speed=30,this._largeSquareLogo=!1,this._hideCurrency=!1,this._hideMarketStatus=!1,this._popoverSymbol=null,this._forcePause=!!mt(),r(this,U,$t()),this._contextOverrides={},r(this,J,t=>{if(this.showHover)return;let e=new O({n0:"symbol"});(t.target??this).dispatchEvent(e)}),r(this,K,(t,e)=>{var a;return t+e+(((a=this._contextOverrides[t])==null?void 0:a.timeFrame)??"")})}connectedCallback(){var t;super.connectedCallback(),s(this,l,kt).call(this),(t=s(this,l,st).call(this))==null||t.setup(),new Pt(this,{callback:e=>{let a={interval:"1D",timeFrame:"3M"},c={[e]:a};e.includes("_EOD:")&&(c[e.replace("_EOD:",":")]=a),this._contextOverrides={...this._contextOverrides,...c}}})}updated(t){t.has("direction")&&s(this,l,yt).call(this)}shouldUpdate(t){return t.has("itemSize")&&s(this,l,kt).call(this),!0}render(){let t=Math.max(24,this._itemHeight),e=Math.max(100,this._itemWidth);return d`
\t\t\t${s(this,l,ne).call(this)}
\t\t\t<tv-infinite-ticker
\t\t\t\t?pause=${this._forcePause}
\t\t\t\tspeed=${this._speed}
\t\t\t\tgap="9"
\t\t\t\tdirection=${this.direction}
\t\t\t\tdimension=${this.direction==="vertical"?t:e}
\t\t\t\tclass=${Et({[this.direction]:!0})}
\t\t\t\tstyle=${Rt({"--gap":"4px","--awj":t+"px","--bao":this.direction==="vertical"?void 0:e+"px"})}
\t\t\t\t>${Mt(this.symbols,i(this,K),a=>d`
\t\t\t\t\t\t\t<tv-error-boundary
\t\t\t\t\t\t\t\tclass="ticker-item"
\t\t\t\t\t\t\t\t.overlay=${At}
\t\t\t\t\t\t\t\t><tv-skeleton
\t\t\t\t\t\t\t\t\t><tv-ticker-chart-item
\t\t\t\t\t\t\t\t\t\t@click=${i(this,J)}
\t\t\t\t\t\t\t\t\t\tdata-symbol=${a}
\t\t\t\t\t\t\t\t\t\t?large-square-logo=${this._largeSquareLogo}
\t\t\t\t\t\t\t\t\t\t.type=${this.lineChartType}
\t\t\t\t\t\t\t\t\t\t?hide-chart=${this.hideChart}
\t\t\t\t\t\t\t\t\t\t?hide-currency=${this._hideCurrency}
\t\t\t\t\t\t\t\t\t\t?hide-market-status=${this._hideMarketStatus}
\t\t\t\t\t\t\t\t\t\thide-open-market-status
\t\t\t\t\t\t\t\t\t\t${A({symbol:a,timeFrame:"LASTSESSION",interval:mt()?"60":"15",...this._contextOverrides[a]})}
\t\t\t\t\t\t\t\t\t\t?allow-stretch=${this.direction==="horizontal"}
\t\t\t\t\t\t\t\t\t\t${Lt({Zy:()=>!this.showHover,popover:i(this,U),preShow:()=>{var c;(c=s(this,l,st).call(this))==null||c.loader()},onShow:c=>{let g=c.dataset.symbol||null;this._popoverSymbol=g,this._forcePause=!0},onHide:()=>{this._forcePause=!1}})}
\t\t\t\t\t\t\t\t\t></tv-ticker-chart-item></tv-skeleton
\t\t\t\t\t\t\t></tv-error-boundary>
\t\t\t\t\t\t`)}
\t\t\t</tv-infinite-ticker>
\t\t`}},U=new WeakMap,l=new WeakSet,kt=function(){let t=`${this.direction}_${this.itemSize}`;[this._itemHeight,this._itemWidth]=me[t],this.hideChart&&(this._itemWidth+=de[t]??0,this._itemHeight+=ue[t]??0)},yt=function(t){let e=Ot(this);e?e.autoHeight=this.direction!=="horizontal":t||setTimeout(()=>s(this,l,yt).call(this,!0),0)},J=new WeakMap,ne=function(){let t=s(this,l,st).call(this);return t?t.popoverMarkup(i(this,U),this._popoverSymbol,void 0,this._contextOverrides[this._popoverSymbol||""]):St},st=function(){if(!this.showHover)return null;switch(this.hoverType){case"chart":return Bt;case"performance-grid":return ot;default:return it}},K=new WeakMap,_t=new WeakMap,o(S,_t,se=()=>(S.styles=re,S)),se());n([h()],m.prototype,"_itemHeight",void 0);n([h()],m.prototype,"_itemWidth",void 0);n([h()],m.prototype,"_speed",void 0);n([h()],m.prototype,"_largeSquareLogo",void 0);n([h()],m.prototype,"_hideCurrency",void 0);n([h()],m.prototype,"_hideMarketStatus",void 0);n([h()],m.prototype,"_popoverSymbol",void 0);n([h()],m.prototype,"_forcePause",void 0);n([h()],m.prototype,"_contextOverrides",void 0);m=n([Tt(Vt)],m);var fe="tv-ticker-tape";zt(m,fe,Dt,Ct("Ticker tape","/markets/"),It({a0:!0}),{i0:{padding:4}});
