function openModal(img) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

