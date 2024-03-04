
const contents = document.querySelectorAll(".content");
const textBox = document.querySelectorAll(".text-box");
let num = 0;
var swiper = new Swiper(".first-slides", {
    loop : true,
    slidesPerView: 3,
    slidesPerGroup:1,
    spaceBetween: 100,
    centeredSlides: true,
    navigation: {
      nextEl: ".right",
      prevEl: ".left",
    },
    pagination:{
      el : ".nav1",
    },
    on: {
      slideChange: function() {
      
      
      // 이전에 .big 클래스가 설정된 슬라이드의 클래스를 제거합니다.
      contents[num].classList.remove("big");

      // 현재 중앙에 오는 슬라이드의 인덱스를 찾습니다.
      num = this.realIndex;
      
      // 중앙에 오는 슬라이드에 .big 클래스를 추가합니다.
      contents[num].classList.add("big");      

    
      if(num >= 0 && num < (contents.length/3)){
        textBox[Math.floor(num/3)].style.display = "block"
        textBox[1].style.display = "none"
        textBox[2].style.display = "none"
      }else if(num >= (contents.length/3) && num < (contents.length/3)*2){
        textBox[Math.floor(num/3)].style.display = "block"
        textBox[0].style.display = "none"
        textBox[2].style.display = "none"
      }else if(num >= (contents.length/3)*2 && num < (contents.length/3)*3){
        textBox[Math.floor(num/3)].style.display = "block"
        textBox[0].style.display = "none"
        textBox[1].style.display = "none"
      }
      console.log(num)
  },}

    })


const content = document.querySelectorAll(".sd2");
const tbx = document.querySelectorAll(".tbx");
let n = 0
    var swiper2 = new Swiper(".second-slides", {
    loop : true,
    slidesPerView: 3,
    slidesPerGroup:1,
    spaceBetween: 100,
    centeredSlides: true,
    navigation: {
      nextEl: ".right",
      prevEl: ".left",
    },
    pagination:{
      el : ".nav2",
    },
    on: {
      slideChange: function() {
      
      
      // 이전에 .big 클래스가 설정된 슬라이드의 클래스를 제거합니다.
      content[n].classList.remove("big");
      tbx[n].style.display = "none"
      // 현재 중앙에 오는 슬라이드의 인덱스를 찾습니다.
      n = this.realIndex;
      
      // 중앙에 오는 슬라이드에 .big 클래스를 추가합니다.
      content[n].classList.add("big");      

      tbx[n].style.display = "block"
      

  },}

    })
    
    var swiper3 = new Swiper(".3-slides", {
      loop : true,
      slidesPerView: 1,
      slidesPerGroup:1,
      direction: "vertical",
    
      navigation: {
        nextEl: ".btn-top",
        prevEl: ".btn-bottom",
    
      },
      pagination:{
        el : ".nav3",
        clickable: true,
      },
      });

