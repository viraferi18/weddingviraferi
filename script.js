// =====================================
// OPENING UNDANGAN
// =====================================

const opening = document.getElementById("opening");
const openButton = document.getElementById("openInvitation");

if (openButton && opening) {

    openButton.addEventListener("click", function () {

        opening.classList.add("hide");

        document.body.style.overflow = "auto";

    });

}


// =====================================
// MUSIK
// =====================================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

if (openButton && music) {

    openButton.addEventListener("click", function () {

        music.play()
        .then(function () {

            musicPlaying = true;

            if (musicButton) {

                musicButton.classList.add("playing");

                musicButton.innerHTML = "❚❚";

            }

        })
        .catch(function () {

            console.log("Musik belum tersedia.");

        });

    });

}


if (musicButton && music) {

    musicButton.addEventListener("click", function () {

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicButton.classList.remove("playing");

            musicButton.innerHTML = "♫";

        } else {

            music.play();

            musicPlaying = true;

            musicButton.classList.add("playing");

            musicButton.innerHTML = "❚❚";

        }

    });

}


// =====================================
// COUNTDOWN
// =====================================

const weddingDate = new Date(
    "September 18, 2026 08:00:00"
).getTime();


const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    if (distance <= 0) {

        clearInterval(countdown);

        return;

    }


    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (
            distance %
            (1000 * 60 * 60 * 24)
        ) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (
            distance %
            (1000 * 60 * 60)
        ) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (
            distance %
            (1000 * 60)
        ) /
        1000
    );


    const dayElement =
    document.getElementById("days");


    const hourElement =
    document.getElementById("hours");


    const minuteElement =
    document.getElementById("minutes");


    const secondElement =
    document.getElementById("seconds");


    if (dayElement) {

        dayElement.textContent =
        String(days).padStart(2, "0");

    }


    if (hourElement) {

        hourElement.textContent =
        String(hours).padStart(2, "0");

    }


    if (minuteElement) {

        minuteElement.textContent =
        String(minutes).padStart(2, "0");

    }


    if (secondElement) {

        secondElement.textContent =
        String(seconds).padStart(2, "0");

    }


}, 1000);


// =====================================
// ANIMASI SAAT SCROLL
// =====================================

const animatedElements =
document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right"
);


const showOnScroll = function () {

    animatedElements.forEach(
    function (element) {

        const position =
        element
        .getBoundingClientRect()
        .top;


        if (
            position <
            window.innerHeight - 80
        ) {

            element
            .classList
            .add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    showOnScroll
);


window.addEventListener(
    "load",
    showOnScroll
);


// =====================================
// TOMBOL KEMBALI KE ATAS
// =====================================

const backToTop =
document.getElementById(
    "backToTop"
);


if (backToTop) {

    window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            backToTop
            .classList
            .add("show");

        } else {

            backToTop
            .classList
            .remove("show");

        }

    });


    backToTop
    .addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior:
            "smooth"

        });

    });

}