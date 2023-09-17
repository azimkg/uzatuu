const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const relax = document.getElementById("relax");


playButton.addEventListener("click", function () {
    audio.play();
    pauseButton.classList.remove("hidden")
    playButton.classList.add("hidden")
    relax.classList.remove("hidden")
});

pauseButton.addEventListener("click", function () {
    audio.pause();
    playButton.classList.remove("hidden")
    pauseButton.classList.add("hidden")
    relax.classList.add("hidden")

});

function calculateTimeLeft() {
    const now = new Date().getTime();
    const targetDate = new Date("2023-10-08T12:00:00").getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

function updateCountdown() {
    const timeLeft = calculateTimeLeft();

    document.getElementById("days").textContent = padZero(timeLeft.days);
    document.getElementById("hours").textContent = padZero(timeLeft.hours);
    document.getElementById("minutes").textContent = padZero(timeLeft.minutes);
    document.getElementById("seconds").textContent = padZero(timeLeft.seconds);

    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(interval);
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); 