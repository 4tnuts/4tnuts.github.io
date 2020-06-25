const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const body = document.getElementsByTagName("body");
const dateTime = new Date();
const timeHour = dateTime.getHours();

const toDark = () => {
  body[0].classList.add("dark");
  body[0].classList.remove("light");
};

const toLight = () => {
  body[0].classList.add("light");
  body[0].classList.remove("dark");
};

if (timeHour >= 18) {
  toDark();
} else {
  toLight();
}

darkButton.onclick = () => {
  toDark();
};

lightButton.onclick = () => {
  toLight();
};


let sections = document.querySelectorAll(".animate");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        let topPart = sectionSize.top;
        console.log(`ini bottom part ${bottomPart} & ini window scroll y ${window.scrollY} & ini top part ${topPart}`)
        console.log(typeof bottomPart);
        console.log(bottomPart < 50);
        if ( bottomPart < 50) {
          section.style.opacity = "0";
          section.style.transform = "translateX(-20px)";
          section.style.transition = "1s ease-in-out";
            
        }else if(window.scrollY >= bottomPart){
          console.log("masuk 2")
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = "1s ease-in-out";
        }else{
          console.log("masuk 3")
          section.style.opacity = "0";
            section.style.transform = "translateX(-20px)";
            section.style.transition = "1s ease-in-out";
        }
    });
}

