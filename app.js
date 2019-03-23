
function showAbout() {
  let about = document.getElementById("about-me");
  let live = document.getElementById("live-content");

  if(about.style.display === "none" && live.style.display === "none") {
    about.style.display = "block";
    live.style.display = "none"
  } else if (about.style.display === "block" && live.style.display === "none"){
    about.style.display = "none";
    live.style.display = "none";
  } else if(about.style.display === "none" && live.style.display === "block"){
    about.style.display = "block";
    live.style.display = "none";
  }
}
function showLive() {
  let live = document.getElementById("live-content");
  let about = document.getElementById("about-me");

  if(live.style.display === "none" && about.style.display === "block") {
    live.style.display = "block";
    about.style.display = "none";
  } else if(live.style.display === "block" && about.style.display === "none"){
    live.style.display = "none";
    about.style.display = "none";
  } else if(live.style.display === "none" && about.style.display === "none"){
    live.style.display = "block";
    about.style.display = "none";
  }
}

$( () => {

const $open = $('#open-chatter');
const $modal = $('#modal-chatter');
const $close = $('#closer');

const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}
$open.on('click', openModal);
$close.on('click', closeModal);


const $openRes = $('#open-resume');
const $modalRes = $('#modal-resume');
const $closeRes = $('#close-resume');

const openResume = () => {
  $modalRes.css('display', 'block');
}
const closeResume = () => {
  $modalRes.css('display', 'none');
}
$openRes.on('click', openResume);
$closeRes.on('click', closeResume);


let currentSiteIndex = 0;
const numOfSites = $('.carousel-sites').children().length - 1;

$('.next').on('click', () => {
  $('.carousel-sites').children().eq(currentSiteIndex).css('display', 'none');
    if(currentSiteIndex < numOfSites) {
      currentSiteIndex ++;
    } else {
      currentSiteIndex = 0;
  }
  $('.carousel-sites').children().eq(currentSiteIndex).css('display', 'block');
})

$('.previous').on('click', () => {
  $('.carousel-sites').children().eq(currentSiteIndex).css('display', 'none');
    if(currentSiteIndex > 0) {
      currentSiteIndex --;
    } else {
      currentSiteIndex = numOfSites;
    }
  $('.carousel-sites').children().eq(currentSiteIndex).css('display', 'block');
})
})

