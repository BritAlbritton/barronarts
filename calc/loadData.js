loadXMLDoc();

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("inflation").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://docs.google.com/spreadsheet/pub?key=1Vy87dq49E0bw6vA5eDy4O5C_IYutCWPWTXylPdnV1K4&single=true&gid=0&range=B2&output=csv", true);
  xhttp.send();
}