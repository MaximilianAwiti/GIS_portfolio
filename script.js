function openModal(img) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("visible");
            navbar.classList.remove("hidden");
        } else {
            navbar.classList.add("hidden");
            navbar.classList.remove("visible");
        }
    });
});
