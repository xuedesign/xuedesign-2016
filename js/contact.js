//justfonts
var _jf = _jf || [];_jf.push(['p','42818']);_jf.push(['initAction',true]);_jf.push(['_setFont','xingothic-tc-w4','alias','xingothic-tc']);_jf.push(['_setFont','xingothic-tc-w4','weight',400]);_jf.push(['_setFont','xingothic-tc-w5','css','.xingothic-tc-w5']);_jf.push(['_setFont','xingothic-tc-w5','alias','xingothic-tc']);_jf.push(['_setFont','xingothic-tc-w5','weight',500]);_jf.push(['_setFont','jf-jinxuan-medium','css','.jf-jinxuan-medium']);_jf.push(['_setFont','jf-jinxuan-medium','alias','jf-jinxuan']);_jf.push(['_setFont','jf-jinxuan-medium','weight',500]);_jf.push(['_setFont','jf-jinxuan-bold','css','.jf-jinxuan-bold']);_jf.push(['_setFont','jf-jinxuan-bold','alias','jf-jinxuan']);_jf.push(['_setFont','jf-jinxuan-bold','weight',700]);(function(A,p,c,m,l,q,r,h,B,D){var b=A._jf;if(b.constructor!==Object){var t=!0,u=function(a){var f=!0,e;for(e in b)b[e][0]==a&&(f&&(f=f&&!1!==b[e][1].call(b)),b[e]=null,delete b[e])},v=/\S+/g,w=/[\t\r\n\f]/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,n="".trim,x=n&&!n.call("\ufeff\u00a0")?function(a){return null==a?"":n.call(a)}:function(a){return null==a?"":(a+"").replace(C,"")},k=function(a){var f,b,g;if("string"===typeof a&&a&&(a=(a||"").match(v)||[],f=h[c]?(" "+h[c]+" ").replace(w," "):" ")){for(g=0;b=a[g++];)0>f.indexOf(" "+b+" ")&&(f+=b+" ");h[c]=x(f)}},d=function(a){var b,e,g;if(0===arguments.length||"string"===typeof a&&a){var d=(a||"").match(v)||[];if(b=h[c]?(" "+h[c]+" ").replace(w," "):""){for(g=0;e=d[g++];)for(;0<=b.indexOf(" "+e+" ");)b=b.replace(" "+e+" "," ");h[c]=a?x(b):""}}},y;b.addScript=y=function(b,f,e,g,d,c){d=d||function(){};c=c||function(){};var a=p.createElement("script"),h=p.getElementsByTagName("script")[0],k,m=!1,l=function(){a.src="";a.parentNode.removeChild(a);a=a.onerror=a.onload=a.onreadystatechange=null};g&&(k=setTimeout(function(){l();c()},g));a.type=f||"text/javascript";a.async=e;a.onload=a.onreadystatechange=function(b,c){m||a.readyState&&!/loaded|complete/.test(a.readyState)||(m=!0,g&&clearTimeout(k),l(),c||d())};a.onerror=function(a,b,d){g&&clearTimeout(k);l();c();return!0};a.src=b;h.parentNode.insertBefore(a,h)};for(var z in b)"initAction"==b[z][0]&&(t=b[z][1]);b.push(["_eventPreload",function(){1==t&&k(m);y(B,null,!1,3E3,null,function(){u("_eventInactived")})}]);b.push(["_eventReload",function(){d(r);d(q);k(l)}]);b.push(["_eventActived",function(){d(m);d(l);k(q)}]);b.push(["_eventInactived",function(){d(m);d(l);k(r)}]);u("_eventPreload")}})(this,this.document,"className","jf-loading","jf-reloading","jf-active","jf-inactive",this.document.getElementsByTagName("html")[0],"//d3gc6cgx8oosp4.cloudfront.net/js/stable/v/5.0.7/id/166619756143");

//google map
loadjs(['https://maps.googleapis.com/maps/api/js?key=AIzaSyB1SdPebAPswNZfePSNDoGGSlh1ZPUP3Ok&callback=initMap', 
        'script/lib/googlemap.js']);

//icon文字
loadjs('https://kit.fontawesome.com/daece105d8.js');

//wow載入動畫
loadjs('script/lib/wow.min.js', function() {
  new WOW().init();
});

//圖片延遲載入
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//chatcode
loadjs('script/lib/chatcode.js');

//頂端隱藏選單
$(function(){
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			
			//當高度小於100時，關閉區塊	
			if($this_Top < 150){
				$('#top-bar').stop().animate({top:"-65px"});
				}
			if($this_Top > 150){
				$('#top-bar').stop().animate({top:"0px"});
						
			}
		}).scroll();
	});
});

//pwa
if('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/sw.js');
	});
}

