//---------------VIODE VOICE MUTE _ UNMUTE
let muteBtn = document.querySelector("#mute-btn")
let muteIcon = document.querySelector("#mute-icon")
let videos = document.querySelector(".nav-video")
let isMuted = true

muteBtn.addEventListener("click", () => {

    isMuted = !isMuted
    videos.muted = isMuted

    if (isMuted) {
        muteIcon.classList.remove("fa-volume-up")
        muteIcon.classList.add("fa-volume-mute")
    } else {
        muteIcon.classList.remove("fa-volume-mute")
        muteIcon.classList.add("fa-volume-up")
    }

    console.log("mute")
})

// ------------------PAGE SWITCHER
let dashboard = document.querySelector("#dashboard")

let todoList = document.querySelector("#todo-list")
let dailyPlanner = document.querySelector("#daily-planner")
let motivationQuotes = document.querySelector("#motivation-quotes")
let pomodoroTimer = document.querySelector("#pomodoro-timer")
let dailyGoal = document.querySelector("#daily-goal")

let todo = document.querySelector("#todo")
let planner = document.querySelector("#planner")
let quotes = document.querySelector("#quotes")
let timer = document.querySelector("#timer")
let goal = document.querySelector("#goal")

let todoBackBtn = document.querySelector("#todo-back-btn")
let plannerBackBtn = document.querySelector("#planner-back-btn")
let quotesBackBtn = document.querySelector("#quotes-back-btn")
let timerBackBtn = document.querySelector("#timer-back-btn")
let goalBackBtn = document.querySelector("#goal-back-btn")

// ToDo Page
todo.addEventListener("click", () => {
    dashboard.style.display = "none"
    todoList.style.display = "block"
})

todoBackBtn.addEventListener("click", () => {
    todoList.style.display = "none"
    dashboard.style.display = "block"
})


// Planner Page
planner.addEventListener("click", () => {
    dashboard.style.display = "none"
    dailyPlanner.style.display = "block"
})

plannerBackBtn.addEventListener("click", () => {
    dailyPlanner.style.display = "none"
    dashboard.style.display = "block"
})


// Quotes Page
quotes.addEventListener("click", () => {
    dashboard.style.display = "none"
    motivationQuotes.style.display = "block"
})

quotesBackBtn.addEventListener("click", () => {
    motivationQuotes.style.display = "none"
    dashboard.style.display = "block"
})


// PomodoroTimer Page
timer.addEventListener("click", () => {
    dashboard.style.display = "none"
    pomodoroTimer.style.display = "block"
})

timerBackBtn.addEventListener("click", () => {
    pomodoroTimer.style.display = "none"
    dashboard.style.display = "block"
})


// Goals Page
goal.addEventListener("click", () => {
    dashboard.style.display = "none"
    dailyGoal.style.display = "block"
})

goalBackBtn.addEventListener("click", () => {
    dailyGoal.style.display = "none"
    dashboard.style.display = "block"
})


// ---------- DAILY PLANNER CARD's
let plannerCard = document.querySelector(".planner-card")
let timeStart = 6
let timeEnd = 7

while (timeEnd <= 24) {
    plannerCard.innerHTML += `
        <div class="planner-detail">
            <h3>${timeStart}:00 - ${timeEnd}:00</h3>
            <input type="text" placeholder="...">
        </div>
    `
    timeStart++;
    timeEnd++
}

// ----------------THEME TOGGLE
let themeToggleBtn = document.querySelector("#theme-toggle-btn")
let themeIcon = document.querySelector("#theme-icon")
let htmlTag = document.documentElement

let savedTheme = localStorage.getItem("theme")

if (savedTheme === "dark") {
    htmlTag.setAttribute("data-theme", "dark")
    themeIcon.classList.remove("fa-sun")
    themeIcon.classList.add("fa-moon")
}

themeToggleBtn.addEventListener("click", () => {
    let isDark = htmlTag.getAttribute("data-theme") === "dark"

    if (isDark) {
        htmlTag.removeAttribute("data-theme")
        themeIcon.classList.remove("fa-moon")
        themeIcon.classList.add("fa-sun")
        localStorage.setItem("theme", "light")
    } else {
        htmlTag.setAttribute("data-theme", "dark")
        themeIcon.classList.remove("fa-sun")
        themeIcon.classList.add("fa-moon")
        localStorage.setItem("theme", "dark")
    }
})

// ------------------THEME CHANGER ACCORDIN TO TIME
const video = document.getElementById("bg-video");
const source = document.getElementById("video-source");
const overlay = document.getElementById("overlay");

const hour = new Date().getHours();

if (hour >= 5 && hour < 12) {
    // Morning
    source.src = "assets/anime.mp4";
    overlay.style.background = "rgba(255, 223, 150, 0.18)";
} else if (hour >= 12 && hour < 17) {
    // Afternoon
    source.src = "assets/anime3.mp4";
    overlay.style.background = "rgba(255, 245, 180, 0.12)";
} else if (hour >= 17 && hour < 20) {
    // Evening
    source.src = "assets/anime2.mp4";
    overlay.style.background = "rgba(255, 140, 70, 0.25)";
} else {
    // Night
    source.src = "assets/anime4.mp4";
    overlay.style.background = "rgba(8, 15, 40, 0.45)";
}

video.load();
video.play();

//----------------DASHBOARD TIMER
let liveTime = document.querySelector("#live-time")
let liveDate = document.querySelector("#live-date")

const updateDateTime = () => {
    let now = new Date()
    liveTime.textContent = now.toLocaleTimeString()
    liveDate.textContent = now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
}

updateDateTime()

setInterval(updateDateTime, 1000)

//------------------DASHBOARD WEATHER
navigator.geolocation.getCurrentPosition(
    (position) => {
        // console.log(position.coords.latitude)
        // console.log(position.coords.longitude)
        let LATITUDE = position.coords.latitude
        let LONGITUDE = position.coords.longitude
        let API_KEY = "fbe8226654b37662db331caad38f0810"

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    (error) => {
        console.log(error)
    }
)