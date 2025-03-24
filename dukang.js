// const boxes = document.querySelectorAll(".shop");

// window.addEventListener("scroll", () => {
//     boxes.forEach(box => {
//         if (box.getBoundingClientRect().top < window.innerHeight * 0.8) {
//             box.classList.add("show");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".shop");

    function checkVisibility() {
        boxes.forEach(box => {
            if (box.getBoundingClientRect().top < window.innerHeight * 0.8) {
                box.classList.add("show");
            }
        });
    }

    // 初次載入時也執行一次
    checkVisibility();

    // 監聽滾動事件
    window.addEventListener("scroll", checkVisibility);
});

