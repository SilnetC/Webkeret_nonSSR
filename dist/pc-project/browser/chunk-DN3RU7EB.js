import{a as ne}from"./chunk-ULEAAMYA.js";import{a as re,d as ie,e as te,f as oe,g as ce}from"./chunk-6JYOSC4C.js";import{a as K,d as Z,h as x,k as X,p as ee}from"./chunk-TZGQDEXP.js";import"./chunk-IX6G3U3V.js";import"./chunk-QR3QMFWM.js";import"./chunk-U4PAU4FA.js";import{L as $,Y as q,_ as J,i as U,j as Y,k as S}from"./chunk-65JLGUJB.js";import{Ba as z,Cc as G,Db as N,Dc as Q,Ec as C,Fb as A,Ia as P,Jb as j,Kb as W,Lb as B,Mb as L,Nb as f,Ub as H,Vb as V,Wa as a,Xa as l,aa as p,ca as T,hb as F,ja as _,ka as v,la as u,lb as y,nb as g,nc as w,ob as s,pb as b,qb as D,rb as R,ub as n,va as M,vb as c,wa as O,wb as d,zb as k}from"./chunk-KMDGJ2NK.js";import{f as E}from"./chunk-CQCHLVVT.js";var pe=["determinateSpinner"];function ue(t,e){if(t&1&&(M(),n(0,"svg",11),d(1,"circle",12),c()),t&2){let h=A();g("viewBox",h._viewBox()),a(),b("stroke-dasharray",h._strokeCircumference(),"px")("stroke-dashoffset",h._strokeCircumference()/2,"px")("stroke-width",h._circleStrokeWidth(),"%"),g("r",h._circleRadius())}}var ge=new T("mat-progress-spinner-default-options",{providedIn:"root",factory:fe});function fe(){return{diameter:ae}}var ae=100,he=10,se=(()=>{let e=class e{get color(){return this._color||this._defaultColor}set color(i){this._color=i}constructor(i,o,r){this._elementRef=i,this._defaultColor="primary",this._value=0,this._diameter=ae,this._noopAnimations=o==="NoopAnimations"&&!!r&&!r._forceAnimations,this.mode=i.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",r&&(r.color&&(this.color=this._defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}get value(){return this.mode==="determinate"?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,i||0))}get diameter(){return this._diameter}set diameter(i){this._diameter=i||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(i){this._strokeWidth=i||0}_circleRadius(){return(this.diameter-he)/2}_viewBox(){let i=this._circleRadius()*2+this.strokeWidth;return`0 0 ${i} ${i}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}};e.\u0275fac=function(o){return new(o||e)(l(z),l(P,8),l(ge))},e.\u0275cmp=v({type:e,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(o,r){if(o&1&&j(pe,5),o&2){let m;W(m=B())&&(r._determinateCircle=m.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(o,r){o&2&&(g("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),R("mat-"+r.color),b("width",r.diameter,"px")("height",r.diameter,"px")("--mdc-circular-progress-size",r.diameter+"px")("--mdc-circular-progress-active-indicator-width",r.diameter+"px"),D("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[_.HasDecoratorInputTransform,"value","value",w],diameter:[_.HasDecoratorInputTransform,"diameter","diameter",w],strokeWidth:[_.HasDecoratorInputTransform,"strokeWidth","strokeWidth",w]},exportAs:["matProgressSpinner"],standalone:!0,features:[F,H],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(o,r){if(o&1&&(y(0,ue,2,8,"ng-template",null,0,V),n(2,"div",2,1),M(),n(4,"svg",3),d(5,"circle",4),c()(),O(),n(6,"div",5)(7,"div",6)(8,"div",7),k(9,8),c(),n(10,"div",9),k(11,8),c(),n(12,"div",10),k(13,8),c()()()),o&2){let m=L(1);a(4),g("viewBox",r._viewBox()),a(),b("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),g("r",r._circleRadius()),a(4),s("ngTemplateOutlet",m),a(2),s("ngTemplateOutlet",m),a(2),s("ngTemplateOutlet",m)}},dependencies:[Q],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0});let t=e;return t})();var me=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[C,$]});let t=e;return t})();function ve(t,e){t&1&&(n(0,"span",8),d(1,"mat-spinner"),c())}var le=(()=>{let e=class e{constructor(i,o){this.router=i,this.authService=o,this.email=new x(""),this.password=new x(""),this.loading=!1}ngOnInit(){}login(){return E(this,null,function*(){this.loading=!0,this.email.value&&this.password.value&&this.authService.login(this.email.value,this.password.value).then(i=>{this.router.navigateByUrl("/landing")}).catch(i=>{console.error(i),this.loading=!1})})}ngOnDestroy(){}};e.\u0275fac=function(o){return new(o||e)(l(U),l(ne))},e.\u0275cmp=v({type:e,selectors:[["app-login"]],decls:18,vars:4,consts:[["class","spinner_style",4,"ngIf"],[1,"login_form"],["for","email"],["matInput","","type","email",3,"formControl"],["for","password"],["matInput","","type","password",3,"formControl"],[1,"regisztracio",3,"routerLink"],["mat-raised-button","","color","primary",3,"click"],[1,"spinner_style"]],template:function(o,r){o&1&&(y(0,ve,2,0,"span",0),n(1,"div",1)(2,"h1"),f(3,"Bejelentkez\xE9s"),c(),n(4,"mat-form-field")(5,"mat-label",2),f(6,"Email c\xEDm: "),c(),d(7,"input",3),c(),n(8,"mat-form-field")(9,"mat-label",4),f(10,"Jelsz\xF3: "),c(),d(11,"input",5),c(),n(12,"div")(13,"p",6),f(14,"M\xE9g nincs fi\xF3kod? Regisztr\xE1lj!"),c()(),n(15,"div")(16,"button",7),N("click",function(){return r.login()}),f(17,"Bejelentkez\xE9s"),c()()()),o&2&&(s("ngIf",r.loading),a(7),s("formControl",r.email),a(4),s("formControl",r.password),a(2),s("routerLink","/registration"))},dependencies:[G,Y,K,Z,X,ie,re,oe,q,se],styles:['.login_form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;height:100vh;align-items:center}h1[_ngcontent-%COMP%]{margin-bottom:50px}button[_ngcontent-%COMP%]{width:200px}p[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:30px}mat-form-field[_ngcontent-%COMP%]{width:50%}.regisztracio[_ngcontent-%COMP%]{cursor:pointer}.regisztracio[_ngcontent-%COMP%]:hover{color:#008b8b}.spinner_style[_ngcontent-%COMP%]{position:fixed;z-index:20;height:1em;width:1em;overflow:show;margin:auto;inset:0}.spinner_style[_ngcontent-%COMP%]:before{content:"";display:block;position:fixed;inset:0;width:100%;height:100%;background-color:#0000004d}']});let t=e;return t})();var ye=[{path:"",component:le}],de=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[S.forChild(ye),S]});let t=e;return t})();var Xe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[C,de,ee,te,ce,J,me]});let t=e;return t})();export{Xe as LoginModule};
