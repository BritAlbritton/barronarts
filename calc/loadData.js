
var cname = "inflation";

inflation=checkCookie(cname);



function loadXMLDoc(cname) {
  var url = "https://docs.google.com/spreadsheet/pub?key=1Vy87dq49E0bw6vA5eDy4O5C_IYutCWPWTXylPdnV1K4&single=true&gid=0&range=B2&output=csv"	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = this.responseText;
        document.cookie = cname + "=" + response + "; samesite=strict;";
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  var cvalue = getCookie(cname);
  if (cvalue != "") {
   return cvalue;
  } else {
    loadXMLDoc(cname);
    checkCookie(cname);
    }
  }
