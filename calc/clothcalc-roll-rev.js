// JavaScript Document - canvas and linen roll price calculator



var cpicklist=new Array();
cpicklist[0]=['72"|10.25','84"|12.5','96"|15.35','120"|18.55'];
cpicklist[1]=['60"|7.25','72"|8.5','84"|10.5','96"|13.55','120"|16.95'];
cpicklist[2]=['60"|17','72"|19','84"|22','96"|28'];
cpicklist[3]=['#5804-85"|41.99','#5804-120"|65.15'];
cpicklist[4]=['#9607-85"|35.7','#2325-96"|38.75'];
cpicklist[5]=['#9601-55"|29.55'];


function picklistBySel(picklistId,listIndex) {
    var d=document;
    if (!d.getElementById ) return;
    var picklistobj = d.getElementById(picklistId);
    
    if(picklistobj){
    	
		picklistobj.options.length=0;
  
    selectedarray=cpicklist[listIndex];
    
  for (i=0;i<selectedarray.length;i++){
		picklistobj.options[picklistobj.options.length]=new Option(selectedarray[i].split("|")[0],selectedarray[i].split("|")[1]);
		picklistobj.options[0].selected=true;}
	}
}




function clothPrice()
{
	
document.getElementById("cartaddbutton").style.display = 'none';

var inflation = .03; //messy way to increase prices
var clength = parseFloat(document.forms.cpricer.clength.value, 10);


var unitprice = parseFloat(document.forms.cpricer.cwidthcost.value, 10);


if (isNaN(clength)) {clength=0;}
if (isNaN(unitprice)) {unitprice=0;}


var ptindex = document.forms.cpricer.cmaterial.selectedIndex;
var pwindex = document.forms.cpricer.cwidthcost.selectedIndex;

var producttype = document.forms.cpricer.cmaterial.options[ptindex].text;
var productwidth = document.forms.cpricer.cwidthcost.options[pwindex].text;


var productname = clength + " yrd(s) of " + productwidth + " " + producttype;

document.forms.cpricer.baproductname.value = productname;

totalprice = clength * unitprice;

totalprice = totalprice + inflation*totalprice;

if (totalprice>0){
	document.getElementById("cartaddbutton").style.display = "inline";
}

totalprice = Math.round(100*totalprice)/100;

totalprice = totalprice.toFixed(2);

document.forms.cpricer.cprice.value = "$" + totalprice ;


var now = (new Date( )).getTime( );    
var productid = now;


document.forms.cpricer.baproductid.value = productid;
document.forms.cpricer.baproductname.value = productname;
document.forms.cpricer.baproductprice.value = totalprice;
document.forms.cpricer.baproductqty.value = 1;
}

