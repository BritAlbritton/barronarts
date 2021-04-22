// JavaScript Document - panel price calculator

function clothPrice()
{
var cheight = parseFloat(document.forms.cpricer.cheight.value, 10);
var cwidth = parseFloat(document.forms.cpricer.cwidth.value, 10);
var squareinch = cwidth * cheight;

var clothtype = parseInt(document.forms.cpricer.cmaterial.value, 10);
var primed = parseInt(document.forms.cpricer.primecoats.value, 10);

var primedprice = 0;
var cmaterial = [];

var inflation = 0;

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
cmaterial[0]=0.011;
cmaterial[1]=0.0155;
cmaterial[2]=0.02;
cmaterial[3]=0.03;
primecost=0.0088;
extracoats=0.0055;
}else if (squareinch>10699){
cmaterial[0]=0.012;
cmaterial[1]=0.016;
cmaterial[2]=0.021;
cmaterial[3]=0.031;
primecost=0.009;
extracoats=0.006;
}else if (squareinch>9599){
cmaterial[0]=0.0125;
cmaterial[1]=0.0165;
cmaterial[2]=0.022;
cmaterial[3]=0.032;
primecost=0.0095;
extracoats=0.0065;
}else if (squareinch>8799){
cmaterial[0]=0.013;
cmaterial[1]=0.017;
cmaterial[2]=0.023;
cmaterial[3]=0.033;
primecost=0.0097;
extracoats=0.007;
}else if (squareinch>7999){
cmaterial[0]=0.0135;
cmaterial[1]=0.0175;
cmaterial[2]=0.024;
cmaterial[3]=0.034;
primecost=0.01;
extracoats=0.0075;
}else if (squareinch>7299){
cmaterial[0]=0.014;
cmaterial[1]=0.018;
cmaterial[2]=0.025;
cmaterial[3]=0.035;
primecost=0.0115;
extracoats=0.0079;
}else if (squareinch>6499){
cmaterial[0]=0.0145;
cmaterial[1]=0.0185;
cmaterial[2]=0.026;
cmaterial[3]=0.036;
primecost=0.012;
extracoats=0.0063;
}else if (squareinch>5999){
cmaterial[0]=0.015;
cmaterial[1]=0.019;
cmaterial[2]=0.027;
cmaterial[3]=0.037;
primecost=0.0125;
extracoats=0.0067;
}else if (squareinch>5499){
cmaterial[0]=0.0155;
cmaterial[1]=0.02;
cmaterial[2]=0.028;
cmaterial[3]=0.038;
primecost=0.013;
extracoats=0.0071;
}else if (squareinch>4999){
cmaterial[0]=0.016;
cmaterial[1]=0.021;
cmaterial[2]=0.029;
cmaterial[3]=0.039;
primecost=0.0135;
extracoats=0.0075;
}else if (squareinch>4599){
cmaterial[0]=0.017;
cmaterial[1]=0.022;
cmaterial[2]=0.03;
cmaterial[3]=0.04;
primecost=0.014;
extracoats=0.0078;
}else if (squareinch>4199){
cmaterial[0]=0.018;
cmaterial[1]=0.023;
cmaterial[2]=0.032;
cmaterial[3]=0.042;
primecost=0.0145;
extracoats=0.0081;
}else if (squareinch>3799){
cmaterial[0]=0.019;
cmaterial[1]=0.024;
cmaterial[2]=0.035;
cmaterial[3]=0.045;
primecost=0.015;
extracoats=0.0084;
}else if (squareinch>3299){
cmaterial[0]=0.02;
cmaterial[1]=0.025;
cmaterial[2]=0.038;
cmaterial[3]=0.048;
primecost=0.016;
extracoats=0.0087;
}else if (squareinch>2899){
cmaterial[0]=0.021;
cmaterial[1]=0.026;
cmaterial[2]=0.042;
cmaterial[3]=0.052;
primecost=0.017;
extracoats=0.009;
}else if (squareinch>2499){
cmaterial[0]=0.023;
cmaterial[1]=0.027;
cmaterial[2]=0.045;
cmaterial[3]=0.055;
primecost=0.018;
extracoats=0.0092;
}else if (squareinch>1999){
cmaterial[0]=0.024;
cmaterial[1]=0.028;
cmaterial[2]=0.05;
cmaterial[3]=0.06;
primecost=0.019;
extracoats=0.0094;
}else if (squareinch>1599){
cmaterial[0]=0.025;
cmaterial[1]=0.03;
cmaterial[2]=0.055;
cmaterial[3]=0.065;
primecost=0.022;
extracoats=0.0097;
}else if (squareinch>1299){
cmaterial[0]=0.028;
cmaterial[1]=0.032;
cmaterial[2]=0.06;
cmaterial[3]=0.07;
primecost=0.025;
extracoats=0.01;
}else if (squareinch>999){
cmaterial[0]=0.034;
cmaterial[1]=0.04;
cmaterial[2]=0.065;
cmaterial[3]=0.075;
primecost=0.027;
extracoats=0.011;
}else if (squareinch>699){
cmaterial[0]=0.04;
cmaterial[1]=0.045;
cmaterial[2]=0.07;
cmaterial[3]=0.08;
primecost=0.03;
extracoats=0.012;
}else if (squareinch>399){
cmaterial[0]=0.045;
cmaterial[1]=0.05;
cmaterial[2]=0.075;
cmaterial[3]=0.085;
primecost=0.032;
extracoats=0.013;
}else if (squareinch>199){
cmaterial[0]=0.05;
cmaterial[1]=0.06;
cmaterial[2]=0.08;
cmaterial[3]=0.09;
primecost=0.035;
extracoats=0.015;
}else if (squareinch>0){
cmaterial[0]=0.06;
cmaterial[1]=0.064;
cmaterial[2]=0.085;
cmaterial[3]=0.095;
primecost=0.042;
extracoats=0.02;
}


tempprice = squareinch * cmaterial[clothtype];
tempfirstcoat = squareinch * primecost;
tempextracoats = squareinch *(primed-1)*extracoats;


if (primed>0){
primedprice = tempfirstcoat + tempextracoats;
}

totalprice = tempprice + primedprice;

totalprice = totalprice + inflation*totalprice;

totalprice = Math.round(100*totalprice)/100;

document.forms.cpricer.cprice.value = "$" + totalprice ;

}

