webpackJsonp([84],{1896:function(n,l,e){"use strict";function t(n){return a._57(0,[a._52(402653184,1,{quizComponent:0}),(n()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,P.a,[w.a,a.t,a.V,[2,I.a]],null,null),(n()(),a._55(-1,null,["\n    "])),(n()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,M.b,M.a)),a._30(5,49152,null,0,k.a,[E.a,[2,I.a],[2,L.a],w.a,a.t,a.V],null,null),a._30(6,212992,null,0,T.a,[k.a,A.a,F.a,G.a],null,null),(n()(),a._55(-1,3,["\n        "])),(n()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,J.b,J.a)),a._30(9,49152,null,0,K.a,[w.a,a.t,a.V,[2,N.a],[2,k.a]],null,null),(n()(),a._31(10,0,null,0,1,"core-format-text",[],null,null,null,null,null)),a._30(11,540672,null,0,Q.a,[a.t,U.a,B.a,H.a,F.a,A.a,S.a,W.a,X.a,Y.a,Z.a,$.a,[2,L.a],[2,nn.a],[2,ln.a],en.a,G.a],{text:[0,"text"]},null),(n()(),a._55(-1,3,["\n\n        "])),(n()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,tn.a,[w.a,a.t,a.V,[2,N.a],[2,k.a]],null,null),a._52(603979776,2,{_buttons:1}),(n()(),a._55(-1,null,["\n            "])),(n()(),a._55(-1,null,["\n        "])),(n()(),a._55(-1,3,["\n    "])),(n()(),a._55(-1,null,["\n"])),(n()(),a._55(-1,null,["\n"])),(n()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,an.b,an.a)),a._30(22,4374528,null,0,nn.a,[w.a,A.a,un.a,a.t,a.V,E.a,on.a,a.M,[2,I.a],[2,L.a]],null,null),(n()(),a._55(-1,1,["\n    "])),(n()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,l,e){var t=!0;if("ionRefresh"===l){t=!1!==n.component.quizComponent.doRefresh(e)&&t}return t},null,null)),a._30(25,212992,null,0,rn.a,[A.a,nn.a,a.M,_n.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),a._55(-1,null,["\n        "])),(n()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,dn.b,dn.a)),a._30(28,114688,null,0,cn.a,[rn.a,w.a],{pullingText:[0,"pullingText"]},null),a._47(131072,sn.a,[F.a,a.j]),(n()(),a._55(-1,null,["\n    "])),(n()(),a._55(-1,1,["\n\n    "])),(n()(),a._31(32,0,null,1,1,"addon-mod-quiz-index",[],null,[[null,"dataRetrieved"]],function(n,l,e){var t=!0;if("dataRetrieved"===l){t=!1!==n.component.updateData(e)&&t}return t},V.c,V.b)),a._30(33,245760,[[1,4]],0,_.a,[a.C,fn.a,[2,nn.a],pn.a,bn.a,hn.a,mn.a,vn.a,L.a],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(n()(),a._55(-1,1,["\n"])),(n()(),a._55(-1,null,["\n"]))],function(n,l){var e=l.component;n(l,6,0);n(l,11,0,e.title);n(l,25,0,e.quizComponent.loaded);n(l,28,0,a._34(1,"",a._56(l,28,0,a._44(l,29).transform("core.pulltorefresh")),""));n(l,33,0,e.module,e.courseId)},function(n,l){n(l,4,0,a._44(l,5)._hidden,a._44(l,5)._sbPadding);n(l,21,0,a._44(l,22).statusbarPadding,a._44(l,22)._hasRefresher);n(l,24,0,"inactive"!==a._44(l,25).state,a._44(l,25)._top);n(l,27,0,a._44(l,28).r.state)})}Object.defineProperty(l,"__esModule",{value:!0});var a=e(0),u=e(8),o=e(3),i=e(29),r=e(712),_=e(483),d=this&&this.__decorate||function(n,l,e,t){var a,u=arguments.length,o=u<3?l:null===t?t=Object.getOwnPropertyDescriptor(l,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,l,e,t);else for(var i=n.length-1;i>=0;i--)(a=n[i])&&(o=(u<3?a(o):u>3?a(l,e,o):a(l,e))||o);return u>3&&o&&Object.defineProperty(l,e,o),o},c=this&&this.__metadata||function(n,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,l)},s=function(){function n(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.title=this.module.name}return n.prototype.updateData=function(n){this.title=n.name||this.title},n.prototype.ionViewDidEnter=function(){this.quizComponent.ionViewDidEnter()},n.prototype.ionViewDidLeave=function(){this.quizComponent.ionViewDidLeave()},d([Object(a._9)(_.a),c("design:type",_.a)],n.prototype,"quizComponent",void 0),n=d([Object(a.m)({selector:"page-addon-mod-quiz-index",templateUrl:"index.html"}),c("design:paramtypes",[u.t])],n)}(),f=this&&this.__decorate||function(n,l,e,t){var a,u=arguments.length,o=u<3?l:null===t?t=Object.getOwnPropertyDescriptor(l,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,l,e,t);else for(var i=n.length-1;i>=0;i--)(a=n[i])&&(o=(u<3?a(o):u>3?a(l,e,o):a(l,e))||o);return u>3&&o&&Object.defineProperty(l,e,o),o},p=function(){function n(){}return n=f([Object(a.I)({declarations:[s],imports:[i.a,r.a,u.l.forChild(s),o.b.forChild()]})],n)}(),b=e(1365),h=e(1366),m=e(1367),v=e(1368),g=e(1369),y=e(1370),R=e(1371),x=e(1372),j=e(1373),z=e(1376),q=e(1377),O=e(1378),C=e(1379),V=e(1432),D=e(1455),P=e(447),w=e(6),I=e(37),M=e(1374),k=e(207),E=e(32),L=e(21),T=e(676),A=e(14),F=e(18),G=e(12),J=e(1375),K=e(350),N=e(253),Q=e(41),U=e(1),B=e(4),H=e(10),S=e(2),W=e(26),X=e(5),Y=e(16),Z=e(9),$=e(17),nn=e(25),ln=e(34),en=e(36),tn=e(448),an=e(178),un=e(31),on=e(104),rn=e(140),_n=e(38),dn=e(195),cn=e(146),sn=e(27),fn=e(152),pn=e(288),bn=e(243),hn=e(238),mn=e(119),vn=e(312),gn=e(63),yn=a._29({encapsulation:2,styles:[],data:{}}),Rn=a._27("page-addon-mod-quiz-index",s,function(n){return a._57(0,[(n()(),a._31(0,0,null,null,1,"page-addon-mod-quiz-index",[],null,null,null,t,yn)),a._30(1,49152,null,0,s,[gn.a],null,null)],null,null)},{},{},[]),xn=e(7),jn=e(22),zn=e(346),qn=e(347),On=e(349),Cn=e(348),Vn=e(446),Dn=e(675),Pn=e(103),wn=e(24),In=e(67),Mn=e(254);e.d(l,"AddonModQuizIndexPageModuleNgFactory",function(){return kn});var kn=a._28(p,[],function(n){return a._40([a._41(512,a.o,a._21,[[8,[b.a,h.a,m.a,v.a,g.a,y.a,R.a,x.a,j.a,z.a,q.a,O.a,C.a,V.a,D.a,Rn]],[3,a.o],a.K]),a._41(4608,xn.m,xn.l,[a.G,[2,xn.v]]),a._41(4608,jn.x,jn.x,[]),a._41(4608,jn.d,jn.d,[]),a._41(4608,zn.b,zn.a,[]),a._41(4608,qn.a,qn.b,[]),a._41(4608,On.b,On.a,[]),a._41(4608,Cn.b,Cn.a,[]),a._41(4608,F.a,F.a,[Vn.a,zn.b,qn.a,On.b,Cn.b,F.b,F.c]),a._41(512,i.a,i.a,[]),a._41(512,xn.b,xn.b,[]),a._41(512,jn.v,jn.v,[]),a._41(512,jn.i,jn.i,[]),a._41(512,jn.s,jn.s,[]),a._41(512,Dn.a,Dn.a,[]),a._41(512,o.b,o.b,[]),a._41(512,Pn.a,Pn.a,[]),a._41(512,wn.a,wn.a,[]),a._41(512,In.a,In.a,[]),a._41(512,r.a,r.a,[]),a._41(512,Dn.b,Dn.b,[]),a._41(512,p,p,[]),a._41(256,F.c,void 0,[]),a._41(256,F.b,void 0,[]),a._41(256,Mn.a,s,[])])})}});