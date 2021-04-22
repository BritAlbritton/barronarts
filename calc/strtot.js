// JavaScript Document

function totPrice()
{
	checkCookie("inflation");
	strPrice(inflation);
	clothPrice(inflation);
document.getElementById(cname).innerHTML = inflation;
	var producttype = '';

var strlength = parseFloat(document.forms.strpricer.strlength.value, 10);
var strheight = parseFloat(document.forms.strpricer.strheight.value, 10);

if (isNaN(strlength)) {strlength=0;}
if (isNaN(strheight)) {strheight=0;}

var squareinch = strheight * strlength;


if (!(squareinch)){
	var strtext = "Please enter dimensions for your stretcher.\n";
	document.forms.strpricer.strnotes.value = strtext;
	return;
	};

var tempstrprice = document.forms.strpricer.strprice.value;
var tempcprice = document.forms.strpricer.ctotprice.value;



var strprice = parseFloat(tempstrprice.substr(1), 10);
var cprice = parseFloat(tempcprice.substr(1), 10);

totprice = strprice + cprice;

var strunits = parseInt(document.forms.strpricer.strunits.value, 10);

if (!strunits){
	            strunits=1;
	            document.forms.strpricer.strunits.value=1;
	          }

totprice *= strunits;

totprice = totprice.toFixed(2);
document.forms.strpricer.totprice.value = "$" + totprice ;


var productname = strlength + '\" ' + strheight + " " + producttype;

//document.forms.cpricer.baproductname.value = productname;



var now = (new Date( )).getTime( );
var productid = now;

/**
document.forms.strpricer.baproductid.value = productid;
document.forms.strpricer.baproductname.value = productname;
document.forms.strpricer.baproductprice.value = totprice;
document.forms.strpricer.baproductqty.value = 1;
**/
}

