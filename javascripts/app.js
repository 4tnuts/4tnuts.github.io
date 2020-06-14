let darkButton = document.getElementById("dark");
let lightButton = document.getElementById("light");
let body = document.getElementsByTagName("body");
console.log(body[0].classList)

darkButton.onclick = () => {
    body[0].classList.add("dark");
    body[0].classList.remove("light");
    console.log(body[0].classList)
}

lightButton.onclick = () => {
    body[0].classList.add("light");
    body[0].classList.remove("dark");
    console.log(body[0].classList)
}

