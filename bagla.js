var _bag = [];
var _bag_index = 0;

function  sembol_bagla(s_bir_x,s_bir_y,s_iki_x,s_iki_y,s_bir_index,s_iki_index,s_bir_d,s_iki_d){  

   this.s_bir_x=s_bir_x;
   this.s_iki_x=s_iki_x;
   this.s_bir_y=s_bir_y;
   this.s_iki_y=s_iki_y;
   this.s_bir_index=s_bir_index;
   this.s_iki_index=s_iki_index;
   this.s_bir_d=s_bir_d;
   this.s_iki_d=s_iki_d;
   this.my_bag_say = 0;
   this.sürüklüyoz = 0;
   
   this.my_bag = function(m_y){
	   this.my_bag_say = m_y;
   }
   
   this.s_bir_edit = function(x,y){
	   this.s_bir_x=x;
	   this.s_bir_y=y;
   }
   
   this.s_iki_edit = function(x2,y2){
	   this.s_iki_x=x2;
	   this.s_iki_y=y2;
   }
   
   this.s_bir_index_edit = function (index){
	   this.s_bir_index = index;
   }
   this.s_iki_index_edit = function (index){
	   this.s_iki_index = index;
   }
   
   this.ciz = function(){
	   line(this.s_bir_x,this.s_bir_y,this.s_iki_x,this.s_iki_y);
   }
   
  this.sürükle = function(){
	    switch(this.s_bir_d){
		   case 1:
		   this.s_bir_x = _deneme[this.s_bir_index]._üst_bag_x;
	       this.s_bir_y = _deneme[this.s_bir_index]._üst_bag_y;
		   break;
		   case 2:
		   this.s_bir_x = _deneme[this.s_bir_index]._alt_bag_x;
		   this.s_bir_y = _deneme[this.s_bir_index]._alt_bag_y;
		   break;
		}
	   switch(this.s_iki_d){
		   case 1:
		   this.s_iki_x = _deneme[this.s_iki_index]._üst_bag_x;
		   this.s_iki_y = _deneme[this.s_iki_index]._üst_bag_y;
		   break; 
		   case 2:
		   this.s_iki_x = _deneme[this.s_iki_index]._alt_bag_x;
		   this.s_iki_y = _deneme[this.s_iki_index]._alt_bag_y;
		   break;
		   
	   }
	}
  this.sürükle_durum = function(durum) {
	    this.sürüklüyoz = durum;
	}
 
}




 /**
   * Draws a character at (0, 0) with the maximum dimension of (5, 7).
   * Transformation can be used to place the character somewhere else.
   * The look of the character can be changed by using stroke(),
   * fill(), etc...
   * Optionally you can apply an uniformal scale.
   *
   * @param {p5}    sketch    The p5-context to draw the character on.
   * @param {char}  character The character that is going to be drawn.
   * @param {float} [scale]   The scale of the character.
   */