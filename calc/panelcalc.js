// JavaScript Document - Penny Panel price calculator

function panelPrice()
{
with (document.forms.panelpricer)
{
var pmultiplier = 0;
var dmultiplier = .08 * parseInt(paneldepth.value);
var pheight = parseInt(panelheight.value);
var pwidth = parseInt(panelwidth.value);
var squareinch = pwidth * pheight;
var notgator = parseInt(panelmaterial.value);
var primed = panelprime.checked;
var primedprice = 0;
var seamcheck = 0;
var seamtext = "";
var depthtext = "";
var sqmultiplier = 0;
var inflation = .15;

if (pheight>=pwidth){
xdim = pheight;
ydim = pwidth;
} else {
xdim = pwidth;
ydim = pheight;
}

if (xdim >= 48) {depthtext = 'For panels 48" and longer in any one dimension, we strongly recommend a depth of at least 1.75". ';}
if (xdim >= 60) {depthtext = 'For panels 60" and longer in any one dimension, we strongly recommend a depth of at least 2". ';}

(xdim%96) ? (xseam = Math.floor(xdim/96)) : (xseam = Math.floor(xdim/96) - 1);
(ydim%48) ? (yseam = Math.floor(ydim/48)) : (yseam = Math.floor(ydim/48) - 1);
seamcheck = (2*yseam+1)*xseam + yseam;
  
if (seamcheck) {
seamtext = 'All panels are subject to standard plywood sheet sizes of 48" x 96".  For panels which extend further in either direction, we construct SEAMED PANELS which require the joining of two sections of surface ply over the cradling frame.  We then completely fill and sand the seam to a virtually undetectable smoothness.  The calculated price above includes a charge of $30 per seam.  WE DO NOT RECOMMEND PAINTING DIRECTLY ON SEAMED PANELS, but rather use them as a substrate for stretched canvas or linen.  Please contact us directly to discuss the many possible solutions for larger panels.';
}

if (notgator){
      var woodprice = 16;
} else {woodprice = 18;}


var tempprice = 0;
if (squareinch <= 200){
  if (primed){
      pmultiplier = .069;
  }
  if (notgator){
      sqmultiplier = .12;
  } else {sqmultiplier = .132;}
} else if (squareinch <= 400){
  if (primed){
      pmultiplier = .062;
  }
  if (notgator){
      sqmultiplier = .092;
  } else {sqmultiplier = .098;}	  
} else if (squareinch <= 500){
  if (primed){
      pmultiplier = .058;
  }
  if (notgator){
      sqmultiplier = .09;
  } else {sqmultiplier = .094;}	  
} else if (squareinch <= 600){
  if (primed){
      pmultiplier = .054;
  }
  if (notgator){
      sqmultiplier = .084;
  } else {sqmultiplier = .088;}	  
} else if (squareinch <= 800){
  if (primed){
      pmultiplier = .047;
  }
  if (notgator){
      sqmultiplier = .08;
  } else {sqmultiplier = .084;}	  
} else if (squareinch <= 1100){
  if (primed){
      pmultiplier = .045;
  }
  if (notgator){
      sqmultiplier = .077;
  } else {sqmultiplier = .082;}	  
} else if (squareinch <= 1400){
  if (primed){
      pmultiplier = .043;
  }
  if (notgator){
      sqmultiplier = .075;
  } else {sqmultiplier = .079;}	  
} else if (squareinch <= 1700)
{
  if (primed){
      pmultiplier = .041;
  }
  if (notgator){
      sqmultiplier = .072;
  } else {sqmultiplier = .076;}	  
} else if (squareinch <= 2000)
{
  if (primed){
      pmultiplier = .039;
  }
  if (notgator){
      sqmultiplier = .07;
  } else {sqmultiplier = .074;}	  
} else if (squareinch <= 2400)
{
  if (primed){
      pmultiplier = .037;
  }
  if (notgator){
      sqmultiplier = .068;
  } else {sqmultiplier = .072;}	  
} else if (squareinch <= 2800)
{
  if (primed){
      pmultiplier = .035;
  }
  if (notgator){
      sqmultiplier = .067;
  } else {sqmultiplier = .07;}	  
} else if (squareinch <= 3400)
{
  if (primed){
      pmultiplier = .033;
  }
  if (notgator){
      sqmultiplier = .065;
  } else {sqmultiplier = .068;}	  
} else if (squareinch <= 4000)
{
  if (primed){
      pmultiplier = .032;
  }
  if (notgator){
      sqmultiplier = .063;
  } else {sqmultiplier = .066;}	  
} else if (squareinch <= 4700)
{
  if (primed){
      pmultiplier = .031;
  }
  if (notgator){
      sqmultiplier = .061;
  } else {sqmultiplier = .064;}	  
} else if (squareinch <= 5500)
{
  if (primed){
      pmultiplier = .03;
  }
  if (notgator){
      sqmultiplier = .059;
  } else {sqmultiplier = .062;}	  
} else if (squareinch <= 6300)
{
  if (primed){
      pmultiplier = .029;
  }
  if (notgator){
      sqmultiplier = .058;
  } else {sqmultiplier = .06;}	  
} else if (squareinch <= 7300)
{
  if (primed){
      pmultiplier = .028;
  }
  if (notgator){
      sqmultiplier = .057;
  } else {sqmultiplier = .059;}	  
} else if (squareinch <= 8500)
{
  if (primed){
      pmultiplier = .027;
  }
  if (notgator){
      sqmultiplier = .056;
  } else {sqmultiplier = .058;}	  
}else if (squareinch <= 10000)
{
  if (primed){
      pmultiplier = .026;
  }
  if (notgator){
      sqmultiplier = .055;
  } else {sqmultiplier = .057;}	  
} else if (squareinch > 10000)
{
  if (primed){
      pmultiplier = .025;
  }
  if (notgator){
      sqmultiplier = .054;
  } else {sqmultiplier = .056;}	  
}

tempprice = squareinch * sqmultiplier;

tempprice = tempprice + (tempprice * dmultiplier);

if (woodprice < tempprice) {woodprice = tempprice};

woodprice = woodprice + seamcheck * 30;


if (primed){
primedprice = squareinch * pmultiplier; 
if (primedprice < 7) {primedprice = 7};
}

totalprice = woodprice + primedprice;

totalprice = totalprice + inflation*totalprice;

totalprice = Math.round(100*totalprice)/100;

panelprice.value = "$" + totalprice ;
panelnotes.value = depthtext + seamtext;
}
}