class SalesOffices {
	constructor(){
		this.books = {};
	}
	//订阅
	subscribe(statuss,handle){
		if(!this.books[statuss]){
			this.books[statuss] = []
		}
		this.books[statuss].push(handle)
	}
	//退订
	unsubscribe(statuss,handle){
		if( this.books[statuss] instanceof Array ){
			for( var i = 0; i < this.books[statuss].length; i++ ){
				if(this.books[statuss][i] === handle){
					this.books[statuss].splice(i,1);
					break;
				}
			}
		}
	}
	//发布
	publish(statuss){
		if(this.books[statuss] instanceof Array){
			this.books[statuss].forEach(function(item,i){
				item()
			})
		}
	}
}

class Drag extends SalesOffices{
//	constructor(){
//		super();
//	}	
	//初始函数
	drag(ele){
		this.ele = ele;
		this.ele.addEventListener('mousedown',this.downFn.bind(this));
	}
	
	downFn(ev){
		ev.preventDefault();
		this.disX = ev.clientX - this.ele.offsetLeft;
		this.disY = ev.clientY - this.ele.offsetTop;
		this.publish('down');
		this.move = this.moveFn.bind(this);
		this.up = this.upFn.bind(this);
		document.addEventListener('mousemove',this.move);
		document.addEventListener('mouseup',this.up);
		
	}
	moveFn(ev){
		this.l = ev.clientX - this.disX;
		this.t = ev.clientY - this.disY;
		
		this.ele.style.left = this.l + 'px';
		this.ele.style.top = this.t + 'px';
		this.publish('move');
	}
	upFn(){
		document.removeEventListener(
			'mousemove',
			this.move
		)
		document.removeEventListener(
			'mouseup',
			this.up
		)
		this.publish('up');
	}
}
