import{a as T,b as k,c as F,d as z,e as B,f as N,g as D}from"./chunk-OKHCOWHD.js";import{a as H,b as Y,c as Z}from"./chunk-Y3LNPYEQ.js";import"./chunk-V5BZUOS3.js";import"./chunk-7TTBD2UK.js";import"./chunk-TKUNDG7E.js";import{a as Q,d as R,e as X,f as $,g as ee}from"./chunk-6JYOSC4C.js";import{a as K,d as U,i as q,o as J}from"./chunk-TZGQDEXP.js";import"./chunk-IX6G3U3V.js";import"./chunk-QR3QMFWM.js";import"./chunk-U4PAU4FA.js";import{U as W,X as P,Y as A,_ as G,k as y}from"./chunk-65JLGUJB.js";import{Ab as S,Ac as j,Bc as I,Cc as V,Db as h,Ec as L,Fb as s,Nb as n,Ob as f,Pb as m,Qb as C,Rb as _,Sb as x,Wa as o,Xa as O,aa as b,ka as w,la as E,lb as v,ob as g,ta as p,ua as u,ub as r,vb as t,wb as M}from"./chunk-KMDGJ2NK.js";import"./chunk-CQCHLVVT.js";function re(d,c){if(d&1){let e=S();r(0,"div",3)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),n(4),t()(),M(5,"img",4),r(6,"mat-card-content")(7,"p",5)(8,"span"),n(9,"CPU:"),t(),n(10),t(),r(11,"p")(12,"span"),n(13,"GPU:"),t(),n(14),t(),r(15,"p")(16,"span"),n(17,"Mem\xF3ria:"),t(),n(18),t(),r(19,"p")(20,"span"),n(21,"Alaplap:"),t(),n(22),t(),r(23,"p")(24,"span"),n(25,"G\xE9ph\xE1z"),t(),n(26),t(),r(27,"p")(28,"span"),n(29,"H\u0171t\xE9s:"),t(),n(30),t(),r(31,"p")(32,"span"),n(33,"T\xE1pegys\xE9g:"),t(),n(34),t(),r(35,"p")(36,"span"),n(37,"SSD:"),t(),n(38),t(),r(39,"p")(40,"span"),n(41,"Merevlemez:"),t(),n(42),t(),r(43,"p",6)(44,"span"),n(45,"L\xE9trehozva:"),t(),n(46),t()(),r(47,"mat-card-actions",7)(48,"button",8),h("click",function(){let i=p(e).$implicit,a=s();return u(a.editConfig(i.id))}),n(49,"Szerkeszt\xE9s"),t(),r(50,"button",8),h("click",function(){let i=p(e).$implicit,a=s();return u(a.removeConfig(i.id))}),n(51,"T\xF6rl\xE9s"),t()()()()}if(d&2){let e=c.$implicit;o(4),f(e.name),o(3),g("ngClass",e.cpu_brand==="Intel"?"intel":"amd"),o(3),m(" ",e.cpu,""),o(4),m(" ",e.gpu,""),o(4),m(" ",e.ram,""),o(4),m(" ",e.mobo,""),o(4),m(" ",e.case,""),o(4),m(" ",e.cpu_cooler,""),o(4),m(" ",e.psu,""),o(4),m(" ",e.ssd,""),o(4),m(" ",e.hdd,""),o(4),m(" ",e.createTime,"")}}function oe(d,c){if(d&1){let e=S();r(0,"div",3)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),n(4),t()(),M(5,"img",4),r(6,"mat-card-content")(7,"p",5)(8,"span"),n(9,"CPU:"),t(),n(10),t(),r(11,"p")(12,"span"),n(13,"GPU:"),t(),n(14),t(),r(15,"p")(16,"span"),n(17,"Mem\xF3ria:"),t(),n(18),t(),r(19,"p")(20,"span"),n(21,"Alaplap:"),t(),n(22),t(),r(23,"p")(24,"span"),n(25,"G\xE9ph\xE1z"),t(),n(26),t(),r(27,"p")(28,"span"),n(29,"H\u0171t\xE9s:"),t(),n(30),t(),r(31,"p")(32,"span"),n(33,"T\xE1pegys\xE9g:"),t(),n(34),t(),r(35,"p")(36,"span"),n(37,"SSD:"),t(),n(38),t(),r(39,"p")(40,"span"),n(41,"Merevlemez:"),t(),n(42),t(),r(43,"p",6)(44,"span"),n(45,"L\xE9trehozva:"),t(),n(46),t()(),r(47,"mat-card-actions",7)(48,"button",8),h("click",function(){let i=p(e).$implicit,a=s();return u(a.editConfig(i.id))}),n(49,"Szerkeszt\xE9s"),t(),r(50,"button",8),h("click",function(){let i=p(e).$implicit,a=s();return u(a.removeConfig(i.id))}),n(51,"T\xF6rl\xE9s"),t()()()()}if(d&2){let e=c.$implicit;o(4),f(e.name),o(3),g("ngClass",e.cpu_brand==="Intel"?"intel":"amd"),o(3),m(" ",e.cpu,""),o(4),m(" ",e.gpu,""),o(4),m(" ",e.ram,""),o(4),m(" ",e.mobo,""),o(4),m(" ",e.case,""),o(4),m(" ",e.cpu_cooler,""),o(4),m(" ",e.psu,""),o(4),m(" ",e.ssd,""),o(4),m(" ",e.hdd,""),o(4),m(" ",e.createTime,"")}}function ae(d,c){if(d&1){let e=S();r(0,"div")(1,"h2"),n(2,"Konfig szerkesz\xE9tse"),t(),r(3,"div",9)(4,"div")(5,"mat-form-field")(6,"mat-label",10),n(7,"Konfigur\xE1c\xF3 neve: "),t(),r(8,"input",11),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.name,i)||(a.ConfigObject.name=i),u(i)}),t()(),r(9,"mat-form-field")(10,"mat-label"),n(11,"G\xE9ph\xE1z: "),t(),r(12,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.case,i)||(a.ConfigObject.case=i),u(i)}),r(13,"mat-option",13),n(14),t()()(),r(15,"mat-form-field")(16,"mat-label",14),n(17,"Processzor t\xEDpus: "),t(),r(18,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.cpu_brand,i)||(a.ConfigObject.cpu_brand=i),u(i)}),r(19,"mat-option",13),n(20),t()()(),r(21,"mat-form-field")(22,"mat-label",15),n(23,"Processzor: "),t(),r(24,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.cpu,i)||(a.ConfigObject.cpu=i),u(i)}),r(25,"mat-option",13),n(26),t()()(),r(27,"mat-form-field")(28,"mat-label",16),n(29,"Alaplap: "),t(),r(30,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.mobo,i)||(a.ConfigObject.mobo=i),u(i)}),r(31,"mat-option",13),n(32),t()()(),r(33,"mat-form-field")(34,"mat-label",17),n(35,"Mem\xF3ria: "),t(),r(36,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.ram,i)||(a.ConfigObject.ram=i),u(i)}),r(37,"mat-option",13),n(38),t()()(),r(39,"mat-form-field")(40,"mat-label",18),n(41,"Vide\xF3k\xE1rtya: "),t(),r(42,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.gpu,i)||(a.ConfigObject.gpu=i),u(i)}),r(43,"mat-option",13),n(44),t()()(),r(45,"mat-form-field")(46,"mat-label",19),n(47,"Processzorh\u0171t\u0151: "),t(),r(48,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.cpu_cooler,i)||(a.ConfigObject.cpu_cooler=i),u(i)}),r(49,"mat-option",13),n(50),t()()(),r(51,"mat-form-field")(52,"mat-label",20),n(53,"T\xE1pegys\xE9g: "),t(),r(54,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.psu,i)||(a.ConfigObject.psu=i),u(i)}),r(55,"mat-option",13),n(56),t()()(),r(57,"mat-form-field")(58,"mat-label",21),n(59,"SSD meghajt\xF3: "),t(),r(60,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.ssd,i)||(a.ConfigObject.ssd=i),u(i)}),r(61,"mat-option",13),n(62),t()()(),r(63,"mat-form-field")(64,"mat-label",22),n(65,"Merevlemez: "),t(),r(66,"mat-select",12),x("ngModelChange",function(i){p(e);let a=s();return _(a.ConfigObject.hdd,i)||(a.ConfigObject.hdd=i),u(i)}),r(67,"mat-option",13),n(68),t()()()(),r(69,"button",23),h("click",function(){p(e);let i=s();return u(i.updateConfig())}),n(70,"Ment\xE9s"),t(),r(71,"button",23),h("click",function(){p(e);let i=s();return u(i.closeForm())}),n(72,"Bez\xE1r"),t()()()}if(d&2){let e=s();o(8),C("ngModel",e.ConfigObject.name),o(4),C("ngModel",e.ConfigObject.case),o(),g("value",e.currentConfig==null?null:e.currentConfig.case),o(),f(e.currentConfig==null?null:e.currentConfig.case),o(4),C("ngModel",e.ConfigObject.cpu_brand),o(),g("value",e.currentConfig==null?null:e.currentConfig.cpu_brand),o(),f(e.currentConfig==null?null:e.currentConfig.cpu_brand),o(4),C("ngModel",e.ConfigObject.cpu),o(),g("value",e.currentConfig==null?null:e.currentConfig.cpu),o(),f(e.currentConfig==null?null:e.currentConfig.cpu),o(4),C("ngModel",e.ConfigObject.mobo),o(),g("value",e.currentConfig==null?null:e.currentConfig.mobo),o(),f(e.currentConfig==null?null:e.currentConfig.mobo),o(4),C("ngModel",e.ConfigObject.ram),o(),g("value",e.currentConfig==null?null:e.currentConfig.ram),o(),f(e.currentConfig==null?null:e.currentConfig.ram),o(4),C("ngModel",e.ConfigObject.gpu),o(),g("value",e.currentConfig==null?null:e.currentConfig.gpu),o(),f(e.currentConfig==null?null:e.currentConfig.gpu),o(4),C("ngModel",e.ConfigObject.cpu_cooler),o(),g("value",e.currentConfig==null?null:e.currentConfig.cpu_cooler),o(),f(e.currentConfig==null?null:e.currentConfig.cpu_cooler),o(4),C("ngModel",e.ConfigObject.psu),o(),g("value",e.currentConfig==null?null:e.currentConfig.psu),o(),f(e.currentConfig==null?null:e.currentConfig.psu),o(4),C("ngModel",e.ConfigObject.ssd),o(),g("value",e.currentConfig==null?null:e.currentConfig.ssd),o(),f(e.currentConfig==null?null:e.currentConfig.ssd),o(4),C("ngModel",e.ConfigObject.hdd),o(),g("value",e.currentConfig==null?null:e.currentConfig.hdd),o(),f(e.currentConfig==null?null:e.currentConfig.hdd)}}var ne=(()=>{let c=class c{constructor(l){this.configService=l,this.amdConfigs=[],this.intelConfigs=[],this.ConfigObject={},this.currentConfig=null,this.currentConfigId=""}ngOnInit(){this.configService.getConfigsByCpuBrand("AMD").subscribe(l=>{this.amdConfigs=l}),this.configService.getConfigsByCpuBrand("Intel").subscribe(l=>{this.intelConfigs=l})}updateConfig(){this.configService.update(this.ConfigObject).then(()=>{this.currentConfigId=""}).catch(l=>{console.error("Hiba t\xF6rt\xE9nt a konfigur\xE1ci\xF3 friss\xEDt\xE9se k\xF6zben: ",l)}),this.currentConfigId=""}closeForm(){this.currentConfigId=""}editConfig(l){this.configService.getConfigById(l).subscribe(i=>{i&&(this.currentConfig=i,this.currentConfigId=l,this.ConfigObject.name=this.currentConfig.name,this.ConfigObject.case=this.currentConfig.case,this.ConfigObject.cpu_brand=this.currentConfig.cpu_brand,this.ConfigObject.cpu=this.currentConfig.cpu,this.ConfigObject.mobo=this.currentConfig.mobo,this.ConfigObject.ram=this.currentConfig.ram,this.ConfigObject.gpu=this.currentConfig.gpu,this.ConfigObject.cpu_cooler=this.currentConfig.cpu_cooler,this.ConfigObject.psu=this.currentConfig.psu,this.ConfigObject.ssd=this.currentConfig.ssd,this.ConfigObject.hdd=this.currentConfig.hdd,this.ConfigObject.id=this.currentConfig.id,this.ConfigObject.createTime=this.currentConfig.createTime)})}removeConfig(l){this.configService.delete(l)}};c.\u0275fac=function(i){return new(i||c)(O(H))},c.\u0275cmp=w({type:c,selectors:[["app-list"]],decls:13,vars:3,consts:[[1,"card-container"],["class","card-element",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card-element"],["mat-card-image","","src","../../../assets/PC/gamerPC.jpeg","alt","Gamer pc"],[3,"ngClass"],[2,"color","orange"],["align","end"],["mat-flat-button","","color","primary",3,"click"],[1,"add_form"],["for","configName"],["matInput","","type","text",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["for","cpu_brand"],["for","processzor"],["for","motherboard"],["for","ram"],["for","gpu"],["for","cpu_cooler"],["for","psu"],["for","ssd"],["for","hdd"],["mat-raised-button","","color","primary",3,"click"]],template:function(i,a){i&1&&(r(0,"div")(1,"h1"),n(2,"El\xE9rhet\u0151 konfigur\xE1ci\xF3k"),t()(),r(3,"div",0)(4,"h2"),n(5,"AMD Konfigok"),t(),r(6,"div"),v(7,re,52,12,"div",1),t(),r(8,"h2"),n(9,"Intel Konfigok"),t(),r(10,"div"),v(11,oe,52,12,"div",1),t()(),v(12,ae,73,31,"div",2)),i&2&&(o(7),g("ngForOf",a.amdConfigs),o(4),g("ngForOf",a.intelConfigs),o(),g("ngIf",a.currentConfigId))},dependencies:[j,I,V,T,z,F,B,N,k,A,K,U,q,R,Q,Y,W,$],styles:["mat-card-title[_ngcontent-%COMP%]{margin-bottom:15px}span[_ngcontent-%COMP%]{font-weight:600}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center;margin-top:20px}p[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}button[_ngcontent-%COMP%]{margin:10px}.intel[_ngcontent-%COMP%]{color:#00c7fd}.amd[_ngcontent-%COMP%]{color:#ed1c24}mat-form-field[_ngcontent-%COMP%]{width:50%;margin-left:10px;margin-right:10px}.add_form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;align-items:center}.card-element[_ngcontent-%COMP%]{display:flex;justify-content:space-around}mat-card[_ngcontent-%COMP%]{max-width:30%;margin-bottom:20px}"]});let d=c;return d})();var le=[{path:"",component:ne}],ie=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=E({type:c}),c.\u0275inj=b({imports:[y.forChild(le),y]});let d=c;return d})();var We=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=E({type:c}),c.\u0275inj=b({imports:[L,ie,D,G,J,Z,P,X,ee]});let d=c;return d})();export{We as ListModule};