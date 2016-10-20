var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);

var jfkPosition = new google.maps.LatLng(42.320685, -71.052391);
var savinHillPosition = new google.maps.LatLng(42.31129, -71.053331);
var fieldsCornerPosition = new google.maps.LatLng(42.300093, -71.061667);
var shawmutPosition = new google.maps.LatLng(42.29312583, -71.06573796000001);
var ashmontPosition = new google.maps.LatLng(42.284652, -71.06448899999999);
var braintreePosition = new google.maps.LatLng(42.2078543, -71.0011385);
var quincyAPosition = new google.maps.LatLng(42.233391, -71.007153);
var quincyCPosition = new google.maps.LatLng(42.251809, -71.005409);
var wollastonPosition = new google.maps.LatLng(42.2665139, -71.0203369);
var northQuincyPosition = new google.maps.LatLng(42.275275, -71.0203369);
var alewifePosition = new google.maps.LatLng(42.395428, -71.142483);
var davisPosition = new google.maps.LatLng(42.39674, -71.121815);
var porterPosition = new google.maps.LatLng(42.3884, -71.11914899999999);
var harvardPosition = new google.maps.LatLng(42.373362, -71.118956);
var centralPosition = new google.maps.LatLng(42.373362, -71.118956);
var kendallPosition = new google.maps.LatLng(42.36249079, -71.08617653);
var charlesMGHPosition = new google.maps.LatLng(42.361166, -71.070628);
var parkPosition = new google.maps.LatLng(42.35639457, -71.0624242);
var downtownCrossingPosition = new google.maps.LatLng(42.355518, -71.060225);
var southPosition = new google.maps.LatLng(42.352271, -71.05524200000001);
var broadwayPosition = new google.maps.LatLng(42.342622, -71.056967);
var andrewPosition = new google.maps.LatLng(42.330154, -71.057655);

var myOptions = {
	zoom: 13, // The larger the zoom number, the bigger the zoom
	center: me,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map;

var marker;

var infowindow = new google.maps.InfoWindow();
			

function init() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();
}

function getMyLocation() {
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
		});
	}
	else {
		alert("Geolocation is not supported by your web browser");
	}
}

