var myLoc;
var myMap;
var canvas;
var mappa = new Mappa('MapboxGL','pk.eyJ1IjoidGVyZWNyZW0iLCJhIjoiY2pvcjBlMWc4MDFhMDNxcDg5aWYybXN4ZiJ9.5qzchwnu0fShyEPBjSJBpA')

//
var aqLat= 42.3633848;
var aqLon= 13.3857661;

var options= {
  lat:aqLat,
  lng:aqLon, // nella libreria longitutidine è sempre lng ricordati
  zoom:4.5,
  style: 'mapbox://styles/terecrem/cjor0kfuofyjc2qnxa9c8fyuj' // how to load the tile
}

// Roma
var romaLat=41.9100711;
var romaLon=12.5359979;

var Roptions= {
  lat:romaLat,
  lng:romaLon,
}

// Torino
var toLat=45.073646;
var toLon=7.5358659;

var Toptions= {
  lat:toLat,
  lng:toLon, // nella libreria longitutidine è sempre lng

}

// Firenze
var firLat=43.7801209;
var firLon=11.1012271;

var Foptions= {
  lat:firLat,
  lng:firLon, // nella libreria longitutidine è sempre lng

}

// Napoli
var naLat=40.8537893;
var naLon=13.9635072;

var Noptions= {
  lat:naLat,
  lng:naLon, // nella libreria longitutidine è sempre lng
 // how to load the tile
}
// Bologna
var bolLat=44.4992779;
var bolLon=11.1919448;

var Boptions= {
  lat:bolLat,
  lng:bolLon, // nella libreria longitutidine è sempre lng

}

// Bari
var baLat=41.1115569
var baLon=16.6025805

var BAnoptions= {
  lat:baLat,
  lng:baLon, // i

}

// Cagliari
var cagLat=39.2255165
var cagLon=9.0585096

var CAoptions= {
  lat:cagLat,
  lng:cagLon, //
 // how to load the tile
}

// Venezia
var veLat=45.404144
var veLon=11.8226851

var veoptions= {
  lat:veLat,
  lng:veLon, //

}
// Palermo
var paLat=38.1404604
var paLon=13.2172042

var paoptions= {
  lat:paLat,
  lng:paLon, //

}


function preload(){
  myLoc= getCurrentPosition();
}

function setup() {
  canvas= createCanvas(windowWidth,windowHeight);

  myMap= mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  //pulisci la canvas ogni volta
  clear()
  fill('red');

//Milano
var point=myMap.latLngToPixel(myLoc.latitude,myLoc.longitude)
fill('#19488e')
ellipse(point.x+random(-4,4),point.y+random(-4,4),35);
textFont('Andale Mono')
textStyle('bold')
textSize(22)
fill('white')
text('1,352milioni',point.x-20,point.y-20)



//Roma
  fill('#2071ec');
  var point = myMap.latLngToPixel(romaLat,romaLon)
  ellipse(point.x+random(-4,4),point.y+random(-4,4),40)
  textFont('Andale Mono')
  textStyle('bold')
  textSize(22)
  fill('white')
  text('2,873milioni ',point.x-20,point.y-20)



 //Torino
 fill('#19488e');
 var point = myMap.latLngToPixel(toLat,toLon)
 ellipse(point.x+random(-4,4),point.y+random(-4,4),22)
 textFont('Andale Mono')
 textStyle('bold')
 textSize(22)
 fill('white')
 text('886.837mila ',point.x-20,point.y-20)

 //Firenze
 fill('#2071ec');
 var point = myMap.latLngToPixel(firLat,firLon)
 ellipse(point.x+random(-4,4),point.y+random(-4,4),15)
 textFont('Andale Mono')
 textStyle('bold')
 textSize(22)
 fill('white')
 text('382.258mila ',point.x-20,point.y-20)




 //Napoli
 fill('#19488e');
 var point = myMap.latLngToPixel(naLat,naLon)
 ellipse(point.x+random(-4,4),point.y+random(-4,4),25)
 textFont('Andale Mono')
 textStyle('bold')
 textSize(22)
 fill('white')
 text('983.755mila ',point.x-20,point.y-20)

 //Bologna
 fill('#2071ec');
 var point = myMap.latLngToPixel(bolLat,bolLon)
 ellipse(point.x+random(-4,4),point.y+random(-4,4),15)
 textFont('Andale Mono')
 textStyle('bold')
 textSize(22)
 fill('white')
 text('388.367mila ',point.x-20,point.y-20)


 //Cagliari
 fill('#2071ec');
 var point = myMap.latLngToPixel(cagLat,cagLon)
 ellipse(point.x+random(-4,4),point.y+random(-4,4),10)
 textFont('Andale Mono')
 textStyle('bold')
 textSize(22)
 fill('white')
 text('154.083 mila ',point.x-20,point.y-20)

 //Venezia
 fill('#2071ec');
 var point = myMap.latLngToPixel(veLat,veLon)
 ellipse(point.x+random(-4,4),point.y+random(-4,4),10)
 textFont('Andale Mono')
 textStyle('bold')
 textSize(22)
 fill('white')
 text('261.905mila ',point.x-20,point.y-20)

 //Paelrmo
 fill('#2071ec');
 var point = myMap.latLngToPixel(paLat,paLon)
 ellipse(point.x+random(-4,4),point.y+random(-4,4),16)
 textFont('Andale Mono')
 textStyle('bold')
 textSize(22)
 fill('white')
 text('673.735 mila ',point.x-20,point.y-20)


 textFont('Andale Mono')
 textStyle('bold')
 textSize(22)
 fill('#c30081')
 text(' how many people live in Italian cities? ',400,40)



}
