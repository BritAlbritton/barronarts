// JavaScript Document - frame price framealculator


function framePrice()
{
var productname="";
var frametext = "";
document.forms.framepricer.framenotes.value = frametext;

var materialbase = .8;
var finishbase = .20;
var inflation = 0; //for increasing the entire price
	
var framelength = parseFloat(document.forms.framepricer.framelength.value, 10);
var framewidth = parseFloat(document.forms.framepricer.framewidth.value, 10);
if (isNaN(framelength)) {framelength=0;}
if (isNaN(framewidth)) {framewidth=0;}

var linearinches = 2*(framelength + framewidth);

if (!(linearinches)){
	frametext = "Please enter the dimensions of the artwork to be framed.\n";
	document.forms.framepricer.framenotes.value = frametext;
	return;
	};

var framedepth = parseFloat(document.forms.framepricer.framedepth.value, 10);
if (isNaN(framedepth)) {framedepth=0;}

if ((framedepth<.5)){
	frametext = "Artwork placed in floater frames must be at least .5 inch deep.  Please contact us to discuss your options.\n";
	document.forms.framepricer.framenotes.value = frametext;
	return;
	};

productname = 'Frame for ' + framelength + '"x' + framewidth + '"x' + framedepth + '" artwork. ';


var frameextend = parseFloat(document.forms.framepricer.frameextend.value, 10);


if (isNaN(frameextend)) {frameextend=.25;} //in case anything truly strange happens

var totdepth = framedepth + frameextend;

var depthmultiplier = 0;

if (totdepth>1.25){
	extradepth = Math.round((totdepth-1.25)/.25);
	depthmultiplier = extradepth * .07;
}

depthbase = materialbase * depthmultiplier;


var frameface = parseFloat(document.forms.framepricer.frameface.value, 10);
if (isNaN(frameface)) {frameface=0;}



var facemultiplier = 0;

if (frameface >= .75){
	facemultiplier = .2;
}

if (frameface >= 1){
	facemultiplier = .35;
}

facebase = materialbase * facemultiplier;


var framefloat = parseFloat(document.forms.framepricer.framefloat.value, 10);
if (isNaN(framefloat)) {framefloat=0;}

var floatmultiplier = 0;

if (framefloat >= .75){
	floatmultiplier = .1;
}

if (framefloat >= 1){
	floatmultiplier = .2;
}

productname += "Frame thickness:" + frameface + "\", float: "+ framefloat + "\", extend: " +  frameextend + "\". ";


floatbase = materialbase * floatmultiplier;



var framematerial = document.forms.framepricer.framematerial.value;
var fmindex = document.forms.framepricer.framematerial.selectedIndex;
var fmname = document.forms.framepricer.framematerial.options[fmindex].text;

productname += fmname;

var materialvalue = {
	    Poplar: 1,
      Maple: 2,
      Oak: 1.7
};

materialmultiplier =  parseFloat(materialvalue[framematerial]);

if (isNaN(materialmultiplier)) {materialmultiplier=1;}

var baseprice = materialmultiplier * (materialbase + facebase + floatbase + depthbase);

var subbase = baseprice * linearinches;

var framefinish = document.forms.framepricer.framefinish.value;
var ffindex = document.forms.framepricer.framefinish.selectedIndex;
var ffname = document.forms.framepricer.framefinish.options[ffindex].text;
productname += ", " + ffname +".";

var finishvalue = {
	    None: 0,
      ClearCote: 1,
      White: 1.5,
      Black: 1.75,
      TTWhite: 2.5,
      TTClear: 2.5          
};

var finishmultiplier =  parseFloat(finishvalue[framefinish]);

var subfinish = linearinches * finishbase * finishmultiplier;

totalprice = subfinish + subbase;

totalprice = totalprice + inflation*totalprice;

if (totalprice>0){
	document.getElementById("cartaddbutton").style.display = "inline";
}


totalprice = Math.round(100*totalprice)/100;





var now = (new Date( )).getTime( );    
var productid = now;


document.forms.framepricer.baproductid.value = productid;
document.forms.framepricer.baproductname.value = productname;
document.forms.framepricer.baproductprice.value = totalprice;
document.forms.framepricer.baproductqty.value = 1;


document.forms.framepricer.frameprice.value = "$" + totalprice ;
}

