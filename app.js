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
addToFavorite.forEach(favoriteIcon => {
    favoriteIcon.addEventListener("click", setCheckedAddToFavorite);
});

// Задаем действие для иконки "добавить с прицелом"
let addAim = document.querySelectorAll(".image-aim");
// console.log(addToFavorite);
addAim.forEach(favoriteIcon => {
    favoriteIcon.addEventListener("click", setCheckedAim);
});

function setCheckedAddToFavorite() {
    setChecked(this, "image-favorite-on");
}

function setCheckedAim(){
    setChecked(this, "image-aim-on");
}

function setChecked(target, className){
    if (target.classList.contains(className)) {
        target.classList.remove(className);
    } else {
        target.classList.add(className);
    }
}
