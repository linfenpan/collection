// ========================================
// JS ScrollBar
// ========================================
// author：linfenpan
// date：2013-10-28
// ========================================
// Example: new ScrollBar(element, scrollBar element);
// scrollBar element must contain the children: 
// 		<div class="scrollbar-track"> <div class="scrollbar-bit"></div> </div>
//	when scrolling, the "scrollbar-bit" will add class "scrollbar-bit-down"
//	the target element must set overflow:hidden and height should be fix number
// ========================================
;(function(win, dom){
	//scroll element pretreatment
	function jsScroller(elem) {		
		this.reset(elem);
	};
	jsScroller.prototype = {
		//Private methods
		_setPos: function (y) {
			if (y > this.total.h - this.view.h) 
				y = this.total.h - this.view.h;
			if (y < 0) y = 0;
			this._y = y;
			this.content.scrollTop = y;
		},
		//public methods
		reset: function (el) {
			el.className += " scroller-container";
			this.view = {h: el.clientHeight};
			this.total	 = {h: el.scrollHeight};
			//record scroll-y distance
			this._y = 0;
			//variables setting
			this.content = el;
			this.scrollTimer = null;
		},
		scrollBy: function (y) {
			this._setPos(this._y + y);
		},
		scrollTo: function (y) {
			this._setPos(y);
		}
	};
	//scroll bar 
	function jsScrollbar(elem, scroller) {
		this.reset(elem, scroller);
	};
	jsScrollbar.prototype = {
		//private method
		_addEvent: function (el, evt, fun) {
			if (el.addEventListener) el.addEventListener(evt, fun, false);
			else if (el.attachEvent) el.attachEvent('on'+ evt, fun);
			else el['on'+ evt] = fun;
		},
		_removeEvent: function(el, evt, fun) {
			if(el.removeEventListener)el.removeEventListener(evt, fun, false);
			else if (el.detachEvent) o.detachEvent('on'+ evt, fun);
			else el['on'+ evt] = null;
		},
		_proxy: function(func){
			var self = this;
			return function(){
				func.apply(self, arguments);
			};
		},
		_find: function(cn, el) {
			var kids = el.childNodes;
			for(var i = 0; i < kids.length; i++){
				if(new RegExp("(\\s|^)" + cn + "(\\s|$)").test(kids[i].className)) {
					return kids[i];
				}
			}
		},
		_findOffsetTop: function(o){
			return o.offsetTop;
		},
		_setPos: function(y){
			if (y > this._scr.total.h - this._scr.view.h) 
				y = this._scr.total.h - this._scr.view.h;
			if (y < 0) y = 0;
			var cy = y * this._per;
			this._y = y;
			this._bit.style.top = cy + "px";
		},
		//private object
		_handler_:{
			mousewheel: function(e){
				e = e ? e : event;
				//default: down
				var dir = 1;
				//up
				if (e.wheelDelta >= 120) dir = -1;			
				e.returnValue = false;
				this.scrollBy(dir * (this._perScroll || 20));
			},
			mousedown: function(evt){
				evt = evt || event;
				this._cy = evt.clientY - this._y * this._per;
				this._scrolling = true;
				this.addClass(this._bit, "scrollbar-bit-down");
				return false;
			},
			mouseup: function(){
				if(!this._scrolling)return;
				this._scrolling = false;
				this._cy = 0;
				this.removeClass(this._bit, "scrollbar-bit-down");
			},
			mousemove: function(evt){
				if(!this._scrolling)return;
				evt = evt || event;
				this.scrollTo((evt.clientY - this._cy) / this._per);
			}
		},
		//public method
		addClass: function(el, cn){
			var reg = new RegExp("(\\s|^)" + cn + "(\\s|$)");
			if(!reg.test(el.className)){
				el.className += " " + cn;
			}
		},
		removeClass: function(el, cn){
			var reg = new RegExp("(\\s|^)" + cn + "(\\s|$)");
			el.className = el.className.replace(reg, " ");
		},
		scrollBy: function(y){
			this._scr.scrollBy(y);
			this._setPos(this._y + y);
		},
		scrollTo: function(y){
			this._scr.scrollTo(y);
			this._setPos(y);
		},
		setRoll: function(per){
			this._perScroll = per;
		},
		reset: function (el, sc) {
			//滚动轴元素
			this.content = el;
			//滚动元素
			this._scr = sc;

			this._track = this._find("scrollbar-track", this.content);
			this._bit = this._find("scrollbar-bit", this._track);
			
			if(this._scr.view.h >= this._scr.total.h){
				this._track.style.display = "none";
				return;
			}else{
				this._track.style.display = "block";
			}
			
			this._Height = this._track.clientHeight;
			this._itemH = this._bit.clientHeight;
			
			//重置bit的高度
			var sub_H = this._scr.total.h - this._scr.view.h;
			if(this._Height - this._itemH > sub_H){
				this._itemH = this._Height - sub_H;
				this._bit.style.height = this._itemH + "px";
			};
			
			//every time scroll px
			this._per = (this._Height - this._itemH) / (this._scr.total.h - this._scr.view.h);
			this._y = 0;
			//track's clientY
			this._cy = 0;
			//track's top
			this._ty = 0;
			//default scrolling distance
			this._perScroll = 20;
			
			var body = (document.documentElement || document.body);
			//bind & rebind event
			this._addEvent(this._scr.content, "mousewheel", this._proxy(this._handler_.mousewheel));
			this._addEvent(this._track, "mousewheel", this._proxy(this._handler_.mousewheel));
			this._addEvent(this._bit, "mousedown", this._proxy(this._handler_.mousedown));
			this._addEvent(body, "mousemove", this._proxy(this._handler_.mousemove));
			this._addEvent(body, "mouseup", this._proxy(this._handler_.mouseup));
			//prevent default
			this._bit.ondragstart = this._bit.onmousedown = function () {return false;};
			
			this._scrolling = false;
		}
	};

	function ScrollBar(cont, bar){
		this.reset(cont, bar);
	};
	ScrollBar.prototype = {
		setRoll: function(per){
			this.scrollbar.setRoll(per);
		},
		reset: function(cont, bar){
			this.scroller = new jsScroller(cont);
			this.scrollbar = new jsScrollbar(bar, this.scroller);
		}
	};
	win.ScrollBar = ScrollBar;
})(window, document);