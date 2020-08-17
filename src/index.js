import mapboxgl from "mapbox-gl";
import newMarker from "./marker.js"

mapboxgl.accessToken = "pk.eyJ1Ijoic3lkbmV5NDciLCJhIjoiY2tkeW9oZTJnMjd0MjMwbXBpdzczcGpzYyJ9.OTpqLh0MD9n7VdSOYFyjIA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

new mapboxgl.Marker(newMarker('restaurant')).setLngLat([-74.009151, 40.705086]).addTo(map);