function renderMap() {

	// Custom color for MBTA Red Line Station pins
	var stationColor = "54d3e5";
	var stationImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"
		+ stationColor, new google.maps.Size(21, 34), new google.maps.Point(0,0), new google.maps.Point(10, 34));
	var stationShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
		new google.maps.Size(40, 37), new google.maps.Point(0, 0), new google.maps.Point(12, 35));

	
	// Create a marker for Andrew
	andrewMarker = new google.maps.Marker({
		position: andrewPosition,
		title: "Andrew",
		icon: stationImage,
        shadow: stationShadow
	});
	andrewMarker.setMap(map);

	google.maps.event.addListener(andrewMarker, 'click', function() {
		infowindow.setContent(andrewMarker.title);
		infowindow.open(map, andrewMarker);
	});


	// Create a marker for South Station
	southStation = new google.maps.Marker({
		position: southPosition,
		title: "South Station",
		icon: stationImage,
        shadow: stationShadow
   	});
	southStation.setMap(map);

	google.maps.event.addListener(southStation, 'click', function() {
		infowindow.setContent(southStation.title);
		infowindow.open(map, southStation);
	});


	// Create a marker for Porter Square
	porterSquare = new google.maps.Marker({
		position: porterPosition,
		title: "Porter Square",
		icon: stationImage,
        shadow: stationShadow
	});
	porterSquare.setMap(map);

	google.maps.event.addListener(porterSquare, 'click', function() {
		infowindow.setContent(porterSquare.title);
		infowindow.open(map, porterSquare);
	});

	// Create a marker for Harvard Square
	harvardSquare = new google.maps.Marker({
		position: harvardPosition,
		title: "Harvard Square",
		icon: stationImage,
        shadow: stationShadow
	});
	harvardSquare.setMap(map);

	google.maps.event.addListener(harvardSquare, 'click', function() {
		infowindow.setContent(harvardSquare.title);
		infowindow.open(map, harvardSquare);
	});


	// Create a marker for JFK/UMass
	jfkMarker = new google.maps.Marker({
		position: jfkPosition,
		title: "JFK/UMass",
		icon: stationImage,
        shadow: stationShadow
	});
	jfkMarker.setMap(map);

	google.maps.event.addListener(jfkMarker, 'click', function() {
		infowindow.setContent(jfkMarker.title);
		infowindow.open(map, jfkMarker);
	});


	// Create a marker for Savin Hill
	savinHill = new google.maps.Marker({
		position: savinHillPosition,
		title: "Savin Hill",
		icon: stationImage,
        shadow: stationShadow
	});
	savinHill.setMap(map);

	google.maps.event.addListener(savinHill, 'click', function() {
		infowindow.setContent(savinHill.title);
		infowindow.open(map, savinHill);
	});


	// Create a marker for Park Street
	parkStreet = new google.maps.Marker({
		position: parkPosition,
		title: "Park Street",
		icon: stationImage,
        shadow: stationShadow
	});
	parkStreet.setMap(map);

	google.maps.event.addListener(parkStreet, 'click', function() {
		infowindow.setContent(parkStreet.title);
		infowindow.open(map, parkStreet);
	});


	// Create a marker for Broadway
	broadway = new google.maps.Marker({
		position: broadwayPosition,
		title: "Broadway",
		icon: stationImage,
        shadow: stationShadow
	});
	broadway.setMap(map);

	google.maps.event.addListener(broadway, 'click', function() {
		infowindow.setContent(broadway.title);
		infowindow.open(map, broadway);
	});


	// Create a marker for North Quincy
	northQuincy = new google.maps.Marker({
		position: northQuincyPosition,
		title: "North Quincy",
		icon: stationImage,
        shadow: stationShadow
	});
	northQuincy.setMap(map);

	google.maps.event.addListener(northQuincy, 'click', function() {
		infowindow.setContent(northQuincy.title);
		infowindow.open(map, northQuincy);
	});


	// Create a marker for Shawmut
	shawmut = new google.maps.Marker({
		position: shawmutPosition,
		title: "Shawmut",
		icon: stationImage,
        shadow: stationShadow
	});
	shawmut.setMap(map);

	google.maps.event.addListener(shawmut, 'click', function() {
		infowindow.setContent(shawmut.title);
		infowindow.open(map, shawmut);
	});


	// Create a marker for Davis
	davis = new google.maps.Marker({
		position: davisPosition,
		title: "Davis",
		icon: stationImage,
        shadow: stationShadow
	});
	davis.setMap(map);

	google.maps.event.addListener(davis, 'click', function() {
		infowindow.setContent(davis.title);
		infowindow.open(map, davis);
	});


	// Create a marker for Alewife
	alewife = new google.maps.Marker({
		position: alewifePosition,
		title: "Alewife",
		icon: stationImage,
        shadow: stationShadow
	});
	alewife.setMap(map);

	google.maps.event.addListener(alewife, 'click', function() {
		infowindow.setContent(alewife.title);
		infowindow.open(map, alewife);
	});


	// Create a marker for Kendall/MIT
	kendallMarker = new google.maps.Marker({
		position: kendallPosition,
		title: "Kendall/MIT",
		icon: stationImage,
        shadow: stationShadow,
		icon: stationImage,
        shadow: stationShadow
	});
	kendallMarker.setMap(map);

	google.maps.event.addListener(kendallMarker, 'click', function() {
		infowindow.setContent(kendallMarker.title);
		infowindow.open(map, kendallMarker);
	});


	// Create a marker for Charles/MGH
	charlesMGH = new google.maps.Marker({
		position: charlesMGHPosition,
		title: "Charles/MGH",
		icon: stationImage,
        shadow: stationShadow
	});
	charlesMGH.setMap(map);

	google.maps.event.addListener(charlesMGH, 'click', function() {
		infowindow.setContent(charlesMGH.title);
		infowindow.open(map, charlesMGH);
	});

	// Create a marker for Downtown Crossing
	downtownCrossing = new google.maps.Marker({
		position: downtownCrossingPosition,
		title: "Downtown Crossing",
		icon: stationImage,
        shadow: stationShadow
	});
	downtownCrossing.setMap(map);

	google.maps.event.addListener(downtownCrossing, 'click', function() {
		infowindow.setContent(downtownCrossing.title);
		infowindow.open(map, downtownCrossing);
	});

	// Create a marker for Quincy Center
	quincyCenter = new google.maps.Marker({
		position: quincyCPosition,
		title: "Quincy Center",
		icon: stationImage,
        shadow: stationShadow
	});
	quincyCenter.setMap(map);

	google.maps.event.addListener(quincyCenter, 'click', function() {
		infowindow.setContent(quincyCenter.title);
		infowindow.open(map, quincyCenter);
	});

	// Create a marker for Quincy Adams
	quincyAdams = new google.maps.Marker({
		position: quincyAPosition,
		title: "Quincy Adams",
		icon: stationImage,
        shadow: stationShadow
	});
	quincyAdams.setMap(map);

	google.maps.event.addListener(quincyAdams, 'click', function() {
		infowindow.setContent(quincyAdams.title);
		infowindow.open(map, quincyAdams);
	});


	// Create a marker for Ashmont
	ashmont = new google.maps.Marker({
		position: ashmontPosition,
		title: "Ashmont",
		icon: stationImage,
        shadow: stationShadow
	});
	ashmont.setMap(map);

	google.maps.event.addListener(ashmont, 'click', function() {
		infowindow.setContent(ashmont.title);
		infowindow.open(map, ashmont);
	});


	// Create a marker for Wollaston
	wollaston = new google.maps.Marker({
		position: wollastonPosition,
		title: "Wollaston",
		icon: stationImage,
        shadow: stationShadow
	});
	wollaston.setMap(map);

	google.maps.event.addListener(wollaston, 'click', function() {
		infowindow.setContent(wollaston.title);
		infowindow.open(map, wollaston);
	});


	// Create a marker for Fields Corner
	fieldsCorner = new google.maps.Marker({
		position: fieldsCornerPosition,
		title: "Fields Corner",
		icon: stationImage,
        shadow: stationShadow
	});
	fieldsCorner.setMap(map);

	google.maps.event.addListener(fieldsCorner, 'click', function() {
		infowindow.setContent(fieldsCorner.title);
		infowindow.open(map, fieldsCorner);
	});


	// Create a marker for Central Square
	centralSquare = new google.maps.Marker({
		position: centralPosition,
		title: "Central Square",
		icon: stationImage,
        shadow: stationShadow
	});
	centralSquare.setMap(map);

	google.maps.event.addListener(centralSquare, 'click', function() {
		infowindow.setContent(centralSquare.title);
		infowindow.open(map, centralSquare);
	});


	// Create a marker for Braintree
	braintree = new google.maps.Marker({
		position: braintreePosition,
		title: "Braintree",
		icon: stationImage,
        shadow: stationShadow
	});
	braintree.setMap(map);

	google.maps.event.addListener(braintree, 'click', function() {
		infowindow.setContent(braintree.title);
		infowindow.open(map, braintree);
	});





	// Custom color for user's location pin
	var mePinColor = "7373c7";
	var mePinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"
		+ mePinColor, new google.maps.Size(21, 34), new google.maps.Point(0,0), new google.maps.Point(10, 34));
	var mePinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
		new google.maps.Size(40, 37), new google.maps.Point(0, 0), new google.maps.Point(12, 35));

	// Create a marker for the user and center there
	me = new google.maps.LatLng(myLat, myLng);

	// Update map and go there...
	map.panTo(me);

	// Create a marker
	marker = new google.maps.Marker({
		position: me,
		title: "Your location",
		icon: mePinImage,
        shadow: mePinShadow
	});
	marker.setMap(map);

	// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});


	// The path that the red line follows:
	var redLineCoordinates = [
		alewifePosition,
		davisPosition,
		porterPosition,
		harvardPosition,
		centralPosition,
        kendallPosition,
        charlesMGHPosition,
        parkPosition,
        downtownCrossingPosition,
        southPosition,
        broadwayPosition,
        andrewPosition,
        jfkPosition,
    	savinHillPosition,
		fieldsCornerPosition,
		shawmutPosition,
		ashmontPosition
    ];
    var redLinePath = new google.maps.Polyline({
    	path: redLineCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    redLinePath.setMap(map);

    // The red line splits at JFK: this is the Braintree line:
	var braintreeCoordinates = [
		jfkPosition,
		northQuincyPosition,
        wollastonPosition,
        quincyCPosition,
        quincyAPosition,
        braintreePosition
    ];
    var braintreePath = new google.maps.Polyline({
    	path: braintreeCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    braintreePath.setMap(map);
}