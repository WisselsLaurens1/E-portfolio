


// window.onload = init()

var imgSize;
var offset;
var currentPage = 0;
var prevPage = 0
var interval = 674

function initHeadImg(){
  imgSize = parseInt(document.getElementById("head-img").clientHeight)
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}



function updatePage(offset){
  if(offset%674 == 0){

    prevPage = currentPage

    nav = document.getElementById('nav').getElementsByTagName("li");
    nav[prevPage].children[0].id =""

    currentPage = offset/674

    console.log("currentPage: ",currentPage);

  }
}


function updateNav(){
  nav = document.getElementById('nav').getElementsByTagName("li");
  nav[currentPage].children[0].id ="active"
}


$(document).bind('mousewheel', function(evt) {
  var delta = evt.originalEvent.wheelDelta
  const el = document.getElementById('polestar');
  var offset = Math.abs(getOffset(el).top)
  updatePage(offset)
  updateNav()
  // console.log(offset, currentPage);



})
