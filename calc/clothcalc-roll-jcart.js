// JavaScript Document - canvas and linen roll price calculator


var cpicklist=new Array();
cpicklist[0]=["72\" at $10.25 per yrd.|10.25","84\" at $12.50 per yrd.|12.5","96\" at $15.35 per yrd.|15.35","120\" at $18.55 per yrd.|18.55"];
cpicklist[1]=["60\" at $7.25 per yrd.|7.25","72\" at $8.50 per yrd.|8.5","84\" at $10.50 per yrd.|10.5","96\" at $13.55 per yrd.|13.55","120\" at $16.95 per yrd.|16.95"];
cpicklist[2]=["60\" at $17.00 per yrd.|17","72\" at $19.00 per yrd.|19","84\" at $22.00 per yrd.|22","96\" at $28.00 per yrd.|28"];
cpicklist[3]=["#5804-85\" at $41.99 per yrd.|41.99","#5804-120\" at $65.15 per yrd.|65.15"];
cpicklist[4]=["#9607-85\" at $35.70 per yrd.|35.7","#2325-96\" at $38.75 per yrd.|38.75"];
cpicklist[5]=["#9601-55\" at $29.55 per yrd.|29.55"];


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

var inflation = 0; //messy way to increase prices
var clength = parseFloat(document.forms.pricer.clength.value, 10);


var unitprice = parseFloat(document.forms.pricer.cwidthcost.value, 10);


if (isNaN(clength)) {clength=0;}
if (isNaN(unitprice)) {unitprice=0;}


var ptindex = document.forms.pricer.cmaterial.selectedIndex;
var pwindex = document.forms.pricer.cwidthcost.selectedIndex;

var producttype = document.forms.pricer.cmaterial.options[ptindex].text;
var productwidth = document.forms.pricer.cwidthcost.options[pwindex].text;


var productname = clength + " yrd(s) of " + productwidth + " " + producttype;

totalprice = clength * unitprice;

totalprice = totalprice + inflation*totalprice;

if (totalprice>0){
	document.getElementById("cartaddbutton").style.display = "inline";
}

totalprice = Math.round(100*totalprice)/100;

totalprice = totalprice.toFixed(2);

document.forms.pricer.price.value = "$" + totalprice ;


var now = (new Date( )).getTime( );    
var productid = now;


document.forms.pricer.baproductid.value = productid;
document.forms.pricer.baproductname.value = productname;
document.forms.pricer.baproductprice.value = totalprice;
document.forms.pricer.baproductqty.value = 1;
}

