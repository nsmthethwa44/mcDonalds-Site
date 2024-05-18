  //  Initialize Swiper 
// home slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});


     // new featured products categories slide 
var swiper = new Swiper(".mySlide", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
},
breakpoints: {

200: {
  slidesPerView: 2,
},

567: {
  slidesPerView: 3,
},
 992: {
  slidesPerView: 4,
},
 1000: {
  slidesPerView: 6,
},
},
  });


  // declare all needed variables 
  let headerTop = document.querySelector(".header .top");
  let header = document.querySelector(".header");
  let navbar = document.querySelector(".navbar");
  let menuBox = document.querySelector(".menuBox");
  let goTop = document.querySelector(".goTop");
  let navLink = document.querySelectorAll(".navbar .nav li a")

  // user clicks menu button 
  menuBox.onclick = () =>{
    menuBox.classList.toggle("closeBox");
    navbar.classList.toggle("active")
  }

// when window scrolling event 
  window.onscroll = () =>{
    if(window.scrollY > 2){
      headerTop.style.display = "none";
      header.classList.add("headerAnimation");
      goTop.classList.add('active');
      menuBox.classList.remove("closeBox");
      navbar.classList.remove("active")
    }else{
      headerTop.style.display = "flex";
      header.classList.remove("headerAnimation");
      goTop.classList.remove('active');
    }
  }

  // when navbar link is click set it active 
Array.from(navLink).forEach((item) => (
  item.onclick = (e) => { 
    let currentLink = document.querySelector(".navbar .nav li a.active");
    currentLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menuBox.classList.remove("closeBox");
  }
));