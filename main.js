const  container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const text = document.querySelector(".text");
const headerIMG = document.querySelector(".header-img");

function getRandomNumber(min,max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    const btnHeight = btnNo.clientHeight;
    const btnWidth = btnNo.clientWidth;

    let newTop = getRandomNumber(btnHeight, containerHeight - btnHeight);
    let newLeft = getRandomNumber(btnWidth, containerWidth - btnWidth);

    while (Math.abs(newTop - btnNo.getBoundingClientRect().top) < 100) {
        newTop = getRandomNumber(btnHeight, containerHeight - btnHeight);
    }
    while (Math.abs(newLeft - btnNo.getBoundingClientRect().left) < 100) {
        newLeft = getRandomNumber(btnWidth, containerWidth - btnWidth);
    }

    btnNo.style.top = `${newTop}px`;
    btnNo.style.left = `${newLeft}px`;
});



btnYes.addEventListener("click", () => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    headerIMG.classList.add("hide");
    text.innerHTML = "LUV UUU HẸ HẸ HẸEEEE =)))))) 😘";
    btnYes.innerHTML = '<a href="https://www.instagram.com/ng_ph.hao/">TEXT ME 😘</a>';
});