/**************************  Js Animation ong **************************/ 


        var navLinks= document.getElementById("navLinks");
        function showMenu(){
  
            navLinks.style.right="0";
  
        }
        function hideMenu(){
            
            navLinks.style.right="-200px";
  
        }
 

        /**************************************  Js Animation résaux sociaux **************************************/ 

        const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelectorAll('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelectorAll('.l1');
const l2 = document.querySelectorAll('.l2');


window.addEventListener('load', () =>{
    const TL = gsap.timeline({paused:true});

    TL
    .staggerFrom(titreSpans,1, {top: -50 , opacity: 0 , ease: "power2.out"}, 0.3)
    .staggerFrom(btns,1, {opacity: 0 , ease: "power2.out"}, 0.3 , '-=1')
    .from(l1, 1, {width: 0, ease:"power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease:"power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)" , ease:"power2.out"}, '-=2')
    .staggerFrom(medias,1, {right: -200 , ease: "power2.out"}, 0.3 , '-=1');
    
    
    TL.play();
})

 /***************************************GALERY ************************** */
'use strict'

document.addEventListener("DOMContentLoaded", ()=>{
    // Variables
    const filters = document.querySelector('#filters');
    const imgGallery = document.querySelector('#imgGallery')

    const fragment = document.createDocumentFragment()

    // Filter buttons
    const arrayFilters = ["Toute les photos"];
    
    // Images

    class cactusImg {
        constructor(title,url,alt,cacType){
            this.title=title;
            this.url=url;
            this.alt=alt;
            this.cacType=cacType;
        }
    }

    const img1 = new cactusImg("Cactus 1", "image/g.jpg", "cactus 1", "cylinder")

    const img2 = new cactusImg("Cactus 2","image/a.jpg", "cactus 2", "ball")

    const img3 = new cactusImg("Cactus 3", "image/l.jpg", "cactus 3", "uncategorized")

    const img4 = new cactusImg("Cactus 4", "image/e.jpg", "cactus 4", "leaf")

    const img5 = new cactusImg("Cactus 5",  "image/r.jpg", "cactus 5", "cylinder")

    const img6 = new cactusImg("Cactus 6", "image/i.jpg", "cactus 6", "cylinder")

    const img7 = new cactusImg("Cactus 7", "image/silc1.jpg", "cactus 7", "leaf")

    const img8 = new cactusImg("Cactus 8", "image/silc2.jpg", "cylinder")

    const img9 = new cactusImg("Cactus 9", "image/silc3.jpg", "cactus 9", "ball")

    const arrayImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    // Events
    filters.addEventListener("click",({target})=>{
        if(target.classList.contains("filter-btn")) { // Ensures only the buttons are clickable
            let current = document.getElementsByClassName("active");
            let found = [];
            imgGallery.innerHTML = "";
            switch (target.id) {
                case "Cylinder-Shaped":
                    found = arrayImg.filter(object => object.cacType=="cylinder");
                    break;
                case "Ball-Shaped":
                    found = arrayImg.filter(object => object.cacType=="ball");
                    break;
                case "Leaf-like":
                    found = arrayImg.filter(object => object.cacType=="leaf");
                    break;
                default:
                    found = arrayImg;
                    break;
            }
            // Add active class to the current button and remove from the previous one
            current[0].classList.remove("active");
            target.classList.add("active");
                
            // Add images to the gallery
            imgGallery.append(showImg(found));
        }
    });



    // Functions
    // Create filters dynamically
    const createFilters = ((array)=>{
        array.forEach((item, index) => {
            const btn = document.createElement("button");
            btn.classList.add("filter-btn")
            btn.textContent=item;
            btn.id=item;
            fragment.append(btn);
            if(index==0){
                btn.classList.add("active");
            }
        });
        return fragment;
    });

    // Add images to gallery
    const showImg = (array) =>{
        array.forEach(element => {
            const img = document.createElement("img");
            img.src = element.url;
            img.alt = element.alt;
            fragment.append(img);
        });
        return fragment;
    }

    filters.append(createFilters(arrayFilters));
    imgGallery.append(showImg(arrayImg));
}) // Load
  

/***************************************BACK TO TOP  *************************************************/

const button = document.querySelector('.btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();
