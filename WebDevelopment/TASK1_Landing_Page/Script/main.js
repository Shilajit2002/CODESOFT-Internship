const textBox = document.getElementById("textBox")

const dot1 = document.getElementById("dot1")
const dot2 = document.getElementById("dot2")
const dot3 = document.getElementById("dot3")

const dots = [dot1, dot2, dot3]

let i = 0;

// List Details
const listMain = [
    {
        h1: "Creative Digital Agency",
        text: "We are a forward-thinking digital agency that specializes in crafting unique and captivating online experiences. Our team of creative minds is dedicated to bringing your brand's vision to life through innovative design and cutting-edge technology. From stunning websites to engaging mobile apps, we're here to make your digital dreams a reality."
    },
    {
        h1: "Innovative Web Design",
        text: "At the heart of our services lies innovative web design that sets your business apart. We don't just create websites; we craft online destinations that leave a lasting impression. Our design philosophy combines aesthetics with functionality, ensuring that your web presence not only looks amazing but also delivers a seamless user experience."
    },
    {
        h1: "E-commerce Solutions",
        text: "Step into the world of online commerce with confidence, backed by our comprehensive e-commerce solutions. We understand the complexities of selling in the digital landscape and offer tailored strategies to maximize your success. From user-friendly interfaces to secure payment gateways, we have the tools to elevate your e-commerce business."
    }
];

// Update Slider Func
const updateContentMain = (index) => {
    // Apply a fade-out effect
    textBox.style.opacity = 0;
    setTimeout(() => {
        textBox.innerHTML = `
            <h1>${listMain[index].h1}</h1>
            <p>${listMain[index].text}</p>
        `;
        // Apply a fade-in effect after the content is updated
        textBox.style.opacity = 1;
    }, 200); // Set timeout to match the transition duration
    dots.forEach((dot, dotIndex) => {
        dot.style.backgroundColor = index === dotIndex ? "#ffa41b" : "transparent"
    });
}

// Change Slider Main Func
const changeSliderMain = () => {
    updateContentMain(i);
    i = (i + 1) % listMain.length;
}

// Slide will change automatically after 4 seconds
setInterval(() => {
    changeSliderMain();
}, 4000);

// Addevent listner for bar indicators
dots.forEach((dot, dotIndex) => {
    dot.addEventListMainener('click', () => {
        i = dotIndex;
        updateContentMain(i);
    })
})

// Call the Change Slider Main Func
changeSliderMain();