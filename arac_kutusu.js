function arac_kutusu (x,y){
	
	this.x=x;
	this.y=y;
	this.renk=255;
	this.tik_sayac = 0;
	
	this.ciz = function(){
		fill(this.renk);
		stroke(0);
		rect(x,y,10,10);
	}
	
	this.sec = function(){
		if(((mouseX - this.x)>=0 && (mouseX - this.x)<10) && ((mouseY - (this.y))>=0 && (mouseY - (this.y)<10))){
			if(this.tik_sayac==0){
			this.renk=150;
			this.tik_sayac++;
			for(let a = 0 ; a<=4; a++){
	        _deneme[a].bag_durum(1);
            }
			}else{
			this.tik_sayac=0;
			this.renk=255;
			for(let a = 0 ; a<=4; a++){
	        _deneme[a].bag_durum(0);
            }
			}
		}
	}
	
}