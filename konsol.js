
var yazi_index = 0;

//1000
//300

function konsol(x,y){
	
	this.x=x;
	this.y=y;
	this._yazi = [];
	this._yazi_y = 0;
	
	this.yaz = function(yazi){
	this._yazi[yazi_index] = createP(yazi);
	this._yazi[yazi_index].position(this.x,this.y+this._yazi_y);
	yazi_index++;
	this._yazi_y=this._yazi_y+15;
	}
	
	this.temizle = function(){
		for(let temizle = 0; temizle<this._yazi.length;temizle++){
			this._yazi[temizle].remove();
			this._yazi_y = 0;
		}
		
	}
	
}