var albums;

$.getJSON('albums.json', function(data) {
  albums = JSON.parse(data.parse);
});
