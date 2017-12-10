var secilen_index_my = 0;	
var lyec = [];
var degiskenler = [];
var degisken_icerik = [];
var d_index = -1;
var d = 0;
var aralik = 0;
var iron_man = 0;

function degiskenler_ec(index,d_adi,d_icerik){
	this.index=index;
	this.d_adi=d_adi;
	this.d_icerik=d_icerik; 
}


function yaziyi_duzelt(yazi){
	var uzunluk = yazi.length;
	if(uzunluk>=10){
		
	}	
}


function ozellik_menu(x,y){
	
	this.x=x;
	this.y=y;
	this.secilen_sembol_index=0;
	lyec[0] = createSpan(this.secilen_sembol_index);
	lyec[1] = createButton('Başla');
	lyec[2] = createButton('Durdur');
	lyec[3] = createButton('Aritmatik İşlem');
	lyec[4] = createButton('Tanımla');
	lyec[5] = createButton('Atama');
	lyec[6] = createInput('x');
	lyec[7] = createInput('0');
	lyec[8] = createSelect();
	lyec[9] = createSelect();
	lyec[10] = createSelect();
	lyec[11] = createButton('Ekrana Yaz');
	lyec[12] = createP('Konsol');
	lyec[13] = createP('');
	lyec[14] = createSelect();
	lyec[1].class('buton_deneme');
	lyec[2].class('buton_deneme');
	lyec[3].class('buton_deneme');
	lyec[4].class('buton_deneme');
	lyec[5].class('buton_deneme');
	lyec[11].class('buton_deneme');
	lyec[6].class('css-input');
	lyec[7].class('css-input');
	/*
	lyec[6].style("display","block");
	lyec[6].style("margin-bottom","10px");
	lyec[6].style("padding","5px");
	lyec[6].style("border",0);
	lyec[6].style("border-radius","4px");
	*/
	this.ciz = function(){
	//textFont("Arial",20);
	//textStyle("NORMAL");220-10	
	//fill(0);
	//text(this.secilen_sembol_index, this.x+5, this.y+2);
	lyec[0].position(this.x+150,this.y-40);
	lyec[1].position(this.x+140,this.y+10);
	lyec[2].position(this.x+220,this.y+10);
	lyec[5].position(this.x+115,this.y-10);
	lyec[3].position(this.x+200,this.y-10);
	lyec[6].position(this.x+130,this.y+40);
	lyec[7].position(this.x+130,this.y+70);
	lyec[4].position(this.x+240,this.y+120);
	lyec[8].position(this.x+5,this.y+64);
	lyec[9].position(this.x+5,this.y+90);
	lyec[10].position(this.x+210,this.y+10);
	lyec[11].position(this.x+210,this.y+10);
	lyec[12].position(this.x+5,this.y+200);
	lyec[13].position(this.x+5,this.y+220);
	lyec[14].position(this.x+5,this.y+115);	
	lyec[9].option('+');
	lyec[9].option('-');
	for(let i = 0; i<lyec.length;i++){
		lyec[i].hide();
	}
	//lyec[12].show();
	lyec[13].show();
	lyec[11].mousePressed(function(){
		for(let ara = 0; ara<degiskenler.length;ara++){
		if(degiskenler[ara]==lyec[10].value()){
		_deneme[secilen_index_my]._islem_index_d(ara);
        break;		
		}
	    }
		_deneme[secilen_index_my].yazi_degis('Ekrana Yaz : ' + lyec[10].value());
	});
	lyec[3].mousePressed(function(){
		iron_man = 1;
		for(let i = 1; i<=7;i++){
		if(i==5 || i==3 || i==4 ){continue;}	
		lyec[i].hide();
	    }
		lyec[8].remove();
		lyec[14].remove();
		lyec[8] = createSelect();
		lyec[14] = createSelect();
		lyec[8].position(this.x-55,this.y+32);	
		lyec[14].position(this.x-55,this.y+82);
		for(let ii = 0; ii<degiskenler.length;ii++){
		lyec[8].option(degiskenler[ii]);
		lyec[14].option(degiskenler[ii]);
		}
        lyec[8].show();	
		//lyec[9].position(this.x-30+aralik,this.y+32);
		lyec[9].show();
		lyec[14].show();
	});
	lyec[5].mousePressed(function(){
		for(let a=3; a<=7;a++){
			lyec[a].show();
		}
		lyec[8].hide();
		lyec[9].hide();
		lyec[10].hide();
		lyec[11].hide();
		lyec[14].hide();
		iron_man = 0;
	});
    lyec[4].mousePressed(function(){
	if(iron_man==0){
	_deneme[secilen_index_my].yazi_degis(lyec[6].value()+'='+lyec[7].value());
	if (_deneme[secilen_index_my].d_index==-1){
	d_index++;	
	d = d_index;
	}else{
	d = _deneme[secilen_index_my].d_index;
	}
    degiskenler[d] = lyec[6].value();
	degisken_icerik[d] = lyec[7].value();
	_deneme[secilen_index_my].d_index_d(d,lyec[7].value());
	}else{
	//	let s_islem = 0;
		_deneme[secilen_index_my].d_deger_degis(lyec[8].value(),lyec[14].value());
	/*	switch(lyec[9].value()){
			case '+':
			s_islem = 1;
			break;
			case '-':
			s_islem = 2;
			break;
		}
	*/
		_deneme[secilen_index_my]._islem_d(lyec[9].value());
		_deneme[secilen_index_my].yazi_degis(lyec[8].value()+lyec[9].value()+lyec[14].value());
	}
	});
	lyec[1].mousePressed(function(){
	_deneme[secilen_index_my].yazi_degis('BAŞLAT');
	});
	lyec[2].mousePressed(function(){
	_deneme[secilen_index_my].yazi_degis('DURDUR');
	});
	}
	lyec[8].changed(function(){
		//print('burda');
		for (let ii = 0; ii < lyec[8].value().length;ii++){
			aralik = aralik+5;
		}
	});
	this.guncelle = function(){
	//deneme = degisken_adi_textbox.value() + '=' +this.değişken_deger.value();
	for(var a = 0 ; a<_deneme.length; a++){
	if(_deneme[a].secildi==1){
	this.secilen_sembol_index=_deneme[a].g_isim;
	secilen_index_my = _deneme[a].b_index;
	lyec[0].html('-> '+this.secilen_sembol_index);
	lyec[0].show();
	switch(_deneme[a].alg_sembol){
		case 1:
		iron_man = 0;
		lyec[6].value(degiskenler[_deneme[secilen_index_my].d_index]);
		lyec[7].value(degisken_icerik[_deneme[secilen_index_my].d_index]);
		if(lyec[6].value() == 'undefined' || lyec[7].value() == 'undefined'){
			lyec[6].value('değişken_adi');
			lyec[7].value('değer');
		}
		for(let a=3; a<=7;a++){
			lyec[a].show();
		}
		lyec[8].hide();
		lyec[9].hide();
		lyec[10].hide();
		lyec[11].hide();
		lyec[14].hide();
		lyec[1].hide();
		lyec[2].hide();
		break;
		case 2:
		for(let a=1; a<=9; a++){
			lyec[a].hide();
		}
		lyec[10].remove();
		lyec[10] = createSelect();
		lyec[10].position(this.x+150,this.y+12);	
		for(let ii = 0; ii<degiskenler.length;ii++){
		lyec[10].option(degiskenler[ii]);
		}
		lyec[10].show();
		lyec[11].show();
		break;
		case 3:
		for(let a=1; a<=2;a++){
			lyec[a].show();
		}
		for(let a=3; a<=11;a++){
			lyec[a].hide();
		}
		lyec[14].hide();
		break;
		default:
		for(let i = 0; i<lyec.length;i++){
		lyec[i].hide();
	    }
		break;	
	}
	}
    }
	}	
}
