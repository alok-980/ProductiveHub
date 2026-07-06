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
