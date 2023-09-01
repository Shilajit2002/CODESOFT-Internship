const textBox1 = document.getElementById("textBox1")

const dots1 = document.getElementById("dots1")
const dots2 = document.getElementById("dots2")
const dots3 = document.getElementById("dots3")

const dot = [dots1, dots2, dots3]

let j = 0;

// List Details
const listFooter = [
    {
        h3: "15 years, passionately pursuing better outcomes",
        text: "For over a decade and a half, we have been dedicated to achieving superior results. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, praesentium. Nesciunt suscipit similique eaque at natus. Sequi quibusdam distinctio enim porro sed beatae, veritatis ullam ducimus magnam tenetur, doloribus neque molestias rerum quisquam dicta iure numquam itaque autem illum natus repellendus aliquid delectus non? Illo tempore magnam dignissimos enim ipsum."
    },
    {
        h3: "Innovating the future, one idea at a time",
        text: "At our core, we are driven by innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dignissim eros. Vestibulum bibendum, tortor nec tincidunt tempus, ligula turpis vestibulum dui, eget gravida libero ligula vel. Ut auctor aliquet neque, id pulvinar purus feugiat in."
    },
    {
        h3: "Empowering success through tailored solutions",
        text: "Our mission is to empower your success by providing tailored solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit, enim at lacinia tristique, mi velit fringilla libero, at imperdiet justo enim ac velit. Maecenas feugiat augue nec libero fringilla, vitae dictum ipsum faucibus."
    }
];

// Update Slider Func
const updateContentFooter = (index) => {
    // Apply a fade-out effect
    textBox1.style.opacity = 0;
    setTimeout(() => {
        textBox1.innerHTML = `
            <h3>${listFooter[index].h3}</h3>
            <p>${listFooter[index].text}</p>
        `;
        // Apply a fade-in effect after the content is updated
        textBox1.style.opacity = 1;
    }, 200); // Set timeout to match the transition duration
    dot.forEach((dotd, dotIndex) => {
        dotd.style.background = index === dotIndex ? "linear-gradient(to right, #ff9224, #fc5871, #e60ca1)" : "transparent"
    });
}

// Change Slider Footer Func
const changeSliderFooter = () => {
    updateContentFooter(j);
    j = (j + 1) % listFooter.length;
}

// Slide will change automatically after 4 seconds
setInterval(() => {
    changeSliderFooter();
}, 4000);

// Addevent listner for bar indicators
dot.forEach((dotd, dotIndex) => {
    dotd.addEventListener('click', () => {
        j = dotIndex;
        updateContentFooter(j);
    })
})

// Call the Change Slider Footer Func
changeSliderFooter();