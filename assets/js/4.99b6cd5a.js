(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{510:function(t,e,a){},511:function(t,e,a){},512:function(t,e,a){},515:function(t,e,a){},516:function(t,e,a){"use strict";a(95);var n=a(166),o=a(508),r=a(507),s=Object(n.b)({components:{RecoIcon:o.b},props:{pageInfo:{type:Object,default:function(){return{}}},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},setup:function(t,e){var a=Object(r.a)();return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"},goTags:function(t){a.$route.path!=="/tag/".concat(t,"/")&&a.$router.push({path:"/tag/".concat(t,"/")})},formatDateValue:function(t){return new Intl.DateTimeFormat(a.$lang).format(new Date(t))}}}}),i=(a(517),a(8)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author?a("reco-icon",{attrs:{icon:"reco-account"}},[a("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?a("reco-icon",{attrs:{icon:"reco-date"}},[a("span",[t._v(t._s(t.formatDateValue(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?a("reco-icon",{attrs:{icon:"reco-eye"}},[a("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?a("reco-icon",{staticClass:"tags",attrs:{icon:"reco-tag"}},t._l(t.pageInfo.frontmatter.tags,(function(e,n){return a("span",{key:n,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(a){return a.stopPropagation(),t.goTags(e)}}},[t._v(t._s(e))])})),0):t._e()],1)}),[],!1,null,"da1c0c82",null);e.a=c.exports},517:function(t,e,a){"use strict";a(510)},518:function(t,e,a){"use strict";a(511)},519:function(t,e,a){"use strict";a(512)},520:function(t,e,a){"use strict";a(30),a(6),a(45);var n=a(166),o=(a(168),a(275),{methods:{_getStoragePage:function(){var t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",JSON.stringify({page:1,path:""})),1):parseInt(e.page)},_setStoragePage:function(t){var e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}),r=a(508),s=a(516),i=Object(n.b)({components:{PageInfo:s.a,RecoIcon:r.b},props:["item","currentPage","currentTag"]}),c=(a(518),a(8)),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-item",on:{click:function(e){return t.$router.push(t.item.path)}}},[t.item.frontmatter.sticky?a("reco-icon",{attrs:{icon:"reco-sticky"}}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t.item.frontmatter.keys?a("reco-icon",{attrs:{icon:"reco-lock"}}):t._e(),t._v(" "),a("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)}),[],!1,null,"33a3a51a",null).exports,u=a(507),f=Object(n.b)({mixins:[o],components:{NoteAbstractItem:l},props:["data","currentTag"],setup:function(t,e){var a=Object(u.a)(),o=Object(n.h)(t).data,r=Object(n.g)(1),s=[],i=Object(n.a)((function(){var t=(r.value-1)*a.$perPage,e=r.value*a.$perPage;return(s=o.value.filter((function(t){return!1!==t.frontmatter.listShow}))).slice(t,e)}));return Object(n.d)((function(){r.value=a._getStoragePage()||1})),{currentPage:r,currentPageData:i,getCurrentPage:function(t){r.value=t,a._setStoragePage(t),e.emit("paginationChange",t)},newData:s}},watch:{$route:function(){this.currentPage=this._getStoragePage()||1}}}),p=(a(519),Object(c.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-wrapper"},[t._l(t.currentPageData,(function(e){return a("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),t._v(" "),a("pagation",{staticClass:"pagation",attrs:{total:t.newData.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],2)}),[],!1,null,"5e89eb51",null));e.a=p.exports},523:function(t,e,a){"use strict";a(515)},525:function(t,e,a){"use strict";var n=a(74),o=(a(167),a(166)),r=a(123),s=a(507),i=Object(o.b)({props:{currentTag:{type:String,default:""}},setup:function(t,e){var a=Object(s.a)();return{tags:Object(o.a)((function(){return[{name:a.$recoLocales.all,path:"/tag/"}].concat(Object(n.a)(a.$tagesList))})),tagClick:function(t){e.emit("getCurrentTag",t)},getOneColor:r.b}}}),c=(a(523),a(8)),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e,n){return a("span",{directives:[{name:"show",rawName:"v-show",value:!e.pages||e.pages&&e.pages.length>0,expression:"!item.pages || (item.pages && item.pages.length > 0)"}],key:n,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(a){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"015595fe",null);e.a=l.exports},548:function(t,e,a){},549:function(t,e,a){},550:function(t,e,a){},551:function(t,e,a){},552:function(t,e,a){},553:function(t,e,a){},554:function(t,e,a){},555:function(t,e,a){},556:function(t,e,a){},592:function(t,e,a){"use strict";a(548)},593:function(t,e,a){"use strict";a(549)},594:function(t,e,a){t.exports=a.p+"assets/img/bg.2cfdbb33.svg"},595:function(t,e,a){"use strict";a(550)},596:function(t,e,a){"use strict";a(551)},597:function(t,e,a){"use strict";a(552)},598:function(t,e,a){"use strict";a(553)},599:function(t){t.exports=JSON.parse('{"a":"1.6.11"}')},600:function(t,e,a){"use strict";a(554)},601:function(t,e,a){"use strict";a(555)},602:function(t,e,a){"use strict";a(556)},613:function(t,e,a){"use strict";a.r(e);a(44);var n=a(166),o=a(529),r=a(508),s=a(507),i=Object(n.b)({components:{NavLink:o.a,ModuleTransition:r.a},setup:function(t,e){var a=Object(s.a)();return{recoShowModule:Object(n.a)((function(){return a&&a.$parent.recoShowModule})),actionLink:Object(n.a)((function(){return a&&{link:a.$frontmatter.actionLink,text:a.$frontmatter.actionText}})),heroImageStyle:Object(n.a)((function(){return a.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}))}}}),c=(a(592),a(8)),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?a("h1",{style:{marginTop:t.$frontmatter.heroImage?"0px":"140px"}},[t._v("\n        "+t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco")+"\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,u=a(18),f=(a(95),a(525)),p=(a(25),a(46),a(52),a(543)),d=a.n(p),g=a(123),m=function(){var t=Object(s.a)(),e=Object(n.g)(!0),a=Object(n.f)({left:0,top:0});return Object(n.d)((function(){e.value=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)})),{popupWindowStyle:a,showDetail:function(n){var o=n.target;o.querySelector(".popup-window-wrapper").style.display="block";var r=o.querySelector(".popup-window"),s=document.querySelector(".info-wrapper"),i=o.clientWidth,c=r.clientWidth,l=r.clientHeight;if(e)a.left=(i-c)/2+"px",a.top=-l+"px",s.style.overflow="visible",t.$nextTick((function(){!function(t){var e=document.body.offsetWidth,n=t.getBoundingClientRect(),o=e-(n.x+n.width);if(o<0){var r=t.offsetLeft;a.left=r+o+"px"}}(r)}));else{var u=function(t){var e=document,a=t.getBoundingClientRect(),n=a.left,o=a.top;return{left:n+=e.documentElement.scrollLeft||e.body.scrollLeft,top:o+=e.documentElement.scrollTop||e.body.scrollTop}};s.style.overflow="hidden";var f=u(o).left-u(s).left;a.left=-f+(s.clientWidth-r.clientWidth)/2+"px",a.top=-l+"px"}},hideDetail:function(t){t.target.querySelector(".popup-window-wrapper").style.display="none"}}},h=Object(n.b)({setup:function(t,e){var a=Object(s.a)(),o=m(),r=o.popupWindowStyle,i=o.showDetail,c=o.hideDetail;return{dataAddColor:Object(n.a)((function(){var t=(a&&a.$themeConfig).friendLink;return(void 0===t?[]:t).map((function(t){return t.color=Object(g.b)(),t}))})),popupWindowStyle:r,showDetail:i,hideDetail:c,getImgUrl:function(t){var e=t.logo,n=void 0===e?"":e,o=t.email,r=void 0===o?"":o;return n&&/^http/.test(n)?n:n&&!/^http/.test(n)?a.$withBase(n):"//1.gravatar.com/avatar/".concat(d()(r||""),"?s=50&amp;d=mm&amp;r=x")}}}}),v=(a(593),Object(c.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(e,n){return a("div",{key:n,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[a("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"popup-window-wrapper"},[a("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.getImgUrl(e)}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?a("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"2dccff31",null).exports),_=a(520),b=a(565),w=Object(n.b)({components:{NoteAbstract:_.a,TagList:f.a,FriendLink:v,ModuleTransition:r.a,PersonalInfo:b.a,RecoIcon:r.b},data:function(){return{loveInfo:{deadline:"2018/09/07",daysNum:"∞",hoursNum:"∞",minutesNum:"∞",secondsNum:"∞"}}},setup:function(t,e){var o=Object(s.a)(),r=Object(n.f)({recoShow:!1,heroHeight:0}),i=Object(n.a)((function(){return o&&o.$parent.recoShowModule})),c=Object(n.a)((function(){return o.$frontmatter.heroImageStyle||{}})),l=Object(n.a)((function(){var t=o.$frontmatter.bgImage?o.$withBase(o.$frontmatter.bgImage):a(594),e={textAlign:"center",overflow:"hidden",background:"url(".concat(t,") center/cover no-repeat")},n=o.$frontmatter.bgImageStyle;return n?Object(u.a)(Object(u.a)({},e),n):e}));return Object(n.d)((function(){r.heroHeight=document.querySelector(".hero").clientHeight,r.recoShow=!0})),Object(u.a)(Object(u.a)({recoShowModule:i,heroImageStyle:c,bgImageStyle:l},Object(n.h)(r)),{},{getOneColor:g.b})},mounted:function(){this.loveTime()},methods:{paginationChange:function(t){var e=this;setTimeout((function(){window.scrollTo(0,e.heroHeight)}),100)},getPagesByTags:function(t){this.$router.push({path:t.path})},loveTime:function(){var t=this,e=Date.parse(new Date(this.loveInfo.deadline)),a=setInterval((function(){var a=Date.parse(new Date)-e;t.loveInfo.daysNum=Math.floor(a/864e5),t.loveInfo.hoursNum=Math.floor(a%864e5/36e5),t.loveInfo.minutesNum=Math.floor(a%36e5/6e4),t.loveInfo.secondsNum=Math.floor(a%6e4/1e3)}),1e3);this.$once("hook:beforeDestroy",(function(){clearInterval(a)}))}}}),C=(a(595),Object(c.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-blog"},[a("div",{staticClass:"hero",style:Object.assign({},t.bgImageStyle)},[a("div",[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{staticClass:"hero-img",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?a("h1",[t._v("\n          "+t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco")+"\n        ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?a("p",{staticClass:"description"},[t._v("\n          "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n        ")]):t._e()])],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[a("div",{staticClass:"blog-list"},[a("note-abstract",{attrs:{data:t.$recoPosts},on:{paginationChange:t.paginationChange}})],1),t._v(" "),a("div",{staticClass:"info-wrapper"},[a("div",{staticClass:"card-love"},[a("div",{staticClass:"avatar-info"},[a("img",{attrs:{alt:"love",src:t.$withBase("/images/love-man1.jpg")}}),t._v(" "),a("div",[t._v("L"),a("img",{attrs:{alt:"love",src:t.$withBase("/images/heart.png")}}),t._v("Z")]),t._v(" "),a("img",{attrs:{alt:"love",src:t.$withBase("/images/love-girl1.jpg")}})]),t._v(" "),a("p",[t._v(t._s(t.loveInfo.daysNum)+" 天 "+t._s(t.loveInfo.hoursNum)+" 时 "+t._s(t.loveInfo.minutesNum)+" 分 "+t._s(t.loveInfo.secondsNum)+" 秒")])]),t._v(" "),a("div",{staticClass:"info-box"},[a("PersonalInfo",{attrs:{listNum:t.$recoPosts}}),t._v(" "),a("h4",[a("reco-icon",{attrs:{icon:"reco-category"}}),t._v(" "+t._s(t.$recoLocales.category))],1),t._v(" "),a("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,n){return a("li",{key:n,staticClass:"category-item"},[a("router-link",{attrs:{to:e.path}},[a("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),a("hr"),t._v(" "),0!==t.$tags.list.length?a("h4",[a("reco-icon",{attrs:{icon:"reco-tag"}}),t._v(" "+t._s(t.$recoLocales.tag))],1):t._e(),t._v(" "),a("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?a("h4",[a("reco-icon",{attrs:{icon:"reco-friend"}}),t._v(" "+t._s(t.$recoLocales.friendLink))],1):t._e(),t._v(" "),a("FriendLink")],1)])])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),$={props:{show:{default:!0,type:Boolean}},data:function(){return{}}},y=(a(596),Object(c.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[this.show?e("div",{staticClass:"loading-page"},[e("div",{staticClass:"loading-box"},[e("p",[this._v("Welcome!")]),this._v(" "),e("span")])]):this._e()])}),[],!1,null,"e5426e0c",null).exports),O=(a(71),a(516)),S=a(53),j=a(93),k=a(74),I=(a(167),Object(n.b)({setup:function(t,e){var a=Object(s.a)();return{headers:Object(n.a)((function(){return a.$showSubSideBar?a.$page.headers:[]})),isLinkActive:function(t){var e=Object(S.e)(a.$route,a.$page.path+"#"+t.slug);return e&&setTimeout((function(){document.querySelector(".reco-side-".concat(t.slug)).scrollIntoView()}),300),e}}},render:function(t){var e=this;return t("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},Object(k.a)(this.headers.map((function(a){return t("li",{class:Object(j.a)({active:e.isLinkActive(a)},"level-".concat(a.level),!0),attr:{key:a.title}},[t("router-link",{class:Object(j.a)({"sidebar-link":!0},"reco-side-".concat(a.slug),!0),props:{to:"".concat(e.$page.path,"#").concat(a.slug)}},a.title)])}))))}})),T=(a(597),Object(c.a)(I,void 0,void 0,!1,null,"5ecb72e8",null).exports);function x(t,e,a){var n=[];!function t(e,a){for(var n=0,o=e.length;n<o;n++)"group"===e[n].type?t(e[n].children||[],a):a.push(e[n])}(e,n);for(var o=0;o<n.length;o++){var r=n[o];if("page"===r.type&&r.path===decodeURIComponent(t.path))return n[o+a]}}var M=Object(n.b)({components:{PageInfo:O.a,ModuleTransition:r.a,SubSidebar:T},props:["sidebarItems"],setup:function(t,e){var a=Object(s.a)(),o=Object(n.h)(t).sidebarItems,r=Object(n.a)((function(){return a.$parent.recoShowModule})),i=Object(n.a)((function(){var t=a.$frontmatter.isShowComments,e=(a.$themeConfig.valineConfig||{showComment:!0}).showComment;return!1!==e&&!1!==t||!1===e&&!0===t})),c=Object(n.a)((function(){var t=a||{},e=t.$themeConfig.valineConfig,n=t.$themeLocaleConfig.valineConfig||e;return n&&0!=n.visitor})),l=Object(n.a)((function(){return!1!==a.$themeConfig.lastUpdated&&a.$page.lastUpdated})),u=Object(n.a)((function(){return"string"==typeof a.$themeLocaleConfig.lastUpdated?a.$themeLocaleConfig.lastUpdated:"string"==typeof a.$themeConfig.lastUpdated?a.$themeConfig.lastUpdated:"Last Updated"})),f=Object(n.a)((function(){var t,e,n=a.$frontmatter.prev;return!1===n?void 0:n?Object(S.k)(a.$site.pages,n,a.$route.path):(t=a.$page,e=o.value,x(t,e,-1))})),p=Object(n.a)((function(){var t,e,n=a.$frontmatter.next;return!1===p?void 0:n?Object(S.k)(a.$site.pages,n,a.$route.path):(t=a.$page,e=o.value,x(t,e,1))})),d=Object(n.a)((function(){if(!1===a.$frontmatter.editLink)return!1;var t=a.$themeConfig,e=t.repo,n=t.editLinks,o=t.docsDir,r=void 0===o?"":o,s=t.docsBranch,i=void 0===s?"master":s,c=t.docsRepo,l=void 0===c?e:c;return l&&n&&a.$page.relativePath?function(t,e,a,n,o){if(/bitbucket.org/.test(t)){return(S.i.test(e)?e:t).replace(S.c,"")+"/src"+"/".concat(n,"/")+(a?a.replace(S.c,"")+"/":"")+o+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default")}return(S.i.test(e)?e:"https://github.com/".concat(e)).replace(S.c,"")+"/edit"+"/".concat(n,"/")+(a?a.replace(S.c,"")+"/":"")+o}(e,l,r,i,a.$page.relativePath):""})),g=Object(n.a)((function(){return a.$themeLocaleConfig.editLinkText||a.$themeConfig.editLinkText||"Edit this page"})),m=Object(n.a)((function(){return a.$showSubSideBar?{}:{paddingRight:"0"}}));return{recoShowModule:r,shouldShowComments:i,showAccessNumber:c,lastUpdated:l,lastUpdatedText:u,prev:f,next:p,editLink:d,editLinkText:g,pageStyle:m}}}),P=(a(598),Object(c.a)(M,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page",style:t.pageStyle},[a("ModuleTransition",{attrs:{delay:"0.08"}},[a("section",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}]},[a("div",{staticClass:"page-title"},[a("h1",{staticClass:"title"},[t._v(t._s(t.$page.title))]),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1),t._v(" "),a("Content",{staticClass:"theme-reco-content"})],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule?a("footer",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&(t.prev||t.next)?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e()],1):t._e()])]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule?a("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1),t._v(" "),a("ModuleTransition",[t.recoShowModule?a("SubSidebar",{staticClass:"side-bar"}):t._e()],1)],1)}),[],!1,null,null,null).exports),L=a(599),N=Object(n.b)({components:{RecoIcon:r.b},setup:function(t,e){var a=Object(s.a)(),o=Object(n.a)((function(){var t=a.$themeConfig.valineConfig,e=a.$themeLocaleConfig.valineConfig||t;return e&&0!=e.visitor}));return{version:L.a,showAccessNumber:o}}}),D=(a(600),Object(c.a)(N,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("span",[a("reco-icon",{attrs:{icon:"reco-theme"}}),t._v(" "),a("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[t._v(t._s("vuepress-theme-reco@"+t.version))])],1),t._v(" "),t.$themeConfig.record?a("span",[a("reco-icon",{attrs:{icon:"reco-beian"}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])],1):t._e(),t._v(" "),a("span",[a("reco-icon",{attrs:{icon:"reco-copyright"}}),t._v(" "),a("a",[t.$themeConfig.author?a("span",[t._v(t._s(t.$themeConfig.author))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear&&t.$themeConfig.startYear!=(new Date).getFullYear()?a("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])],1),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.showAccessNumber,expression:"showAccessNumber"}]},[a("reco-icon",{attrs:{icon:"reco-eye"}}),t._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?a("p",{staticClass:"cyber-security"},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e(),t._v(" "),a("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"7f1aee5d",null).exports),B=a(524),A=a(521),X=Object(n.b)({mixins:[A.a],components:{HomeBlog:C,Home:l,Page:P,Common:B.a,Footer:D,LoadingPage:y},data:function(){return{loading:!0}},setup:function(t,e){var a=Object(s.a)();return{sidebarItems:Object(n.a)((function(){var t=a.$page,e=a.$site,n=a.$localePath;return t?Object(S.l)(t,t.regularPath,e,n):[]})),homeCom:Object(n.a)((function(){var t=(a.$themeConfig||{}).type;return t?"blog"==t?"HomeBlog":t:"Home"}))}},created:function(){var t=this;setTimeout((function(){t.loading=!1}),1e3)}}),U=(a(601),a(602),Object(c.a)(X,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Common",{attrs:{sidebarItems:t.sidebarItems,showModule:t.recoShowModule}},[a("LoadingPage",{attrs:{show:t.loading}}),t._v(" "),t.$frontmatter.home?a(t.homeCom,{tag:"component"}):a("Page",{attrs:{"sidebar-items":t.sidebarItems}}),t._v(" "),t.$frontmatter.home?a("Footer",{staticClass:"footer"}):t._e()],1)}),[],!1,null,null,null));e.default=U.exports}}]);