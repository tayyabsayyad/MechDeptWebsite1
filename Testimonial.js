/* =========================================================
   DBIT STUDENT TESTIMONIALS
   ========================================================= */

const dbitTestimonials = [

    {
        name: "Rahi Prajapati",
        course: "B.E. Mechanical Engineering",
        batch: "Batch 2026",

        
        image:"assets/testimonialsPictures/rahiprajapati.jpg",

        message:
            "My journey with ISHRAE has been one of continuous learning, responsibility, and growth. I started as a member of the Chapter Working Committee (CWC) in 2023–24, followed by serving as Marketing Chair in 2024–25 and Treasurer in 2025–26. Each role gave me valuable exposure to teamwork, communication, marketing, finance, event management, and leadership. The experiences and responsibilities I gained through ISHRAE played an important role in shaping my confidence and leadership journey, which eventually led me to serve as the General Secretary of Don Bosco Institute of Technology. I am grateful to ISHRAE for providing me with a platform to learn, contribute, and grow beyond the classroom."
    },


    {
        name: "Soham Satvilkar",
        course: "B.E. Mechanical Engineering",
        batch: "Batch 2026",

        image: "assets/testimonialsPictures/Soham Satvilkar Photo.JPG.jpeg",

        message:
            "Being a part of this Don Bosco community gave me the best chance to educate, to qualify, to socialize and to lead various teams leading to my overall development in professional and interpersonal skills. Leading various cultural opportunities through Marathi Club, technical opportunities through Madgear Motorsports, HVAC industrial exposure through ISHRAE and industrial contacts and exposure through DBIT T&P CELL enhanced my overall creativity, skill set, management and professional communication. I am grateful for the teaching, learning experience and guidance throughout my journey and for the support that continues to guide me towards my future growth."
    },


    {
        name: "Vedika Mathews",
        course: "B.E. Mechanical Engineering",
        batch: "Batch 2026",

        image: "assets/testimonialsPictures/vedikaMathews.jpeg",

        message:
            "Being a part of DBIT gave me the best platform to educate myself, qualify my skills, socialize, and lead teams — shaping my overall professional and interpersonal growth. As President of ISHRAE DBIT, I led initiatives that built my leadership and communication skills. I drove K-12 outreach to spark engineering curiosity, organized industrial visits to Bluestar for HVAC industry exposure, and curated the Aeroflow workshop to translate theory into hands-on learning. Leading Vortex strengthened my coordination abilities, while organizing Innovex, a technical exhibition, honed my project management and cross-team collaboration. I'm deeply thankful to the college for the countless opportunities it gave me to explore, lead, and grow. The exposure, mentorship, and platform to take on real responsibilities shaped not just my technical skill set but also my confidence and character."
    }

];


let dbitCurrentTestimonial = 0;


/* =========================================================
   OPEN POPUP
   ========================================================= */

function dbitOpenTestimonial(index) {

    dbitCurrentTestimonial = index;

    dbitShowTestimonial();

    const popup =
        document.getElementById("dbit-testimonial-popup");

    if (!popup) return;

    popup.style.display = "flex";

    document.body.style.overflow = "hidden";
}


/* =========================================================
   SHOW TESTIMONIAL
   ========================================================= */

function dbitShowTestimonial() {

    const student =
        dbitTestimonials[dbitCurrentTestimonial];

    const image =
        document.getElementById("dbit-popup-image");

    image.src = student.image;
    image.alt = student.name;

    document.getElementById("dbit-popup-name").textContent =
        student.name;

    document.getElementById("dbit-popup-course").textContent =
        student.course;

    document.getElementById("dbit-popup-batch").textContent =
        student.batch;

    document.getElementById("dbit-popup-text").textContent =
        student.message;
}


/* =========================================================
   CLOSE POPUP
   ========================================================= */

function dbitCloseTestimonial() {

    const popup =
        document.getElementById("dbit-testimonial-popup");

    if (!popup) return;

    popup.style.display = "none";

    document.body.style.overflow = "";
}


/* =========================================================
   NEXT
   ========================================================= */

function dbitNextTestimonial() {

    dbitCurrentTestimonial++;

    if (
        dbitCurrentTestimonial >=
        dbitTestimonials.length
    ) {
        dbitCurrentTestimonial = 0;
    }

    dbitShowTestimonial();
}


/* =========================================================
   PREVIOUS
   ========================================================= */

function dbitPreviousTestimonial() {

    dbitCurrentTestimonial--;

    if (dbitCurrentTestimonial < 0) {
        dbitCurrentTestimonial =
            dbitTestimonials.length - 1;
    }

    dbitShowTestimonial();
}


/* =========================================================
   CLOSE BY CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const popup =
        document.getElementById("dbit-testimonial-popup");

    if (!popup) return;

    popup.addEventListener("click", function (event) {

        if (event.target === popup) {
            dbitCloseTestimonial();
        }

    });

});


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener("keydown", function (event) {

    const popup =
        document.getElementById("dbit-testimonial-popup");

    if (!popup || popup.style.display !== "flex") {
        return;
    }

    if (event.key === "Escape") {
        dbitCloseTestimonial();
    }

    if (event.key === "ArrowRight") {
        dbitNextTestimonial();
    }

    if (event.key === "ArrowLeft") {
        dbitPreviousTestimonial();
    }

});

function dbitShowTestimonial() {

    const student =
        dbitTestimonials[dbitCurrentTestimonial];

    const image =
        document.getElementById("dbit-popup-image");

    image.src = student.image;
    image.alt = student.name;

    if (dbitCurrentTestimonial === 1) {
        image.style.objectPosition = "center 10%";
    } else {
        image.style.objectPosition = "center center";
    }

    document.getElementById("dbit-popup-name").textContent =
        student.name;

    document.getElementById("dbit-popup-course").textContent =
        student.course;

    document.getElementById("dbit-popup-batch").textContent =
        student.batch;

    document.getElementById("dbit-popup-text").textContent =
        student.message;
}