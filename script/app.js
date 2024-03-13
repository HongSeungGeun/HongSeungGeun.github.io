let $sky = document.querySelector(".sky");

// 브라우저 창 크기에 따른 별 생성
window.onresize = () => {
makeStars();
}

let makeStars = () => {
  // 브라우저 가장 큰 크기
let maxSize = Math.max(window.innerWidth, window.innerHeight+3000)

  // 랜덤한 X 위치 값
  let getRandomX = () => Math.random() * maxSize;

  // 랜덤한 Y 위치 값
  let getRandomY = () => Math.random() * maxSize;

  // 랜덤한 크기 (circle는 반지름이 크기)
  let randomRadius = () =>  Math.random() * 0.7 + 0.6;

  // 임의의 값
let _size = Math.floor(maxSize / 1);

let htmlDummy = new Array(_size).fill().map((_, i) => {
    return  `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`
}).join('');

$sky.innerHTML = htmlDummy;
}

window.onload = () => {
makeStars();
}

// 별





$('#section02').each(function(){
    let win = $(window);
    let section02 = $(this);
    let spot = section02.offset().top;

    win.scroll(function(){
      if(win.scrollTop() > spot){
        $('.backSky').hide()
      }else {
        $('.backSky').show()
      }

      if(win.scrollTop() > spot +1080){
        $('#nav').css('color','black')
      }else {
        $('#nav').css('color','white')
      }

      if(win.scrollTop() > spot + 7600){
        $('#nav').hide();
      }else {
        $('#nav').show();
      }
      
    })
})
// 스크롤시 헤더 색상




$('#section03').each(function(){
  let win = $(window);
  let section03 = $(this);

  win.scroll(function(){
    let opaStart = section03.offset().top;
    let opaEnd = opaStart + 3000 ;
    let opaHeight = opaEnd - opaStart;

    
    let opacity = 2 - window.scrollY / opaHeight;

    $('.opacity').css('opacity', opacity);
  })
})

// 스크롤시 오파시티






let observer = new IntersectionObserver((e)=>{
  e.forEach((달)=>{
    if(달.isIntersecting){
      달.target.style.opacity = 1;
    }else{
      달.target.style.opacity = 0;
    }
  })

})

let three = document.querySelectorAll('div')
observer.observe(three[3])
observer.observe(three[9])

// 스크롤시 달 등장


let observer01 = new IntersectionObserver((e)=>{
  e.forEach((프로젝트)=>{
    if(프로젝트.isIntersecting){
      프로젝트.target.style.opacity = 1;
      프로젝트.target.style.transform = 'translate(0px, 0)';
    }else{
      프로젝트.target.style.opacity = 0;
      프로젝트.target.style.transform = 'translate(-100%, 0)';
    }
  })

})

let five = document.querySelectorAll('div')
observer01.observe(five[13])
observer01.observe(five[16])
observer01.observe(five[19])


// 스크롤시 프로젝트 좌 -> 우 등장





let observer02 = new IntersectionObserver((e)=>{
  e.forEach((프로01)=>{
    if(프로01.isIntersecting){
      프로01.target.style.opacity = 1;
      프로01.target.style.transform = 'translate(0px, 0)';
    }else{
      프로01.target.style.opacity = 0;
      프로01.target.style.transform = 'translate(120%, 0)';
    }
  })

})

let five01 = document.querySelectorAll('div')
observer02.observe(five01[14])
observer02.observe(five01[17])
observer02.observe(five01[20])

// 스크롤시 프로젝트 우 -> 좌 등장



$(function(){
  $('.scroll_move').click(function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top})
  })
})

// 각 메뉴 클릭시 해당 섹션으로 이동