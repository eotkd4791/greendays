(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-402e8e25"],{"24cc":function(t,e,n){"use strict";var i=n("b91d"),s=n.n(i);s.a},3468:function(t,e,n){"use strict";var i=n("dcaf"),s=n.n(i);s.a},"5e08":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"customer-service__container"},[n("LeftLink"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},s=[],r=n("ec36"),a={components:{LeftLink:r["a"]}},c=a,u=(n("24cc"),n("2877")),o=Object(u["a"])(c,i,s,!1,null,"899cc08c",null);e["default"]=o.exports},b91d:function(t,e,n){},dcaf:function(t,e,n){},ec36:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"left-link"},[n("ul",{ref:"lists",staticClass:"left-link__ul",on:{click:t.activatedRouterLink}},t._l(t.linkList,(function(e){return n("RouterLink",{key:e.name,staticClass:"left-link__li",attrs:{tag:"li",to:e.routePath}},[t._v(" "+t._s(e.name)+" ")])})),1)])},s=[],r=(n("caad"),n("2532"),{getCustomerLinks:function(){return[{routePath:"/customerservice",name:"고객센터"},{routePath:"/customerservice/logi_guide",name:"배송가이드"},{routePath:"/customerservice/faq",name:"자주묻는질문"},{routePath:"/customerservice/terms",name:"이용약관"},{routePath:"/customerservice/private_info_policy",name:"개인정보취급방침"}]},getUserInfoLinks:function(){return[{routePath:"/user/edit/:userId",name:"내 정보 관리"},{routePath:"/user/total_order_refund/:userId",name:"주문 및 반품 내역"},{routePath:"/user/point/:userId",name:"포인트"}]}}),a={data:function(){return{linkList:[]}},computed:{getCustomerLinks:r.getCustomerLinks,getUserInfoLinks:r.getUserInfoLinks},methods:{activatedRouterLink:function(t){var e=this.$refs.lists.firstChild,n=e.classList,i=Array.prototype.includes;e===t.target?i.call(n,"RouterLink-exact-active")||n.add("RouterLink-exact-active"):i.call(n,"RouterLink-exact-active")&&n.remove("RouterLink-exact-active")}},created:function(){this.linkList=this.$route.path.includes("customerservice")?this.getCustomerLinks:this.getUserInfoLinks},mounted:function(){this.$refs.lists.firstChild.classList.add("RouterLink-exact-active")}},c=a,u=(n("3468"),n("2877")),o=Object(u["a"])(c,i,s,!1,null,"51f2c059",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-402e8e25.5a3b5a3d.js.map