class Drag{
	
	//初始函数
	drag(ele){
		this.ele = ele;
		this.ele.addEventListener('mousedown',this.downFn.bind(this));
	}
	
	downFn(ev){
		this.disX = ev.clientX - this.ele.offsetLeft;
		this.disY = ev.clientY - this.ele.offsetTop;
		
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
	}
}
