window.onload = function(){
  document.querySelector('.loader').style.display='none';
}
window.onscroll = function () {
  if (window.pageYOffset > 10) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
}
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.onclick = function () {
  const nav = document.querySelector('.nav');
  nav.classList.add('active');
}
const clBtn = document.querySelector('.close-btn');
clBtn.onclick = function () {
  const nav = document.querySelector('.nav');
  nav.classList.remove('active');
}
var navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.forEach(function (anchor) {
      anchor.classList.remove('active');
    });
    link.classList.add('active');
    const nav = document.querySelector('.nav');
    nav.classList.remove('active');
  });
});
var swiper = new Swiper(".mySwiper-1", {
  slidesPerView: "2",
  autoHeight: "true",
  speed: 777,
  slidesPerGroup: 1,
  //centeredSlides:true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    240: {
      slidesPerView: 1,
      speed: 477,
      spaceBetween: 10
    },
    // when window width is >= 480px
    // when window width is >= 640px
    768: {
      slidesPerView: 1,
      speed: 777,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }

  }
});
function sendEmail(){
  var uname = document.querySelector('#uname').value;
  var email = document.querySelector('#email').value;
  var massege = document.querySelector('#massege').value;
  if(uname.length < 2 || email.length < 7  || massege.length < 2){

  }
  else{
  Email.send({
      SecureToken : "db580ecb-a4d3-45dc-8cb2-b0d7281339c7",
      To : 'devansh8474@gmail.com',
      From : "spiderman012345678987@gmail.com",
      Subject : "New Enquiry Form",
      Body : "Name: " + document.getElementById('uname').value
      + "<br> Email: "+ document.getElementById('email').value +
      "<br> Massege: " + document.getElementById('massege').value
  }).then(
    message => alert('Massege sent Successfuly')
  );
  }}
document.querySelector('#form').onsubmit = function(e){
  e.preventDefault();
  document.querySelector('#uname').value='';
  document.querySelector('#email').value='';
  document.querySelector('#massege').value='';

}
let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
        return false;
    }
});
if(window.innerHeight > 620){
  AOS.init({
    offset: 320,
    duration: 400,
    once: true,
  });
}
AOS.init({
  offset: 200,
  duration: 500,
  once: true,
});
