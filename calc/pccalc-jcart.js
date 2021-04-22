function panelPrice()
{
with (document.forms.pricer)
{
var panelradius = parseInt(panelsize.value);
var isdeep = parseInt(paneldepth.value);
var isprime = panelprime.checked;
if (panelradius == 6){
  baseprice = 4.95;
  adddepth = 1;
  primeprice = 3;  
  } else if  (panelradius == 8){
  baseprice = 7.95;
  adddepth = 1;
  primeprice = 5;  
} else if  (panelradius == 10){
  baseprice = 10.95;
  adddepth = 1;
  primeprice = 7;  
} else if  (panelradius == 12){
  baseprice = 13.95;
  adddepth = 1;
  primeprice = 8;  
} else if  (panelradius == 16){
  baseprice = 18.95;
  adddepth = 1;
  primeprice = 9;  
} else if  (panelradius == 18){
  baseprice = 19.95;
  adddepth = 1;
  primeprice = 10;  
} else if  (panelradius == 20){
  baseprice = 22.95;
  adddepth = 1;
  primeprice = 11;  
} else if  (panelradius == 22){
  baseprice = 23.95;
  adddepth = 1;
  primeprice = 12;  
} else if  (panelradius == 24){
  baseprice = 26.95;
  adddepth = 1;
  primeprice = 13;  
} else if  (panelradius == 26){
  baseprice = 30.95;
  adddepth = 2;
  primeprice = 14;  
} else if  (panelradius == 30){
  baseprice = 35.95;
  adddepth = 2;
  primeprice = 16;  
}

calcprice = baseprice;
if (isdeep){calcprice = calcprice+adddepth};
if (isprime){calcprice = calcprice+primeprice};
panelprice.value = "$" + calcprice;
}
}