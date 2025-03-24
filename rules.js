const boxes = document.querySelectorAll(".forwho");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight * 0.8) {
            box.classList.add("show");
        }
    });
});
