/*!
 * VERSION: 1.0.3
 * DATE: 2022-07-01
 * UPDATES AND DOCS AT: https://github.com/kavidu-dilhara/kavidudilhara.ml
 * @license Copyright (c) 2020-2022, All rights reserved.
 * 
 * @author: Kavidu Dilhara, support@kavindudilhara.tk
 **/
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);
    targetSection !== "#about" ?
    card.classList.add("is-active") :
    card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);
    sections.forEach(s => s.classList.remove("is-active"));
    buttons.forEach(b => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
};

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});