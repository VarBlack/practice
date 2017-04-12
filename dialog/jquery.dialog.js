;(function($){
	class Dialog{
		constructor(obj){
			this.newObj = {
				title : '这是一个弹框',
				content : '这是默认的内容',
				okValue : '确定',
				cancelValue : '取消',
				width : 300,
				height : 140,
				okHandle:function(){
					this.dialog.remove();
				},
				cancelHandle:function(){
					this.dialog.remove();
				}
			}
			$.extend(true, this.newObj, obj);
			
			
			this.newObj.left = this.newObj.left || ($(document).innerWidth()- this.newObj.width)/2;
			this.newObj.top = this.newObj.top || ($(document).innerHeight()- this.newObj.height)/2;

			this.init();
		}
		
		init(){
			
			this.dialog = this.createDialog();
			$('body').append(this.dialog);
			this.dialogStyle();
			this.okElement = this.dialog.find('.ok');
			this.cancelElement = this.dialog.find('.cancel');
			this.closeElement = this.dialog.find('.close');
			this.addEvent();
		}
		
		html(){
			return `<div class="dialogTop">
						<div class="title">${this.newObj.title}</div>
				        <span class="close" title="关闭">×</span>
					</div>
			        <div class="content">
			            ${this.newObj.content}
			        </div>
			        <div class="pop-btns">
				        <button class="ok">${this.newObj.okValue}</button>
				        <button class="cancel">${this.newObj.cancelValue}</button>
			        </div>`
		}
		createDialog(){
			var div = $('<div></div>');
			div.addClass('full-pop');
			div.html(this.html())
			return div;
		}
		dialogStyle(){
			this.dialog.css({
				width:this.newObj.width,
				height:this.newObj.height,
				left:this.newObj.left,
				top:this.newObj.top
			})
		}
		
		addEvent(){
			this.okElement.on('click',this.newObj.okHandle.bind(this));
			this.cancelElement.on('click',this.newObj.cancelHandle.bind(this));
			this.closeElement.on('click',function(){
				this.dialog.remove();
			}.bind(this))
		}
	}
	
//	$.dialog = function(obj){
//		new Dialog(obj);
//	}
	$.extend({
		dialog : function(obj){
			new Dialog(obj);
		}
	});
})(jQuery)
