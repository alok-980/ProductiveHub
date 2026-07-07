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

while(timeEnd <= 24) {
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

    if(isDark) {
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