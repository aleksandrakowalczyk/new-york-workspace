$(document).ready(function() {

var map =  new GMaps({
div: '.map',
lat: 40.71417,
lng: -73.96942,
zoom: 12
});

map.addMarker({
lat: 40.7071161,
lng: -74.0103252,
title: 'New York',
infoWindow: {
content: '<p>New York Work Space - Wall Street</p>'
}
});

map.addMarker({
lat: 40.7410605,
lng: -73.9918926,
title: 'New York',
infoWindow: {
content: '<p>New York Work Space - Flatiron Building</p>'
}
});

map.addMarker({
lat: 40.672198,
lng: -73.948790,
title: 'New York',
infoWindow: {
content: '<p>New York Work Space - Crown Heights</p>'
}
});

map.addMarker({
lat: 40.728445,
lng: -73.982862,
title: 'New York',
infoWindow: {
content: '<p>New York Work Space - East Village</p>'
}
});

map.addMarker({
lat: 40.7107549,
lng: -73.9586182,
title: 'New York',
infoWindow: {
content: '<p>New York Work Space - Williamsburg</p>'
}
});

map.addMarker({
lat: 40.697462,
lng: -73.9958276,
title: 'New York',
infoWindow: {
content: '<p>New York Work Space - Brooklyn Heights</p>'
}
});

});
