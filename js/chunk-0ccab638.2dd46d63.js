(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ccab638"],{"00bc":function(e,t,a){e.exports=a.p+"img/python.28797646.png"},"0b33":function(e,t,a){},1064:function(e,t,a){"use strict";var i=a("0b33"),n=a.n(i);n.a},"37c6":function(e,t,a){"use strict";var i=a("8e36");t["a"]=i["a"]},4844:function(e,t,a){"use strict";var i=a("7886"),n=a.n(i);n.a},"615b":function(e,t,a){},"6ece":function(e,t,a){},7886:function(e,t,a){},"8e36":function(e,t,a){"use strict";a("6ece");var i=a("0789"),n=a("a9ad"),s=a("fe6c"),r=a("a452"),o=a("7560"),c=a("80d2"),l=a("58df");const d=Object(l["a"])(n["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),r["a"],o["a"]);t["a"]=d.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(c["c"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(c["c"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,left:Object(c["c"])(this.normalizedValue,"%"),width:Object(c["c"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?i["b"]:i["c"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(c["c"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(c["i"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(c["c"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"99d9":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var i=a("80d2"),n=a("b0af");const s=Object(i["e"])("v-card__actions"),r=Object(i["e"])("v-card__text"),o=Object(i["e"])("v-card__title");n["a"]},b0af:function(e,t,a){"use strict";a("615b");var i=a("10d2"),n=a("2b0e"),s=a("37c6"),r=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),o=a("1c87"),c=a("58df");t["a"]=Object(c["a"])(r,o["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...o["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const e={...i["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=r.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render(e){const{tag:t,data:a}=this.generateRouteLink();return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},b361:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("navbar"),i("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,color:"deep-purple accent-4"}}),i("br"),i("br"),i("v-row",{staticClass:"student mt-1",attrs:{justify:"space-around"}},[i("v-col",{attrs:{id:"training-header",md:"6"}},[i("h2",[e._v("Mari investasikan waktu anda untuk belajar !!")]),i("p",[e._v("Ada beberapa Pilihan Program yang bisa kamu ikuti. kamu juga bisa memilih metode pelatihan secara intensif, kelompok bahkan private.")]),i("p",[e._v("Jangan menaruh harapan sama doi yang gapeka sama kode kamu, mulai sekarang taruh harapan yang cerah dengan belajar koding di Muonlab! Yuk, daftar sekarang juga!\n            ")])]),i("v-col",{attrs:{md:"4"}},[i("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:a("00bc")}})])],1),i("price",{directives:[{name:"show",rawName:"v-show",value:e.content,expression:"content"}]}),i("foot",{directives:[{name:"show",rawName:"v-show",value:e.content,expression:"content"}]})],1)},n=[],s=a("2c35"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"text-center col-lg-6"},[a("h1",[e._v("Daftar Training")]),a("p",[e._v("\n                \tDalam Training ini, kamu akan dilatih hingga bisa menguasai beberapa framework. selain itu, kamu juga akan belajar disertai dengan project sehingga kamu bisa merasakan secara langsung.\n                ")])])],1),a("br"),a("v-row",{staticClass:"service",attrs:{justify:"center"}},e._l(e.data,(function(t){return a("v-col",{key:t.id,staticClass:" col-lg-3",attrs:{md:"6",sm:"12",cols:"12"}},[a("v-card",{attrs:{outlined:"",flat:"true"}},[a("v-card-title",{staticClass:"title-service mb-2"},[a("v-icon",{staticStyle:{"font-size":"60px",color:"#1565C0"}},[e._v(e._s(t.mdi))]),e._v(e._s(t.title)+"\n                    ")],1),a("v-card-text",{staticClass:"text"},[e._v(e._s(t.desc_1))]),a("v-card-actions",[a("v-btn",{staticStyle:{color:"#F44336"},attrs:{text:"",rounded:"true"}},[a("v-icon",[e._v("mdi-eye-settings")]),e._v("  Lihat")],1)],1)],1)],1)})),1)],1)},o=[],c={name:"Price",data(){return{data:[{title:"From Zero to Hero: Python Basic",price:"1.500.000",discount:"700.000",desc_1:"Durasi selama 6 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Flask, OOP, ORM, SQL Database and Chat Apps",link:"https://forms.gle/nRWpEdXzu9MdH8f69"},{title:"Python Intermediate",soon:"Coming Soon",desc_1:"Durasi selama 6 Minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Mongodb, Complex Monolith and Microservices"},{title:"Python Advanced",soon:"Coming Soon",desc_1:"Durasi selama 7 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Computer Vision and Machine Learning"},{title:"IOT",soon:"Coming Soon",desc_1:"Durasi selama 7 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Computer Vision and Machine Learning"},{title:"Arduino",soon:"Coming Soon",desc_1:"Durasi selama 7 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Computer Vision and Machine Learning"},{title:"Raspberry Pi",soon:"Coming Soon",desc_1:"Durasi selama 7 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Computer Vision and Machine Learning"},{title:"Web Development",soon:"Coming Soon",desc_1:"Durasi selama 7 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Computer Vision and Machine Learning"},{title:"Dekstop Application",soon:"Coming Soon",desc_1:"Durasi selama 7 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Computer Vision and Machine Learning"},{title:"Simulation",soon:"Coming Soon",desc_1:"Durasi selama 7 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Computer Vision and Machine Learning"},{title:"Machine Learning",soon:"Coming Soon",desc_1:"Durasi selama 7 minggu",desc_2:"Dilakukan secara full onsite",desc_3:"Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert",desc_4:"Computer Vision and Machine Learning"}]}}},l=c,d=(a("1064"),a("2877")),u=a("6544"),h=a.n(u),g=a("8336"),m=a("b0af"),p=a("99d9"),v=a("62ad"),b=a("a523"),_=a("132d"),f=a("0fd9"),k=Object(d["a"])(l,r,o,!1,null,"cc95819a",null),C=k.exports;h()(k,{VBtn:g["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:v["a"],VContainer:b["a"],VIcon:_["a"],VRow:f["a"]});var y=a("83d0"),V={name:"student",components:{Navbar:s["a"],Price:C,Foot:y["a"]},data(){return{loading:!0,content:!1}},created(){this.loader()},methods:{loader(){setTimeout(()=>(this.loading=!1,this.content=!0),500)}}},B=V,D=(a("4844"),a("8e36")),x=Object(d["a"])(B,i,n,!1,null,"8c4b5a9a",null);t["default"]=x.exports;h()(x,{VCol:v["a"],VContainer:b["a"],VProgressLinear:D["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-0ccab638.2dd46d63.js.map