let longitude = 77.033173,
  latitude = 28.61462;

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [longitude, latitude],
  zoom: 4,
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);

var img1 = document.querySelector("#amber");

var marker1 = new mapboxgl.Marker({
  element: img1,
})
  .setLngLat([75.860001, 26.9883])
  .addTo(map);

var img2 = document.querySelector("#gateway");

var marker2 = new mapboxgl.Marker({
  element: img1,
})
  .setLngLat([18.922, 72.8347])
  .addTo(map);

var img3 = document.querySelector("#gate");

var marker3 = new mapboxgl.Marker({
  element: img1,
})
  .setLngLat([28.6129, 77.2295])
  .addTo(map);

var img4 = document.querySelector("#lotus");

var marker4 = new mapboxgl.Marker({
  element: img1,
})
  .setLngLat([28.5535, 77.2588])
  .addTo(map);

var img5 = document.querySelector("#victoria");

var marker5 = new mapboxgl.Marker({
  element: img1,
})
  .setLngLat([22.5448, 88.3426])
  .addTo(map);
