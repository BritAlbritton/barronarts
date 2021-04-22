// JavaScript Document - panel price calculator

function panelPrice()
{

var error = 0;
var pmultiplier = 0;
var dmultiplier = 0.0425 * parseInt(document.forms.pricer.paneldepth.value, 10);
var pheight = parseFloat(document.forms.pricer.panelheight.value, 10);
var pwidth = parseFloat(document.forms.pricer.panelwidth.value, 10);
var squareinch = pwidth * pheight;
var notgator = parseInt(document.forms.pricer.panelmaterial.value, 10);
var ptindex = document.forms.pricer.panelmaterial.selectedIndex;
var materialname = document.forms.pricer.panelmaterial.options[ptindex].text;
var primed = document.forms.pricer.panelprime.checked;
var primedprice = 0;
var seamcheck = 0;
var seamtext = "";
var depthtext = "";
var sqmultiplier = 0;
var inflation = .15;


var productname = pwidth + "\" x " + pheight + "\" " + materialname + " panel.";
if (primed){productname += " Primed."};


if (isNaN(pwidth)) {pwidth=0;}
if (isNaN(pheight)) {pheight=0;}

if (pheight>=pwidth){
xdim = pheight;
ydim = pwidth;
} else {
xdim = pwidth;
ydim = pheight;
}

if (pwidth < .25) {depthtext = 'Please enter a width of at least .25". \n'; error=1;}
if (pheight < .25) {depthtext += 'Please enter a height of at least .25". \n'; error=1;}

if (xdim >= 48) {depthtext += 'For panels 48" and longer in any one dimension, we strongly recommend a depth of at least 1.75". ';}
if (xdim >= 60) {depthtext += 'For panels 60" and longer in any one dimension, we strongly recommend a depth of at least 2". ';}

(xdim%96) ? (xseam = Math.floor(xdim/96)) : (xseam = Math.floor(xdim/96) - 1);
(ydim%48) ? (yseam = Math.floor(ydim/48)) : (yseam = Math.floor(ydim/48) - 1);
seamcheck = (2*yseam+1)*xseam + yseam;
  
if (seamcheck) {
seamtext = 'All panels are subject to standard plywood sheet sizes of 48" x 96".  For panels which extend further in either direction, we construct SEAMED PANELS which require the joining of two sections of surface ply over the cradling frame.  We then completely fill and sand the seam to a virtually undetectable smoothness.  The calculated price above includes a charge of $30 per seam.  WE DO NOT RECOMMEND PAINTING DIRECTLY ON SEAMED PANELS, but rather use them as a substrate for stretched canvas or linen.  Please contact us directly to discuss the many possible solutions for larger panels.';
document.forms.pricer.panelnotes.rows = 10;
}

if (notgator){
      var woodprice = 16;
} else {woodprice = 18;}


var tempprice = 0;
if (squareinch <= 200){
  if (primed){
      pmultiplier = 0.069;
  }
  if (notgator){
      sqmultiplier = 0.12;
  } else {sqmultiplier = 0.132;}
} else if (squareinch <= 400){
  if (primed){
      pmultiplier = 0.062;
  }
  if (notgator){
      sqmultiplier = 0.092;
  } else {sqmultiplier = 0.098;}	  
} else if (squareinch <= 500){
  if (primed){
      pmultiplier = 0.058;
  }
  if (notgator){
      sqmultiplier = 0.09;
  } else {sqmultiplier = 0.094;}	  
} else if (squareinch <= 600){
  if (primed){
      pmultiplier = 0.054;
  }
  if (notgator){
      sqmultiplier = 0.084;
  } else {sqmultiplier = 0.088;}	  
} else if (squareinch <= 800){
  if (primed){
      pmultiplier = 0.047;
  }
  if (notgator){
      sqmultiplier = 0.08;
  } else {sqmultiplier = 0.084;}	  
} else if (squareinch <= 1100){
  if (primed){
      pmultiplier = 0.045;
  }
  if (notgator){
      sqmultiplier = 0.077;
  } else {sqmultiplier = 0.082;}	  
} else if (squareinch <= 1400){
  if (primed){
      pmultiplier = 0.043;
  }
  if (notgator){
      sqmultiplier = 0.075;
  } else {sqmultiplier = 0.079;}	  
} else if (squareinch <= 1700)
{
  if (primed){
      pmultiplier = 0.041;
  }
  if (notgator){
      sqmultiplier = 0.072;
  } else {sqmultiplier = 0.076;}	  
} else if (squareinch <= 2000)
{
  if (primed){
      pmultiplier = 0.039;
  }
  if (notgator){
      sqmultiplier = 0.07;
  } else {sqmultiplier = 0.074;}	  
} else if (squareinch <= 2400)
{
  if (primed){
      pmultiplier = 0.037;
  }
  if (notgator){
      sqmultiplier = 0.068;
  } else {sqmultiplier = 0.072;}	  
} else if (squareinch <= 2800)
{
  if (primed){
      pmultiplier = 0.035;
  }
  if (notgator){
      sqmultiplier = 0.067;
  } else {sqmultiplier = 0.07;}	  
} else if (squareinch <= 3400)
{
  if (primed){
      pmultiplier = 0.033;
  }
  if (notgator){
      sqmultiplier = 0.065;
  } else {sqmultiplier = 0.068;}	  
} else if (squareinch <= 4000)
{
  if (primed){
      pmultiplier = 0.032;
  }
  if (notgator){
      sqmultiplier = 0.063;
  } else {sqmultiplier = 0.066;}	  
} else if (squareinch <= 4700)
{
  if (primed){
      pmultiplier = 0.031;
  }
  if (notgator){
      sqmultiplier = 0.061;
  } else {sqmultiplier = 0.064;}	  
} else if (squareinch <= 5500)
{
  if (primed){
      pmultiplier = 0.03;
  }
  if (notgator){
      sqmultiplier = 0.059;
  } else {sqmultiplier = 0.062;}	  
} else if (squareinch <= 6300)
{
  if (primed){
      pmultiplier = 0.029;
  }
  if (notgator){
      sqmultiplier = 0.058;
  } else {sqmultiplier = 0.06;}	  
} else if (squareinch <= 7300)
{
  if (primed){
      pmultiplier = 0.028;
  }
  if (notgator){
      sqmultiplier = 0.057;
  } else {sqmultiplier = 0.059;}	  
} else if (squareinch <= 8500)
{
  if (primed){
      pmultiplier = 0.027;
  }
  if (notgator){
      sqmultiplier = 0.056;
  } else {sqmultiplier = 0.058;}	  
}else if (squareinch <= 10000)
{
  if (primed){
      pmultiplier = 0.026;
  }
  if (notgator){
      sqmultiplier = 0.055;
  } else {sqmultiplier = 0.057;}	  
} else if (squareinch > 10000)
{
  if (primed){
      pmultiplier = 0.025;
  }
  if (notgator){
      sqmultiplier = 0.054;
  } else {sqmultiplier = 0.056;}	  
}



tempprice = squareinch * sqmultiplier;

tempprice = tempprice + (tempprice * dmultiplier);

if (woodprice < tempprice) {woodprice = tempprice;}

woodprice = woodprice + seamcheck * 30;


if (primed){
primedprice = squareinch * pmultiplier; 
if (primedprice < 7) {primedprice = 7;}
}


if (!error){
totalprice = woodprice + primedprice;
totalprice = totalprice + inflation*totalprice;
totalprice = Math.round(100*totalprice)/100;
} else {totalprice=0;}

document.forms.pricer.panelprice.value = "$" + totalprice ;
document.forms.pricer.panelnotes.value = depthtext + seamtext;

if (totalprice>0){
	document.getElementById("cartaddbutton").style.display = "inline";
}




var now = (new Date( )).getTime( );    
var productid = now;


document.forms.pricer.baproductid.value = productid;
document.forms.pricer.baproductname.value = productname;
document.forms.pricer.baproductprice.value = totalprice;
document.forms.pricer.baproductqty.value = 1;

}

