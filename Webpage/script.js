const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// Particle Class
class Particle {
    constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.friction = 0.98; // Smooth bounce effect
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce effect with friction
        if (this.x >= canvas.width || this.x <= 0) this.speedX *= -this.friction;
        if (this.y >= canvas.height || this.y <= 0) this.speedY *= -this.friction;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Initialize Particles
function init() {
    particlesArray = [];
    for (let i = 0; i < 50; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        let color = `rgba(${255}, ${Math.floor(Math.random() * 100)}, ${127}, 0.7)`;
        particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
    }
}

// Animate Particles
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

// Resize Canvas Efficiently
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adjust particle positions instead of resetting them
    particlesArray.forEach(p => {
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height;
    });
});

// Initialize & Start Animation
init();
animate();

// Scroll-Based Animation for .bag-section
document.addEventListener("DOMContentLoaded", function () {
    const bagSection = document.querySelector(".bag-section");

    if (!bagSection) return; // Prevent errors if element doesn't exist

    function checkScroll() {
        const sectionPos = bagSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;

        if (sectionPos < screenPos) {
            bagSection.classList.add("show");
            window.removeEventListener("scroll", checkScroll); // Run only once for performance
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run immediately in case the section is already in view
});

const images = [
    "image1.jpg",  // Replace with your image paths
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

let currentIndex = 0;
const imageElement = document.getElementById("project-image");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");

// Function to update image
function updateImage() {
    imageElement.src = images[currentIndex];
}

// Left Button Click
leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Right Button Click
rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize with first image
updateImage();

document.addEventListener("DOMContentLoaded", function () {
    const benefitsSection = document.querySelector(".benefits-section");

    function checkScroll() {
        const sectionPos = benefitsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            benefitsSection.classList.add("visible");
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
            button.querySelector("span").textContent = "+";
        } else {
            document.querySelectorAll('.faq-answer').forEach(item => item.style.display = "none");
            document.querySelectorAll('.faq-question span').forEach(item => item.textContent = "+");

            answer.style.display = "block";
            button.querySelector("span").textContent = "−";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const feedbackData = [
        {
            image: "client1.jpg",
            text: "Their expertise in image editing is outstanding! Highly recommended.",
            name: "Ms. John Doe",
            role: "CEO, Company X"
        },
        {
            image: "client2.jpg",
            text: "Their fast service and quality are unmatched. Will definitely return!",
            name: "Mr. Alex Smith",
            role: "Founder, ABC Ltd."
        },
        {
            image: "client3.jpg",
            text: "I've never seen such attention to detail in photo editing. Amazing work!",
            name: "Ms. Sarah Williams",
            role: "Marketing Head, XYZ Co."
        },
        {
            image: "client4.jpg",
            text: "Their customer service is top-notch, and the results are stunning!",
            name: "Mr. David Johnson",
            role: "Creative Director, Design Studio"
        },
        {
            image: "client5.jpg",
            text: "I am beyond impressed with the speed and accuracy of their work.",
            name: "Ms. Emily Brown",
            role: "Owner, Fashion House"
        }
    ];

    let currentIndex = 0;

    // Select correct elements from your HTML
    const clientImage = document.getElementById("client-image");
    const feedbackText = document.getElementById("feedback-text");
    const clientName = document.getElementById("client-name");
    const clientRole = document.getElementById("client-role");
    const prevSlide = document.getElementById("prev-slide");
    const nextSlide = document.getElementById("next-slide");

    // Function to update the feedback section
    function updateFeedback(index) {
        clientImage.src = feedbackData[index].image;
        feedbackText.textContent = feedbackData[index].text;
        clientName.textContent = feedbackData[index].name;
        clientRole.textContent = feedbackData[index].role;
    }

    // Add event listeners
    nextSlide.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % feedbackData.length;
        updateFeedback(currentIndex);
    });

    prevSlide.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + feedbackData.length) % feedbackData.length;
        updateFeedback(currentIndex);
    });

    // Initialize first feedback display
    updateFeedback(currentIndex);
});
