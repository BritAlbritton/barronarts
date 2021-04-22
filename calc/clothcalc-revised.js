// JavaScript Document - panel price calculator

function clothPrice()
{
var inflation = 0; //messy way to increase prices
var cheight = parseFloat(document.forms.cpricer.cheight.value, 10);
var cwidth = parseFloat(document.forms.cpricer.cwidth.value, 10);
var squareinch = cwidth * cheight;

var clothtype = parseInt(document.forms.cpricer.cmaterial.value, 10);
var primed = parseInt(document.forms.cpricer.primecoats.value, 10);


var pprice = 0;
var cbase = .06;
var pbase = .042;


var cmulti = [0,.12,.15,.5,1.5,1,.7]; //12, 10, 12 primed, 10 primed, xtra smooth,medium smooth, coarse
var pmulti = .4;


if (isNaN(cwidth)) {cwidth=0;}
if (isNaN(cheight)) {cheight=0;}

if (cheight>=cwidth){
xdim = cheight;
ydim = cwidth;
} else {
xdim = cwidth;
ydim = cheight;
}

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

if (primed>0){
pprice = (pbase-pmodifier)*squareinch;
pprice = pprice + pmulti*(primed-1)*pprice;
}


totalprice = cprice + pprice;

totalprice = totalprice + inflation*totalprice;

totalprice = Math.round(100*totalprice)/100;

document.forms.cpricer.cprice.value = "$" + totalprice ;

}

