window.__require=function e(t,i,n){function a(o,s){if(!i[o]){if(!t[o]){var r=o.split("/");if(r=r[r.length-1],!t[r]){var h="function"==typeof __require&&__require;if(!s&&h)return h(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+o+"'")}o=r}var l=i[o]={exports:{}};t[o][0].call(l.exports,function(e){return a(t[o][1][e]||e)},l,l.exports,e,t,i,n)}return i[o].exports}for(var c="function"==typeof __require&&__require,o=0;o<n.length;o++)a(n[o]);return a}({animationCallBack:[function(e,t){"use strict";cc._RF.push(t,"33c40FWOD1EfZl4GuFtCr8G","animationCallBack"),cc.Class({extends:cc.Component,properties:{quequeTalk:cc.Node},onLoad:function(){},queueCallBack:function(){cc.log("\u8fdb\u5165\u56de\u8c03\u65b9\u6cd5"),this.quequeTalk.active=!0},start:function(){}}),cc._RF.pop()},{}],loading:[function(e,t){"use strict";cc._RF.push(t,"f953c6sycZLybM70jIPMdn5","loading"),cc.Class({extends:cc.Component,properties:{pross:cc.Label,clickTipsImage:cc.Node,clickTipsTouch:cc.Node},onLoad:function(){var e=this;this.num=0,this.pross.schedule(function(){e.num++,e.num>100&&(e.num=100),e.pross.string=e.num+"%"},.2),cc.director.preloadScene("main",function(){},function(){cc.director.loadScene("main")})},onDestroy:function(){this.pross.unscheduleAllCallbacks()},start:function(){}}),cc._RF.pop()},{}],main:[function(e,t){"use strict";cc._RF.push(t,"51999OM4OlDBrEC+OD2tZoA","main"),cc.Class({extends:cc.Component,properties:{scroll_view:cc.ScrollView,node_scroll:cc.Node,ani_main:cc.Animation,pageView:cc.PageView,selectNode:cc.Node,creatShareNode:cc.Node,frameList:{type:cc.SpriteFrame,default:[]},again:cc.Node,sharebtn:cc.Node,touchNode:cc.Node,tipText:cc.Node,shareLayout:cc.Node,leftTips:cc.Node},onLoad:function(){cc.vv={},cc.vv.main=this,this.node_scroll.on("finished",function(){cc.log("\u6d4b\u8bd5")}),this.time=0,this.bAni1=!0,this.pageViewIndex=0,this.bAniQueue=!0,this.bAniFerry=!0,this.bAniHands=!0,this.bAniWorker=!0,this.bAniCar=!0,this.bAniHelp=!0,this.bAniEnd=!0,this.bAniWoman=!0,this.bAnisound=!0},start:function(){this.animState=this.ani_main.play(),this.animState.speed=0},fun_scrolling:function(){var e=this.scroll_view.getScrollOffset().y/this.scroll_view.getMaxScrollOffset().y*30,t=this.node;if(e>=2&&e<=3&&this.bAni1&&(t.getChildByName("first").getChildByName("people").getComponent(cc.Animation).play("peopleWalk"),this.bAni1=!1),e>=10.5&&e<=12.5&&this.bAniFerry&&(t.getChildByName("fifth").getChildByName("ferry").getComponent(cc.Animation).play("ferry"),this.bAniFerry=!1),e>=13.8&&e<=15.8&&this.bAniHands&&(t.getChildByName("six").getChildByName("shakeHand").getComponent(cc.Animation).play("shakeHand"),this.bAniHands=!1),e>=18.2&&e<=20&&this.bAniEnd&&(t.getChildByName("nine").getChildByName("backgroundQianJing").getChildByName("woman").getComponent(cc.Animation).play("woman"),this.bAniWoman=!1),e>=19.5&&e<=20&&this.bAniCar){var i=t.getChildByName("nine").getChildByName("car1").getComponent(cc.Animation),n=t.getChildByName("nine").getChildByName("car2").getComponent(cc.Animation);i.play("car"),n.play("car2"),this.bAniCar=!1}e>=28&&e<=30&&this.bAniEnd&&(t.getChildByName("twelve").getChildByName("New Node").getComponent(cc.Animation).play("fc"),this.bAniEnd=!1),this.ani_main.setCurrentTime(e)},onclickFunc:function(e,t){var i=this.ani_main.node;switch(t){case"1":this.bAniQueue&&i.getChildByName("second").getChildByName("queue").getComponent(cc.Animation).play("queue");break;case"2":i.getChildByName("seven").getComponent(cc.Animation).play("worker"),i.getChildByName("seven").getChildByName("talk").active=!0;break;case"3":i.getChildByName("nine").getChildByName("help").getComponent(cc.Animation).play("help");break;case"createshare":var n=this.pageView.getCurrentPageIndex();this.creatShareNode.getComponent(cc.Sprite).spriteFrame=this.frameList[n],this.touchNode.active=!0,this.touchFlag=!1,this.touchStartTime=null,this.touchNode.on(cc.Node.EventType.TOUCH_START,this.touchStart,this),this.touchNode.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this),this.creatShareNode.parent.active=!0;break;case"shareLayout":e.target.active=!1;break;default:this.selectNode.active=!0}e.target.active=!1},touchStart:function(){this.touchFlag=!0,this.touchStartTime=new Date,cc.log("\u89e6\u6478")},touchHold:function(){this.touchFlag&&null!=this.touchStartTime&&(new Date).getTime()-this.touchStartTime.getTime()>300&&(cc.log("\u957f\u6309"),this.touchFlag=!1,this.sharebtn.active=!1,this.again.active=!1,this.tipText.active=!1,this.initRender())},touchEnd:function(){this.touchFlag=!1,this.touchStartTime=null},pageViewCtr:function(e){cc.log(e.target.name),"left"==e.target.name?this.pageViewIndex--:this.pageViewIndex++,this.pageViewIndex>5&&(this.pageViewIndex=5),this.pageViewIndex<0&&(this.pageViewIndex=0),this.pageView.scrollToPage(this.pageViewIndex)},onclickEndButton:function(e){"again"==e.target.name?(cc.log("\u4f60\u597d"),cc.director.loadScene("loading")):this.shareLayout.active=!0},initRender:function(){var e=new cc.Node;e.parent=cc.director.getScene().getChildByName("Canvas");var t=e.addComponent(cc.Camera);t.enabled=!1;var i=cc.winSize.width,n=cc.winSize.width*cc.view.getFrameSize().height/cc.view.getFrameSize().width,a=cc.size(i,n);cc.v2(0,0),t.zoomRatio=1;var c=new cc.RenderTexture,o=cc.game._renderContext;c.initWithSize(a.width,a.height,o.STENCIL_INDEX8),t.targetTexture=c,this._camera=t,this._texture=c,this.btn_image_knife()},btn_image_knife:function(){var e=this;this._camera.render(void 0),this.sharebtn.active=!0,this.again.active=!0,this.tipText.active=!0;var t=this._texture,i=t.readPixels(),n=t.width,a=t.height,c=document.createElement("canvas"),o=c.getContext("2d");c.width=n,c.height=a;for(var s=4*n,r=0;r<a;r++){for(var h=a-1-r,l=o.createImageData(n,1),d=h*n*4,u=0;u<s;u++)l.data[u]=i[d+u];o.putImageData(l,0,r)}var m=c.toDataURL("image/jpeg"),p=document.createElement("img");p.src=m,p.id="capture",p.alt="capture",p.width=n,p.height=a,p.style.position="fixed",p.style.top="50%",p.style.left="50%",p.style.opacity=0,p.style.transform="translate(-50%,-50%)",p.onclick=function(){1==e.shareLayout.active&&(e.shareLayout.active=!1)};var g=document.createElement("div");g.id="div_btn",g.style.position="fixed",g.style.top="50%",g.style.left=0,g.style.width="100%",g.style.height="584px",g.appendChild(p);var y=document.createElement("div");y.id="btn_again",y.style.width="100px",y.style.height="150px",y.style.position="absolute",y.style.bottom="230px",y.style.left="30px",g.appendChild(y),y.onclick=function(){history.go(0)};var f=document.createElement("div");f.id="btn_more",f.style.width="100px",f.style.height="150px",f.style.position="absolute",f.style.bottom="490px",f.style.left="30px",g.appendChild(f);var C=document.getElementById("Cocos2dGameContainer");C.appendChild(g),cc.vv.divGame=C,e.sharebtn.active=!0,e.again.active=!0,e.tipText.active=!0,f.onclick=function(){e.shareLayout.active=!0}},onDestroy:function(){},update:function(){this.touchFlag&&this.touchHold()}}),cc._RF.pop()},{}]},{},["animationCallBack","loading","main"]);