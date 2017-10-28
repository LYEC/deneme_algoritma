var dddd=0;
var cuk = -1;
var bag_uzunluk = 0;
var ciz_baba = 0;
var baglar_index = [];

function simülasyon(){
	
	this.baslat_index=0;
	this.b_buldum=0;
	this.ed = 0;
	this.xD = 0;
	
	this.analiz  = function(){
		for(let ara = 0;  ara<_deneme.length;ara++){
			if(_deneme[ara].yazi=='BAŞLAT' && _deneme[ara].alg_sembol==3){
				this.baslat_index = _deneme[ara].b_index;
				this.b_buldum=1;
				//print('buldum ---> index : '+this.baslat_index);
				//noFill();
		        //stroke(150);
				//rect(_deneme[ara].x-10,_deneme[ara].y-10,_deneme[ara].genislik + 20,_deneme[ara].yukseklik+20);
				break;
			}
		}
		if(this.b_buldum==1){
			baglar_index[0] = this.baslat_index;
			for (let a = 0; a<baglar_index.length;a++){
			for(let baglarda_ara = 0; baglarda_ara<_bag.length;baglarda_ara++){
				if(_bag[baglarda_ara].s_bir_index == baglar_index[this.ed]){
						if(_bag[baglarda_ara].s_bir_d == 2){
							if(_bag[baglarda_ara].s_iki_d==1){
								this.ed++;
								baglar_index[this.ed] = _bag[baglarda_ara].s_iki_index;
								break;
							}
						}
				}
			}
			}
		}
	}
	this.simüle = function(){
		if(dddd<bag_uzunluk){
		ciz_baba=1;	
		_deneme[baglar_index[dddd]].gorev();
		print(_deneme[baglar_index[dddd]]);
		print(dddd);
		dddd++;
		cuk++;
		}else{
			ciz_baba=0;
			clearInterval(sim_timer);
			dddd=0;
			cuk=-1;
		}
	}

    this.ciz = function(){
		if(ciz_baba==1){
		noFill();
		stroke(color(255, 204, 0));
		rect(_deneme[baglar_index[cuk]].x-10,_deneme[baglar_index[cuk]].y-10,_deneme[baglar_index[cuk]].genislik + 20,_deneme[baglar_index[cuk]].yukseklik+20);
		stroke(0);
		}
	}	

}