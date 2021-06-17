"use strict"
console.log("test");

let productsCountElement = document.getElementById("products-count");
// console.log(productsCountElement);

let addToCardButtons = document.querySelectorAll(".add-to-card");
// console.log(addToCardButtons);

for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].addEventListener("click", function () {
        // console.log("clicked " + i);
        // let  prevProductsCount = +productsCountElement.textContent;
        // productsCountElement.textContent = prevProductsCount + 1;
        productsCountElement.textContent = +productsCountElement.textContent + 1;
        // console.log(productsCountElement.textContent);
    })


}

let modal = document.querySelector(".modal");
console.log(modal);
let moreDetailsButton = document.querySelectorAll(".more-details");
console.log(moreDetailsButton);
let closeButton = document.querySelector(".btn-close");
console.log(closeButton);

moreDetailsButton.forEach(item => {
    item.addEventListener("click", function () {
        openModal();
    })
});


function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show")
}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
})


// Задаем действие для иконки "добавить в избранное"
let addToFavorite = document.querySelectorAll(".image-favorite");
// console.log(addToFavorite);
addToFavorite.forEach(favoriteIcon => favoriteIcon.addEventListener("click", function(){
    // console.log("clicked");
    //  if (favoriteIcon.classList.contains("image-favorite-on")) {
    //     favoriteIcon.classList.remove("image-favorite-on");
    // } else {
    //     favoriteIcon.classList.add("image-favorite-on");
    // }
    favoriteIcon.classList.toggle("image-favorite-on");
}));

function showModalByScroll () {
    // console.log(window.pageYOffset)
    // console.log(document.documentElement.scrollHeight)
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll", showModalByScroll);
    }
}

window.addEventListener("scroll", showModalByScroll);

// function Car(model, year, color){
//     this.model = model;
//     this.year = year;
//     this.color = color;

//     this.hi = function(){
//         return "Hi " + this.model;
//     }
// }

// let audi = new Car("A4", 2015, "red");
// let audi2 = new Car("A3", 2015, "black");
// console.log(audi.hi());
// console.log(audi2);

let decrementButtons = document.querySelectorAll(".decrement-button");
let incrementButtons = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quanity input");

// console.log(decrementButtons);
// console.log(incrementButtons);
// console.log(quantityValue);

function Counter(incrementButton, decrementButton, inputField, minCount = 1, maxCount = 10){
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField
    }
    this.increment = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1; 
        this.toggleButtonState();
    }

    this.decrement = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1; 
        this.toggleButtonState();
    }
    this.toggleButtonState = function(){
        const count = this.domRefs.inputField.value;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        this.domRefs.decrementButton.disabled = count <= minCount;
    }

    this.toggleButtonState();


    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
    console.log(this);
}

for (let i = 0; i < decrementButtons.length; i ++){
    new Counter(incrementButtons[i],decrementButtons[i],quantityValue[i]);
}


// function hi(text){
//     console.log(this);
//     console.log(text + " | " + this.name);
// }

// let ivan = {
//     name: "Ivan"
// }

// let petro = {
//     name: "Petro"
// }
// // Параметры передаются через запятую
// hi.call(ivan, "Call");
// hi.call(petro, "Call");
// // Параметры передаются в виде массива
// hi.apply(ivan, ["Apply"]);
// hi.apply(petro, ["Apply"]);

// let test = hi.bind(ivan, "Bind");
// test();