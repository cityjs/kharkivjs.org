function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatlng = new google.maps.LatLng(49.98935276, 36.22232348);
  var mapOptions = {
    center: myLatlng,
    zoom: 5,
    mapTypeControl: false,
    draggable: true,
    scaleControl: false,
    scrollwheel: false,
    navigationControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Kharkiv'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);