var _tekrar=0;
var _b_index = -1;
var bag_uzunluk = 0;
var _lyec_sim = 0;
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
						if((_bag[baglarda_ara].s_bir_d == 2 && _bag[baglarda_ara].s_iki_d==1) || (_bag[baglarda_ara].s_bir_d == 1 && _bag[baglarda_ara].s_iki_d==2)){
								this.ed++;
								baglar_index[this.ed] = _bag[baglarda_ara].s_iki_index;
								break;
						}
				}
			}
			}
		}
	}
	this.simüle = function(){
		if(_tekrar<bag_uzunluk){
		_lyec_sim=1;	
		_deneme[baglar_index[_tekrar]].gorev();
		print(_deneme[baglar_index[_tekrar]]);
		print(_tekrar);
		_tekrar++;
		_b_index++;
		}else{
			_lyec_sim=0;
			clearInterval(sim_timer);
			_tekrar=0;
			_b_index=-1;
		}
	}

    this.ciz = function(){
		if(_lyec_sim==1){
		noFill();
		stroke(color(255, 204, 0));
		rect(_deneme[baglar_index[_b_index]].x-10,_deneme[baglar_index[_b_index]].y-10,_deneme[baglar_index[_b_index]].genislik + 20,_deneme[baglar_index[_b_index]].yukseklik+20);
		stroke(0);
		}
	}	

}
