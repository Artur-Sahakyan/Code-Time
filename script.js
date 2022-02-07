const arrowRight1 = document.querySelector(".style_arrowRightF");
const arrowLeft1 = document.querySelector(".style_arrowLeftF");
const adverLogos = document.querySelector("#adverLogos");
const item = document.getElementsByClassName("style_publicitiesLogo");

const arrowLeft2 = document.querySelector(".arrowLeft__slid-2");
const arrowRight2 = document.querySelector(".arrowRight__slid-2");
const slide2 = document.querySelector(".slaid2Boxes");
const item2 = document.getElementsByClassName("slaid-2__box")

const arrowLeft3 = document.querySelector(".first_row_left");
const arrowRight3 = document.querySelector(".first_row_right");
const slide3 = document.querySelector(".allServices");
const item3 = document.getElementsByClassName("ServiceDiv");

const arrowLeft4 = document.querySelector(".second_row_left");
const arrowRight4 = document.querySelector(".second_row_right");
const slide4 = document.querySelector(".allServices2");
const item4 = document.getElementsByClassName("ServiceDiv2");


//First slider
arrowRight1.addEventListener("click", ()=>adverLogos.append(item[0]));
arrowLeft1.addEventListener("click", ()=> adverLogos.prepend(item[item.length - 1]));
// Second slider
arrowRight2.addEventListener("click", ()=> slide2.append(item2[0]));
arrowLeft2.addEventListener("click", ()=>  slide2.prepend(item2[item2.length - 1]));
//third slider
arrowRight3.addEventListener("click", ()=> slide3.append(item3[0]));
arrowLeft2.addEventListener("click", ()=> slide3.prepend(item3[item3.length - 1]));

arrowRight4.addEventListener("click", ()=> slide4.append(item4[0]));
arrowLeft2.addEventListener("click", ()=>  slide3.prepend(item3[item3.length - 1]));