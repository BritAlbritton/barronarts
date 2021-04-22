// JavaScript Document

function strPrice()
{

var strtext = ""; //Clear notes field

var stretcher_inflation=document.getElementById("inflation").innerHTML; 

var strlength = Math.ceil(parseFloat(document.forms.strpricer.strlength.value, 10));
var strheight = Math.ceil(parseFloat(document.forms.strpricer.strheight.value, 10));

if (isNaN(strlength)) {strlength=0;}
if (isNaN(strheight)) {strheight=0;}


var squareinch = strheight * strlength;


if (!(squareinch)){
	var strtext = "Please enter dimensions for your stretcher.\n";
	document.forms.strpricer.strnotes.value = strtext;
	return;
	};

var linearft = ((2 * strlength) + (2 * strheight))/12;
var bheight = Math.ceil(parseFloat(document.forms.strpricer.bheight.value, 10));
var blength = Math.ceil(parseFloat(document.forms.strpricer.blength.value, 10));

if (isNaN(blength)) {blength=0;}
if (isNaN(bheight)) {bheight=0;}


var lrecomend = "";
var hrecomend = "";

var leven = 0;
var heven = 0;

var hfix = 0;
var lfix = 0;

var lengthcross = 0;
var heightcross = 0;

if (strlength > 36){
var leven = (strlength%36);
if (!leven) {var lfix = 1;}
}




if (strheight > 36){
var heven = (strheight%36);
if (!heven) {var hfix = 1;}
}

var calcblength = Math.floor(strlength/36) - lfix;
var calcbheight = Math.floor(strheight/36) - hfix;


var override = document.forms.strpricer.override.checked;

if (override){
	strtext += "You have chosen to override our recommended number of crossbars. For details, please contact a sales representative.\n";
}



if (!(override)){
	lengthcross = calcblength;
	heightcross = calcbheight;
	lrecomend = "our minimum recommendation of ";
	hrecomend = "our minimum recommendation of ";
	if ((blength && (blength != lengthcross)) || (bheight && (bheight != heightcross)))
	{strtext += "Crossbar numbers have been changed to reflect our recommendations.  To change these numbers, check the Override box.\n"; }
	} else {
	lengthcross = blength;
  heightcross = bheight;
       }

document.forms.strpricer.blength.value = lengthcross;
document.forms.strpricer.bheight.value = heightcross;


if (lengthcross == 1){lcrosstext = "crossbar";}else {lcrosstext = "crossbars";}
if (heightcross == 1){hcrosstext = "crossbar";}else {hcrosstext = "crossbars";}

if (lengthcross){
   strtext += "Price includes " + lrecomend + lengthcross + " " + strheight + "\" " + lcrosstext + " lengthwise";
   linearft = linearft + (lengthcross * strheight)/12;
   if (heightcross) {
   	strtext = strtext + " and " + hrecomend + heightcross + " " + strlength + "\" " + hcrosstext + " heightwise.  ";
   	linearft = linearft + (heightcross * strlength)/12;
    }else {strtext = strtext + ".  "}
}else if (heightcross) {
	strtext += "Price includes " + hrecomend + heightcross + " " + strlength + "\" " + hcrosstext + " heightwise.  ";
    	linearft = linearft + (heightcross * strlength)/12;
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

foldtot = 0;
if (folds){
   if (style < 4){
	document.forms.strpricer.strfolds.value = 0;
        folds = 0;
        strtext = strtext + "Folds are only available for PRO-BARS.";
                  }
    if (heightcross%2){
        strtext = strtext + "You have ordered an odd number of crossbars as well as a fold.  Please contact our sales team to discuss your options.";
                  }
  foldtot = folds*(65);
  if (lengthcross){
  	    foldtot = folds*(65 + (30*(lengthcross-1)));
        strtext = strtext + "You have ordered " + folds + " folds through "+lengthcross + " crossbars.";
                  }

        }

tempprice = (linearft * (style + collapseprice)) + foldtot;

tempprice = tempprice + (stretcher_inflation * tempprice);

totalprice = tempprice.toFixed(2);

document.forms.strpricer.strprice.value = "$" + totalprice ;

document.forms.strpricer.strnotes.value = strtext;
}

