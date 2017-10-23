////////////////////////////////////////////////////////////////////////////////////
//   										  //									  //
//  Algoritma Akış Diagram Sembolleri                                             //
//  										  //									  //
//  -Başla/Bitir                                                                  //
//  -Genel Girdi/Çıktı                                                            //
//  -Genel İşlem								  //								  //
//  -Denetim(Karar)                                                               //
//  -El ile Girdi(Klavye)							  //							  //
//                                                                                //
//                                  m.y software();          			  //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////

var _kutup = [];
var _islem = [];
var bag_1_x = 0;
var bag_2_x = 0;
var bag_1_y = 0;
var bag_2_y = 0;
var my_tik  = 0;
var deneme_s1_index = 0;
var deneme_s2_index = 0;
var s1_index = 0;
var s2_index = 0;
var s_bir_d = 0;
var s_iki_d = 0;
var index = -1;


function algroitma_sema(x,y,yukseklik,genislik,alg_sembol,yazi){
	
	this.x=x;
	this.y=y;
	this.yukseklik=yukseklik;
	this.genislik=genislik;
	this.alg_sembol=alg_sembol;
	this.yazi=yazi;
	this.secildi = 0;
	this.sür_x = 0;
	this.sür_y = 0;
	this.bag_acik = 0;
	this.renk_üst = 0;
	this.renk_alt = 0;
	this.tik_sayac = 0;
	this._üst_bag_x = (this.x+(this.genislik/2));
	this._üst_bag_y = (this.y-6);
	this._alt_bag_x = (this.x+(this.genislik/2));
	this._alt_bag_y = (this.y+this.yukseklik+1);
	this._alt_üst = 0;
	index=index+1;
	this.b_index = index;

	this.ciz = function(){
		if(this.bag_acik==1){
			noFill();
			stroke(this.renk_üst);
			rect(this._üst_bag_x,this._üst_bag_y,5,5);
			stroke(this.renk_alt);
			rect(this._alt_bag_x,this._alt_bag_y,5,5);
		}
		switch(this.alg_sembol){
		case 1:
		noFill();
		stroke(0);
		rect(this.x,this.y,this.genislik,this.yukseklik);
		this._üst_bag_x = (this.x+(this.genislik/2));
		this._üst_bag_y = (this.y-6);
		this._alt_bag_x = (this.x+(this.genislik/2));
		this._alt_bag_y = (this.y+this.yukseklik+1);
		break;
		case 2:
		noFill();
		stroke(0);
		line(this.x,this.y,this.x+this.genislik,this.y);
		line(this.x-20,this.y+this.yukseklik,this.x+this.genislik-20,this.y+this.yukseklik);
		line(this.x,this.y,this.x-20,this.y+this.yukseklik);
		line(this.x+this.genislik,this.y,this.x+genislik-20,this.y+this.yukseklik);	
		this._üst_bag_x = (this.x+(this.genislik/2)-10);
		this._üst_bag_y = (this.y-6);
		this._alt_bag_x = (this.x+(this.genislik/2)-10);
		this._alt_bag_y = (this.y+this.yukseklik+1);
		break;
		case 3:
		noFill();
		stroke(0);
		rect(this.x, this.y, this.genislik, this.yukseklik, 20);
		this._üst_bag_x = (this.x+(this.genislik/2));
		this._üst_bag_y = (this.y-6);
		this._alt_bag_x = (this.x+(this.genislik/2));
		this._alt_bag_y = (this.y+this.yukseklik+1);
		break;
		}
	}
	this.sec = function(){
		var x_aralik = mouseX - this.x;
		var y_aralik = mouseY - this.y;
		if((x_aralik>=0 && x_aralik < this.genislik) && (y_aralik>=0 && y_aralik < this.yukseklik)){ 
			this.secildi = 1;
			this.sür_x = dist (mouseX,mouseY,this.x,mouseY);
			this.sür_y = dist (mouseX,mouseY,mouseX,this.y);
		}
		if(this.bag_acik==1){
		if(((mouseX - this._üst_bag_x)>=0 && (mouseX - (this._üst_bag_x)<5)) && ((mouseY - (this._üst_bag_y))>=0 && (mouseY - (this._üst_bag_y)<5))){
		my_tik++;
		switch (my_tik){
		case 1:
		s1_index = this.b_index;
		bag_1_x = this._üst_bag_x
		bag_1_y = this._üst_bag_y
		this._alt_üst = 1;
		s_bir_d = 1;
		break;
		case 2:
		my_tik=0;
		s2_index = this.b_index;
		bag_2_x = this._üst_bag_x
		bag_2_y = this._üst_bag_y
		this._alt_üst = 1;
		s_iki_d = 1;
		_bag.push(new sembol_bagla(bag_1_x,bag_1_y,bag_2_x,bag_2_y,s1_index,s2_index,s_bir_d,s_iki_d));
		break;	
		}
	    this.renk_üst = color(255, 204, 0);
		}
		if(((mouseX - (this._alt_bag_x))>=0 && (mouseX - (this._alt_bag_x)<5)) && ((mouseY - (this._alt_bag_y))>=0 && (mouseY - (this._alt_bag_y)<5))){
		my_tik++;
		switch (my_tik){
		case 1:
		s1_index = this.b_index;
		bag_1_x = this._alt_bag_x;
		bag_1_y = this._alt_bag_y;
		this._alt_üst = 2;
		s_bir_d = 2;
		break;
		case 2:
		my_tik=0;
		s2_index = this.b_index;
		bag_2_x = this._alt_bag_x;
		bag_2_y = this._alt_bag_y;
		this._alt_üst = 2;
		s_iki_d = 2;
        _bag.push(new sembol_bagla(bag_1_x,bag_1_y,bag_2_x,bag_2_y,s1_index,s2_index,s_bir_d,s_iki_d));
		break;	
		}
     	this.renk_alt = color(255, 204, 0);
		}
		}
		
	}
	this.sürükle = function(){
		if(this.secildi==1){
		this.x=mouseX-this.sür_x;
		this.y=mouseY-this.sür_y;
		background(255);
		switch(this.alg_sembol){
	    case 1:
		this._üst_bag_x = (this.x+(this.genislik/2));
		this._üst_bag_y = (this.y-6);
		this._alt_bag_x = (this.x+(this.genislik/2));
		this._alt_bag_y = (this.y+this.yukseklik+1);
        break;		
		case 2:
		this._üst_bag_x = (this.x+(this.genislik/2)-10);
		this._üst_bag_y = (this.y-6);
		this._alt_bag_x = (this.x+(this.genislik/2)-10);
		this._alt_bag_y = (this.y+this.yukseklik+1);
		break;
		case 3:
		this._üst_bag_x = (this.x+(this.genislik/2));
		this._üst_bag_y = (this.y-6);
		this._alt_bag_x = (this.x+(this.genislik/2));
		this._alt_bag_y = (this.y+this.yukseklik+1);
		break;
		}
		}
	}
	this.sürükle_durum = function(durum) {
	this.secildi = durum;
	}
	this.bag_durum = function(b_durum){
	this.bag_acik = b_durum;
		if(b_durum==0){
		    fill(255);
			stroke(255);
			rect((this._üst_bag_x),(this._üst_bag_y),5,5);
			rect((this._alt_bag_x),(this._alt_bag_y),5,5);	
	        }else{
		    noFill();
			stroke(0);
			rect((this._üst_bag_x),(this._üst_bag_y),5,5);
			rect((this._alt_bag_x),(this._alt_bag_y),5,5);
	}
	}
}
	



