// JavaScript Document - panel price calculator


var clothImgs=["images/cloth/none.jpg","images/cloth/T12duck.jpg","images/cloth/T10duck.jpg","images/cloth/T12primed.jpg","images/cloth/T10primed.jpg","images/cloth/Txtrasmoooth.jpg","images/cloth/Tmedsmooth.jpg","images/cloth/Tcoarse.jpg"];  //none, 12, 10, 12 primed, 10 primed, xtra smooth,medium smooth, coarse
var clothLinks=["#","canvas-price.htm#12duck","canvas-price.htm#10duck","canvas-price.htm#12primed","canvas-price.htm#10primed","canvas-price.htm#xtrasmoooth","canvas-price.htm#medsmooth","canvas-price.htm#coarse"];  //none, 12, 10, 12 primed, 10 primed, xtra smooth,medium smooth, coarse

function imglinkBySel(preId,imgIndex) {
    var d=document;
    
    var linkID = preId + "Link";
    var imgID = preId + "Thumb";
    
    var imgSrc=clothImgs[imgIndex];    
    var linkSrc=clothLinks[imgIndex];

    if (!imgSrc || !linkSrc || !d.getElementById ) return;
    
    var linkObj = d.getElementById(linkID);
    var imgObj = d.getElementById(imgID);
    
    if (linkObj) linkObj.href=linkSrc;   
    if (imgObj) imgObj.src=imgSrc;   
    
    if (imgIndex==3 || imgIndex == 4){
    	if (document.forms.strpricer.primecoats.options[1].value!=1){
	      var newOption = document.createElement("option");
       newOption.appendChild(document.createTextNode("1 Coat (for Pre-Primed)"));
       newOption.setAttribute("value", "1");
        document.forms.strpricer.primecoats.insertBefore(newOption,document.forms.strpricer.primecoats.childNodes[2]);
    }
  }else if(document.forms.strpricer.primecoats.options[1].value==1)
    {
    	document.forms.strpricer.primecoats.remove(1);
    }
    
}


function clothPrice()
{
var inflation = 0; //messy way to increase prices
var strlength = parseFloat(document.forms.strpricer.strlength.value, 10);
var strheight = parseFloat(document.forms.strpricer.strheight.value, 10);

var productname = document.forms.strpricer.baproductname.value;

if (isNaN(strlength)) {strlength=0;}
if (isNaN(strheight)) {strheight=0;}

var squareinch = strheight * strlength;

if (!(squareinch)){
	var strtext = "Please enter dimensions for your stretcher.\n";
	document.forms.strpricer.strnotes.value = strtext;
	return;
	};


var clothtype = parseInt(document.forms.strpricer.cmaterial.value, 10);

if (isNaN(clothtype)) {clothtype=0;}

if (!(clothtype)){
	document.forms.strpricer.cprice.value = "$0.00";	
	document.forms.strpricer.ctotprice.value = "$0.00";
	return;
}

var cindex = document.forms.strpricer.cmaterial.selectedIndex;
var cname = document.forms.strpricer.cmaterial.options[cindex].text;

productname += "  Stretched with " + " " + cname + ".";


var primed = parseInt(document.forms.strpricer.primecoats.value, 10);
var pcindex = document.forms.strpricer.primecoats.selectedIndex;
var pcname = document.forms.strpricer.primecoats.options[pcindex].text;

productname += "  Primed with " + " " + pcname;


var primetype = parseFloat(document.forms.strpricer.primetype.value, 10);
var ptindex = document.forms.strpricer.primetype.selectedIndex;
var ptname = document.forms.strpricer.primetype.options[ptindex].text;
productname += "  " + ptname + ".";

	
var pprice = 0;
var cbase = .06;
var pbase = .042;


var cmulti = [0,0,.12,.5,.8,1.5,1,.7]; //none, 12, 10, 12 primed, 10 primed, xtra smmoth,medium smooth, coarse
var pmulti = .4;


if (isNaN(strheight)) {strheight=0;}
if (isNaN(strlength)) {strlength=0;}


var tempprice = 0;
var primecost=0;
var extracoats=0;


if (squareinch>11999){
cmodifier=.049;
pmodifier=.0332;
}else if (squareinch>10699){
cmodifier=.048;
pmodifier=.033;
}else if (squareinch>9599){
cmodifier=.0475;
pmodifier=.0325;
}else if (squareinch>8799){
cmodifier=.047;
pmodifier=.0323;
}else if (squareinch>7999){
cmodifier=.0465;
pmodifier=.032;
}else if (squareinch>7299){
cmodifier=.046;
pmodifier=.0305;
}else if (squareinch>6499){
cmodifier=.0455;
pmodifier=.03;
}else if (squareinch>5999){
cmodifier=.045;
pmodifier=.0295;
}else if (squareinch>5499){
cmodifier=.0445;
pmodifier=.029;
}else if (squareinch>4999){
cmodifier=.044;
pmodifier=.0285;
}else if (squareinch>4599){
cmodifier=.043;
pmodifier=.028;
}else if (squareinch>4199){
cmodifier=.042;
pmodifier=.0275;
}else if (squareinch>3799){
cmodifier=.041;
pmodifier=.027;
}else if (squareinch>3299){
cmodifier=.040;
pmodifier=.026;
}else if (squareinch>2899){
cmodifier=.039;
pmodifier=.025;
}else if (squareinch>2499){
cmodifier=.037;
pmodifier=.024;
}else if (squareinch>1999){
cmodifier=.036;
pmodifier=.023;
}else if (squareinch>1599){
cmodifier=.035;
pmodifier=.02;
}else if (squareinch>1299){
cmodifier=.032;
pmodifier=.017;
}else if (squareinch>999){
cmodifier=.026;
pmodifier=.015;
}else if (squareinch>699){
cmodifier=.02;
pmodifier=.012;
}else if (squareinch>399){
cmodifier=.015;
pmodifier=.01;
}else if (squareinch>199){
cmodifier=.01;
pmodifier=.007;
}else if (squareinch>0){
cmodifier=0;
pmodifier=0;
}

cprice = (cbase-cmodifier)*squareinch;
cprice = cprice + cmulti[clothtype]*cprice;
if (cprice<7){cprice=7;}



if (primed>0){
pprice = (pbase-pmodifier)*squareinch;
pxtra = pmulti*pprice;
if (pxtra <4){pxtra=4;}
if (pprice < 7){pprice=7;}

if (primed==1){pprice = (pprice + pxtra)/2;
   }else{pprice = pprice + pxtra*(primed-1);
   }

if (primetype){
	pprice *= primetype;
}

}
totalprice = cprice + pprice;




totalprice = totalprice + inflation*totalprice;

totalprice = Math.round(100*totalprice)/100;

totalprice = totalprice.toFixed(2);

cprice = cprice.toFixed(2);
document.forms.strpricer.cprice.value = "$" + cprice ;

pprice = pprice.toFixed(2);
document.forms.strpricer.pprice.value = "$" + pprice ;
document.forms.strpricer.ctotprice.value = "$" + totalprice ;

document.forms.strpricer.baproductname.value = productname;

}