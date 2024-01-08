"use strict";
const list = document.querySelector(".gallery");
const largeImg = document.getElementById("largeImg");
list.addEventListener("click", (e)=>{
    e.preventDefault();
    const item = e.target.closest(".list-item__link");
    largeImg.src = item.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
