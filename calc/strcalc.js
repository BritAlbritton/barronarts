// JavaScript Document

function strPrice()
{

var strlength = Math.ceil(parseFloat(document.forms.strpricer.strlength.value, 10));
var strwidth = Math.ceil(parseFloat(document.forms.strpricer.strwidth.value, 10));
var linearft = ((2 * strlength) + (2 * strwidth))/12;
var bwidth = Math.ceil(parseFloat(document.forms.strpricer.bwidth.value, 10));
var blength = Math.ceil(parseFloat(document.forms.strpricer.blength.value, 10));

if (isNaN(blength)) {blength=0;}
if (isNaN(bwidth)) {bwidth=0;}

var lrecomend = "";
var wrecomend = "";

var strtext = "";

var leven = 0;
var weven = 0;

var wfix = 0;
var lfix = 0;

var leven = strlength%36;
if (!leven) {var lfix = 1;}

var override = document.forms.strpricer.overrride.checked;

if (override){
	strtext = "You have chosen to override our recommended number of braces. For details, please contact a sales representative.\n";
}

var calcblength = Math.floor(strlength/36) - lfix;
if ((calcblength)&& (!(override))){
	var lengthcross = calcblength;
	lrecomend = "our minimum recommendation of ";
}else {var lengthcross = blength;}
document.forms.strpricer.blength.value = lengthcross;

var weven = strwidth%36;
if (!weven) {var wfix = 1;}

var calcbwidth = Math.floor(strwidth/36) - wfix;
if ((calcbwidth)&& (!(override))){
	var widthcross = calcbwidth;
	wrecomend = "our minimum recommendation of ";
}else {var widthcross = bwidth;}
document.forms.strpricer.bwidth.value = widthcross;


if (lengthcross == 1){lcrosstext = "crossbrace";}else {lcrosstext = "crossbraces";}
if (widthcross == 1){wcrosstext = "crossbrace";}else {wcrosstext = "crossbraces";}

if (lengthcross){
   strtext += "Price includes " + lrecomend + lengthcross + " " + strwidth + "\" " + lcrosstext + " lengthwise";
   linearft = linearft + (lengthcross * strwidth)/12;
   if (widthcross) {
   	strtext = strtext + " and " + wrecomend + widthcross + " " + strlength + "\" " + wcrosstext + " widthwise.  ";
   	linearft = linearft + (widthcross * strlength)/12;
    }else {strtext = strtext + ".  "}
}else if (widthcross) {
	strtext += "Price includes " + wrecomend + widthcross + " " + strlength + "\" " + wcrosstext + " widthwise.  ";
    	linearft = linearft + (widthcross * strlength)/12;
    	}

var style = parseFloat(document.forms.strpricer.strstyle.value, 10);
var collapse = document.forms.strpricer.collapse.checked;
var collapseprice  = 0;
var folds = parseInt(document.forms.strpricer.strfolds.value, 10);

if (collapse){
  if (style == 3.25){
        collapse = 0;
        strtext = strtext + "The COLLAPSIBLE option is not available for B-BARS.";
  }else {collapseprice = .40;}
}



if (folds){
   if (style < 4){
	document.forms.strpricer.strfolds.value = 0;
        folds = 0;
        strtext = strtext + "Folds are only available for PRO-BARS.";
                  }
        }          

tempprice = (linearft * (style + collapseprice)) + folds;

totalprice = tempprice.toFixed(2);

document.forms.strpricer.price.value = "$" + totalprice ;

document.forms.strpricer.strnotes.value = strtext;
}

