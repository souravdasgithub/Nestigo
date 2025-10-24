mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: listing.geometry.coordinates,
  zoom: 9
});


// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({color : "Red"})
    .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({offset : 25}).setHTML(
            `<h4>${listing.location}</h4><p>Exact location provided after booking<p>`
        )
    )
    .addTo(map);