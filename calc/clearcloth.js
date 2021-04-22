// JavaScript Document - panel price calculator

function clothPrice()
{
var inflation = 0; //messy way to increase prices
var cheight = parseFloat(document.forms.strpricer.strlength.value, 10);
var cwidth = parseFloat(document.forms.strpricer.strwidth.value, 10);
var squareinch = cwidth * cheight;

var clothtype = parseInt(document.forms.strpricer.cmaterial.value, 10);
var primed = parseInt(document.forms.strpricer.primecoats.value, 10);

var pprice = 0;
var cbase = .06;
var pbase = .042;


var cmulti = [0,.12,.5,1.5,1,.7]; //12, 10, 12 primed,xtra smmoth,medium smooth, coarse
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


document.forms.strpricer.cprice.value = "$0.00";

}

