// Image and Item Data
const images = [
    { src: "images/1.jpg", name: "Item A", description: "This is Item A's description." },
    { src: "images/2.jpg", name: "Item B", description: "This is Item B's description." },
    { src: "images/3.jpg", name: "Item C", description: "This is Item C's description." },
    { src: "images/4.jpg", name: "Item D", description: "This is Item D's description." },
    { src: "images/5.jpg", name: "Item E", description: "This is Item E's description." },
    { src: "images/6.jpg", name: "Item F", description: "This is Item F's description." },
    { src: "images/7.jpg", name: "Item G", description: "This is Item G's description." },
    { src: "images/8.jpg", name: "Item H", description: "This is Item H's description." },
    { src: "images/9.jpg", name: "Item I", description: "This is Item I's description." },
    { src: "images/10.jpg", name: "Item J", description: "This is Item J's description." },
];

let currentIndex = 0;

// DOM Elements
const imageElement = document.getElementById("current-image");
const detailsSection = document.getElementById("details");
const itemName = document.getElementById("item-name");
const itemDescription = document.getElementById("item-description");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const buyNowButton = document.getElementById("buy-now");
const goBackButton = document.getElementById("go-back");
const modal = document.getElementById("form-modal");
const closeModal = document.getElementById("close-form");

// Update Display
function updateDisplay() {
    const currentItem = images[currentIndex];
    imageElement.src = currentItem.src;
    detailsSection.classList.add("hidden");
}

// Show Details
function showDetails() {
    const currentItem = images[currentIndex];
    itemName.textContent = currentItem.name;
    itemDescription.textContent = currentItem.description;
    detailsSection.classList.remove("hidden");
}

// Navigation Buttons
rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateDisplay();
});

leftButton.addEventListener("click", () => {
    showDetails();
});

// Go Back
goBackButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateDisplay();
});

// Buy Now
buyNowButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Initial Display
updateDisplay();
