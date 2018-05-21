function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatlng = new google.maps.LatLng(49.98944000, 36.22234348);
  var mapOptions = {
    center: myLatlng,
    zoom: 18,
    mapTypeControl: false,
    draggable: true,
    scaleControl: false,
    scrollwheel: false,
    navigationControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var service = new google.maps.places.PlacesService(map);

  service.getDetails({
    placeId: 'ChIJ46emx_mgJ0ERg-dtnn8PyQk'
  }, function(place, status) {
    
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      // google.maps.event.addListener(marker, 'click', function() {
      //   infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      //     'Place ID: ' + place.place_id + '<br>' +
      //     place.formatted_address + '</div>');
      //   infowindow.open(map, this);
      // });
  });
}

function initMap() {
  google.maps.event.addDomListener(window, 'load', initialize);  
}
