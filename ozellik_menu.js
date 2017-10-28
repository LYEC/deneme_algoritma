var secilen_index_my = 0;	
var lyec = [];
var degiskenler = [];
var degisken_icerik = [];
var d_index = -1;

function degiskenler_ec(index,d_adi,d_icerik){
	this.index=index;
	this.d_adi=d_adi;
	this.d_icerik=d_icerik; 
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
	this.ciz = function(){
	//textFont("Arial",20);
	//textStyle("NORMAL");	
	//fill(0);
	//text(this.secilen_sembol_index, this.x+5, this.y+2);	
	lyec[0].position(this.x+5,this.y+2);
	lyec[1].position(this.x+5,this.y+32);
	lyec[2].position(this.x+60,this.y+32);
	lyec[5].position(this.x+5,this.y+32);
	lyec[3].position(this.x+60,this.y+32);
	lyec[6].position(this.x+5,this.y+64);
	lyec[7].position(this.x+5,this.y+100);
	lyec[4].position(this.x+120,this.y+132);
	lyec[8].position(this.x+5,this.y+64);
	lyec[9].position(this.x+40,this.y+64);
	lyec[10].position(this.x+5,this.y+32);
	lyec[11].position(this.x+60,this.y+32);
	lyec[9].option('+');
	lyec[9].option('-');
	for(let i = 0; i<lyec.length;i++){
		lyec[i].hide();
	}
	lyec[11].mousePressed(function(){
		_deneme[secilen_index_my].yazi_degis('Ekrana Yaz : ' + lyec[10].value());
	});
	lyec[3].mousePressed(function(){
		for(let i = 1; i<=7;i++){
		if(i==5 || i==3 ){continue;}	
		lyec[i].hide();
	    }
		lyec[8].remove();
		lyec[8] = createSelect();
		lyec[8].position(this.x-55,this.y+32);	
		for(let ii = 0; ii<degiskenler.length;ii++){
		lyec[8].option(degiskenler[ii]);
		}
        lyec[8].show();	
		lyec[9].show();
	});
	lyec[5].mousePressed(function(){
		for(let a=3; a<=7;a++){
			lyec[a].show();
		}
		lyec[8].hide();
		lyec[9].hide();
		lyec[10].hide();
		lyec[11].hide();
	});
    lyec[4].mousePressed(function(){
	d_index++;
	_deneme[secilen_index_my].yazi_degis(lyec[6].value()+'='+lyec[7].value());
    degiskenler[d_index] = lyec[6].value();
	degisken_icerik[d_index] = lyec[7].value();
	_deneme[secilen_index_my].d_index_d(d_index);
	});
	lyec[1].mousePressed(function(){
	_deneme[secilen_index_my].yazi_degis('BAŞLAT');
	});
	lyec[2].mousePressed(function(){
	_deneme[secilen_index_my].yazi_degis('DURDUR');
	});
	}
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
		break;
		case 2:
		for(let a=1; a<=9; a++){
			lyec[a].hide();
		}
		lyec[10].remove();
		lyec[10] = createSelect();
		lyec[10].position(this.x,this.y+32);	
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