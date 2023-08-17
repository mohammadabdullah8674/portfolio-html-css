// script for typed effect

var typed = new Typed('.typed', {
    strings: ['Frontend Developer', 'Web Developer', 'Programmer', 'Coder',],
    typeSpeed: 150,
    backSpeed : 150,
    loop : true
  });


// Script for navigation bar

const navbar = document.getElementById("navbar");
const bar = document.getElementById("bar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", ()=> {    
    navbar.classList.add("active")
  })

}

if(close){
  close.addEventListener("click", ()=> {
    navbar.classList.remove("active")
  })
}

// script for certificate slide
imgList = ["c1.jpg", "c2.png"]
const leftArrow = document.querySelector(".fa-arrow-left")
const rightArrow = document.querySelector(".fa-arrow-right")
const certImage = document.querySelector("#certificate")

let i = 0;
certImage.src = "img/certificates/"+imgList[i]
leftArrow.addEventListener("click", ()=> {
  if(i <= 0) {
    i = imgList.length-1 
    certImage.src = "img/certificates/"+imgList[i]
  }
  else{
    i--
    certImage.src = "img/certificates/"+imgList[i]
    
  }
})
rightArrow.addEventListener("click", ()=> {
  
  if(i >= imgList.length-1) {
    i = 0 
    certImage.src = "img/certificates/"+imgList[i]
  }
  else{
    i++
    certImage.src = "img/certificates/"+imgList[i]
  }
})

// function clickRightArrow() {
//   console.log("Clicked")
//   if(i >= imgList.length-1) {
//     i = 0 
//     certImage.src = "img/certificates/"+imgList[i]
//   }
//   else{
//     i++
//     certImage.src = "img/certificates/"+imgList[i]
//   }
// }

