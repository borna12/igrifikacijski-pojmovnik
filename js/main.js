let opci =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRaI_0vQEE-fU0YSeqPP7MbeO50WVpCq3eVlJTIYT38wJmqdBYKYMaShXrQ5_kJp9yB05RXjTIg9P-M/pub?output=csv";
let igri =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRaI_0vQEE-fU0YSeqPP7MbeO50WVpCq3eVlJTIYT38wJmqdBYKYMaShXrQ5_kJp9yB05RXjTIg9P-M/pub?gid=1511790161&single=true&output=csv";
let tipovi =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRaI_0vQEE-fU0YSeqPP7MbeO50WVpCq3eVlJTIYT38wJmqdBYKYMaShXrQ5_kJp9yB05RXjTIg9P-M/pub?gid=1275070507&single=true&output=csv";

window.addEventListener("DOMContentLoaded", init);
function init() {
Papa.parse(opci, {
    download: true,
    header: true,
    complete: opciNazivi,
  });
  Papa.parse(igri, {
    download: true,
    header: true,
    complete: igriNazivi,
  });
  Papa.parse(tipovi, {
    download: true,
    header: true,
    complete: tipoviNazivi,
  });
}

  function opciNazivi(data) {
    data = data.data;
    for (let row = 0; row < data.length; row++) 
    {
        br=row+1
        document.getElementById("nazivi").innerHTML +="<tr><td >"+data[row].Engleski+"</td><td>"+data[row].Hrvatski+"</td><td>"+data[row].Definicija+"</td><td>"+data[row].Izvori+"</td></tr>"  
    }  
  }

  function igriNazivi(data) {
    data = data.data;
    for (let row = 0; row < data.length; row++) 
    {
        br=row+1
        document.getElementById("nazivi2").innerHTML +="<tr><td >"+data[row].Engleski+"</td><td>"+data[row].Hrvatski+"</td><td>"+data[row].Definicija+"</td><td>"+data[row].Izvori+"</td></tr>"  
    }  
  }

  function tipoviNazivi(data) {
    data = data.data;
    for (let row = 0; row < data.length; row++) 
    {
        br=row+1
        document.getElementById("nazivi3").innerHTML +="<tr><td >"+data[row].Engleski+"</td><td>"+data[row].Hrvatski+"</td><td>"+data[row].Definicija+"</td><td>"+data[row].Izvori+"</td></tr>"  
    }  
  }

 

  $(document).foundation();