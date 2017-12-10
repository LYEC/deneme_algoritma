var _deneme = [];
var secilen_index = 0;
var arac_kutusu_c;
var ozellik_menu;
var deneme_p;
var deneme_sim;
var orta_canvas;

var _konsol;

function deneme_line (x1,x2,y1,y2){
	background(255);
	line(x1,y1,x2,y2);
	line(x2,y2,(x2-5),(y2-5));
	line(x2,y2,(x2+5),(y2-5));
}

function setup(){
	orta_canvas = createCanvas(968,662);
	background(255);
	_deneme[0]=new algroitma_sema(100,100,40,100,1,"mustafa yılmaz deneme");
	_deneme[1]=new algroitma_sema(200,200,40,100,1,"şunu bi em");
	arac_kutusu_c = new arac_kutusu(10,10);
	ozellik_menu = new ozellik_menu(1000,100);
	_deneme[2]=new algroitma_sema(300,300,40,100,3,"BAŞLAT");
	_deneme[3]=new algroitma_sema(400,400,40,100,3,"DURDUR");
	_deneme[4]=new algroitma_sema(500,500,40,100,2,"asdas4 asdas dasda sd");
	_deneme[5]=new algroitma_sema(800,500,40,100,1,"dddd");
	_deneme[6]=new algroitma_sema(800,300,40,100,2,"xdsad");
	deneme_sim = new simülasyon();
	_konsol = new konsol(1110,380);
    orta_canvas.position(0,0);
	orta_canvas.class('orta_canvas');
	
	//deneme_sim.analiz();
	ozellik_menu.ciz();
	print(displayWidth);
	print(displayHeight);
}

function draw(){
//background(255);
clear();
//background(color(192,192,192));

arac_kutusu_c.ciz();	
//deneme_sim.baslat_durdur_ara();

//rect(100,100,100,100,10);

for(let a = 0 ; a<_deneme.length; a++){
	_deneme[a].ciz();
}

deneme_sim.ciz();

for(let a=0; a<_bag.length;a++){
	_bag[a].ciz();
}
//ozellik_menu.guncelle();
}

function mousePressed(){	
//deneme = ozellik_menu.degisken_adi_textbox.value() + '=' +ozellik_menu.değişken_deger.value();
for(var a = 0 ; a<_deneme.length; a++){
	_deneme[a].sec();
	if(_deneme[a].secildi==1){
	print(_deneme[a].b_index);
	}
}
arac_kutusu_c.sec();
ozellik_menu.guncelle();
}
function mouseDragged() {
for(var a = 0 ; a<_deneme.length; a++){
	_deneme[a].sürükle();
}
for(let b = 0; b<_bag.length;b++){
	_bag[b].sürükle();
}
}
function mouseReleased() {
for(let a = 0 ; a<_deneme.length; a++){
	_deneme[a].sürükle_durum(0);
}
}
