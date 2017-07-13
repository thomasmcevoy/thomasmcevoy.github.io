function get (id) {
  return document.getElementById(id);
}

function hide (id){
  get(id).style.display = 'none';
}

function show (el){
  get(id).style.display = '';
}
