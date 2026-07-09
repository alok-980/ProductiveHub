//---------------VIODE VOICE MUTE _ UNMUTE
let muteBtn = document.querySelector("#mute-btn")
let muteIcon = document.querySelector("#mute-icon")
let videos = document.querySelector("#bg-video")
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
    localStorage.setItem("activePage", "todo")
})

todoBackBtn.addEventListener("click", () => {
    todoList.style.display = "none"
    dashboard.style.display = "block"
    localStorage.setItem("activePage", "dashboard")
})


// Planner Page
planner.addEventListener("click", () => {
    dashboard.style.display = "none"
    dailyPlanner.style.display = "block"
    localStorage.setItem("activePage", "planner")
})

plannerBackBtn.addEventListener("click", () => {
    dailyPlanner.style.display = "none"
    dashboard.style.display = "block"
    localStorage.setItem("activePage", "dashboard")
})


// Quotes Page
quotes.addEventListener("click", () => {
    dashboard.style.display = "none"
    motivationQuotes.style.display = "block"
    localStorage.setItem("activePage", "quotes")
})

quotesBackBtn.addEventListener("click", () => {
    motivationQuotes.style.display = "none"
    dashboard.style.display = "block"
    localStorage.setItem("activePage", "dashboard")
})


// PomodoroTimer Page
timer.addEventListener("click", () => {
    dashboard.style.display = "none"
    pomodoroTimer.style.display = "block"
    localStorage.setItem("activePage", "timer")
})

timerBackBtn.addEventListener("click", () => {
    pomodoroTimer.style.display = "none"
    dashboard.style.display = "block"
    localStorage.setItem("activePage", "dashboard")
})


// Goals Page
goal.addEventListener("click", () => {
    dashboard.style.display = "none"
    dailyGoal.style.display = "block"
    localStorage.setItem("activePage", "goal")
})

goalBackBtn.addEventListener("click", () => {
    dailyGoal.style.display = "none"
    dashboard.style.display = "block"
    localStorage.setItem("activePage", "dashboard")
})


// Page load hote hi last active page dikhana
let activePage = localStorage.getItem("activePage")

if (activePage === "todo") {
    dashboard.style.display = "none"
    todoList.style.display = "block"
} else if (activePage === "planner") {
    dashboard.style.display = "none"
    dailyPlanner.style.display = "block"
} else if (activePage === "quotes") {
    dashboard.style.display = "none"
    motivationQuotes.style.display = "block"
} else if (activePage === "timer") {
    dashboard.style.display = "none"
    pomodoroTimer.style.display = "block"
} else if (activePage === "goal") {
    dashboard.style.display = "none"
    dailyGoal.style.display = "block"
} else {
    dashboard.style.display = "block"
}

// ---------- DAILY PLANNER CARD's
let plannerCard = document.querySelector(".planner-card")
let timeStart = 6
let timeEnd = 7
let slotIndex = 0

let savedPlannerData = localStorage.getItem("plannerData")
let plannerData = savedPlannerData ? JSON.parse(savedPlannerData) : []

while (timeEnd <= 24) {
    let savedValue = plannerData[slotIndex] ? plannerData[slotIndex] : ""

    plannerCard.innerHTML += `
        <div class="planner-detail">
            <div class="planner-detail-header">
                <h3>${timeStart}:00 - ${timeEnd}:00</h3>
                <div class="planner-detail-btns">
                    <button class="planner-save-btn" data-index="${slotIndex}">
                        <i class="fa-solid fa-floppy-disk"></i>
                    </button>
                    <button class="planner-clear-btn" data-index="${slotIndex}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            <input type="text" placeholder="..." data-index="${slotIndex}" value="${savedValue}">
        </div>
    `
    timeStart++
    timeEnd++
    slotIndex++
}

plannerCard.addEventListener("click", (e) => {
    let clickedBtn = e.target.closest("button")

    if (!clickedBtn) return

    let index = Number(clickedBtn.getAttribute("data-index"))
    let inputField = plannerCard.querySelector(`input[data-index="${index}"]`)

    if (clickedBtn.classList.contains("planner-save-btn")) {
        plannerData[index] = inputField.value
        localStorage.setItem("plannerData", JSON.stringify(plannerData))
    }

    if (clickedBtn.classList.contains("planner-clear-btn")) {
        inputField.value = ""
        plannerData[index] = ""
        localStorage.setItem("plannerData", JSON.stringify(plannerData))
    }
})

let currentHour = new Date().getHours()
let allPlannerDetails = document.querySelectorAll(".planner-detail")

allPlannerDetails.forEach((detail, index) => {
    let slotStartHour = index + 6

    if (currentHour === slotStartHour) {
        detail.classList.add("active-hour")
    }
})

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

function updateBackgroundByTime() {
    let hour = new Date().getHours();
    let newSrc

    if (hour >= 5 && hour < 12) {
        newSrc = "assets/anime.mp4"
        overlay.style.background = "rgba(255, 223, 150, 0.18)"
    } else if (hour >= 12 && hour < 17) {
        newSrc = "assets/anime3.mp4"
        overlay.style.background = "rgba(255, 245, 180, 0.12)"
    } else if (hour >= 17 && hour < 20) {
        newSrc = "assets/anime2.mp4"
        overlay.style.background = "rgba(255, 140, 70, 0.25)"
    } else {
        newSrc = "assets/anime4.mp4"
        overlay.style.background = "rgba(11, 18, 44, 0.5)"
    }

    if (source.src.indexOf(newSrc) === -1) {
        source.src = newSrc
        video.load()
        video.play()
    }
}

updateBackgroundByTime()
setInterval(updateBackgroundByTime, 60000)

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
let weatherLocation = document.querySelector("#weather-location")
let weatherTemp = document.querySelector("#weather-temp")
let weatherCondition = document.querySelector("#weather-condition")
let weatherHumidity = document.querySelector("#weather-humidity")
let weatherWind = document.querySelector("#weather-wind")
let weatherFeels = document.querySelector("#weather-feels")

weatherLocation.textContent = "Fetching location..."
weatherTemp.textContent = "--°C"
weatherCondition.textContent = "Loading weather..."

navigator.geolocation.getCurrentPosition(
    (position) => {
        let LATITUDE = position.coords.latitude
        let LONGITUDE = position.coords.longitude
        let API_KEY = "fbe8226654b37662db331caad38f0810"

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                weatherLocation.textContent = `${data.name}, India`
                weatherTemp.textContent = `${data.main.temp}°C`
                weatherCondition.textContent = `${data.weather[0].description}`
                weatherHumidity.textContent = `${data.main.humidity} %`
                weatherWind.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`
                weatherFeels.textContent = `${data.main.feels_like}°C`
            })
            .catch((error) => {
                weatherLocation.textContent = "Weather unavailable"
                weatherCondition.textContent = "Couldn't load weather data"
                console.log(error)
            })
    },
    (error) => {
        weatherLocation.textContent = "Location access denied"
        weatherCondition.textContent = "Enable location to see weather"
        console.log(error)
    }
)

// ------------------TODO LIST
let todoInput = document.querySelector(".todo-add-page input")
let todoTextarea = document.querySelector(".todo-add-page textarea")
let todoImportantCheck = document.querySelector(".important-check input")
let todoAddBtn = document.querySelector(".todo-add-page button")
let todoTaskPage = document.querySelector(".todo-task-page")

let savedTasks = localStorage.getItem("todoTasks")
let todoTasks = savedTasks ? JSON.parse(savedTasks) : []

function renderTodoTasks() {
    todoTaskPage.innerHTML = ""

    todoTasks.forEach((task) => {
        todoTaskPage.innerHTML += `
            <div class="todo-card ${task.completed ? "completed" : ""}" data-id="${task.id}">
                <div class="todo-title">
                    <h1>${task.text}</h1>
                    ${task.important ? `<p>Important</p>` : ""}
                </div>
                ${task.details ? `
    <p class="todo-details">
        ${task.expanded ? task.details : task.details.slice(0, 60)}
        ${task.details.length > 60 ? `<button class="read-more-btn" data-id="${task.id}">${task.expanded ? " Read Less" : "... Read More"}</button>` : ""}
    </p>
` : ""}
                <div class="todo-card-btns">
                    <button class="todo-done-btn">
                        ${task.completed ? "Undo" : "Mark as Done"}
                    </button>
                    <button class="todo-delete-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `
    })

    localStorage.setItem("todoTasks", JSON.stringify(todoTasks))
}

todoAddBtn.addEventListener("click", () => {
    let taskText = todoInput.value.trim()

    if (taskText === "") {
        return
    }

    let newTask = {
        id: Date.now(),
        text: taskText,
        details: todoTextarea.value.trim(),
        important: todoImportantCheck.checked,
        completed: false
    }

    todoTasks.push(newTask)
    renderTodoTasks()

    todoInput.value = ""
    todoTextarea.value = ""
    todoImportantCheck.checked = false
})

todoTaskPage.addEventListener("click", (e) => {
    let clickedCard = e.target.closest(".todo-card")

    if (!clickedCard) return

    let taskId = Number(clickedCard.getAttribute("data-id"))

    if (e.target.classList.contains("todo-done-btn")) {
        let task = todoTasks.find((t) => t.id === taskId)
        task.completed = !task.completed
        renderTodoTasks()
    }

    if (e.target.closest(".todo-delete-btn")) {
        todoTasks = todoTasks.filter((task) => task.id !== taskId)
        renderTodoTasks()
    }

    if (e.target.classList.contains("read-more-btn")) {
        let task = todoTasks.find((t) => t.id === taskId)
        task.expanded = !task.expanded
        renderTodoTasks()
    }
})

renderTodoTasks()

// ------------------MOTIVATION QUOTES
let quoteText = document.querySelector("#quote-text")
let quoteAuthor = document.querySelector("#quote-author")
let newQuoteBtn = document.querySelector("#new-quote-btn")

function fetchQuote() {
    newQuoteBtn.classList.add("loading")
    quoteText.textContent = "Loading..."

    fetch("https://dummyjson.com/quotes/random")
        .then((response) => response.json())
        .then((data) => {
            quoteText.textContent = data.quote
            quoteAuthor.textContent = `- ${data.author}`
            newQuoteBtn.classList.remove("loading")
        })
        .catch((error) => {
            quoteText.textContent = "Couldn't load quote. Try again."
            newQuoteBtn.classList.remove("loading")
            console.log(error)
        })
}

newQuoteBtn.addEventListener("click", fetchQuote)

fetchQuote()

// ------------------POMODORO TIMER
let timerDisplay = document.querySelector(".timer h2")
let timerButtons = document.querySelectorAll(".timer-btn button")
let startBtn = timerButtons[0]
let pauseBtn = timerButtons[1]
let resetBtn = timerButtons[2]

let WORK_DURATION = 25 * 60   // 1500 seconds
let remainingSeconds = WORK_DURATION
let timerInterval = null
let isRunning = false

function updateTimerDisplay() {
    let minutes = Math.floor(remainingSeconds / 60)
    let seconds = remainingSeconds % 60

    let formattedMinutes = String(minutes).padStart(2, "0")
    let formattedSeconds = String(seconds).padStart(2, "0")

    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`
}

function startTimer() {
    if (isRunning) return

    isRunning = true

    timerInterval = setInterval(() => {
        remainingSeconds--
        updateTimerDisplay()

        if (remainingSeconds <= 0) {
            clearInterval(timerInterval)
            isRunning = false
            alert("Work session complete! Take a break.")
        }
    }, 1000)
}

function pauseTimer() {
    clearInterval(timerInterval)
    isRunning = false
}

function resetTimer() {
    clearInterval(timerInterval)
    isRunning = false
    remainingSeconds = WORK_DURATION
    updateTimerDisplay()
}

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resetBtn.addEventListener("click", resetTimer)

updateTimerDisplay()

// ------------------DAILY GOALS
let goalInput = document.querySelector(".goal-add-page input")
let goalTextarea = document.querySelector(".goal-add-page textarea")
let goalAddBtn = document.querySelector(".goal-add-page button")
let goalList = document.querySelector("#goal-list")
let goalProgress = document.querySelector("#goal-progress")
let goalClearAllBtn = document.querySelector("#goal-clear-all-btn")

let savedGoals = localStorage.getItem("dailyGoals")
let dailyGoals = savedGoals ? JSON.parse(savedGoals) : []

function renderGoals() {
    goalList.innerHTML = ""

    dailyGoals.forEach((goal) => {
        goalList.innerHTML += `
            <div class="goal-card ${goal.completed ? "completed" : ""}" data-id="${goal.id}">
                <div class="goal-title">
                    <h1>${goal.text}</h1>
                </div>
                ${goal.details ? `
    <p class="goal-details">
        ${goal.expanded ? goal.details : goal.details.slice(0, 60)}
        ${goal.details.length > 60 ? `<button class="read-more-btn" data-id="${goal.id}">${goal.expanded ? " Read Less" : "... Read More"}</button>` : ""}
    </p>
` : ""}
                <button class="goal-done-btn">
                    ${goal.completed ? "Undo" : "Mark as Done"}
                </button>
            </div>
        `
    })

    updateGoalProgress()
    localStorage.setItem("dailyGoals", JSON.stringify(dailyGoals))
}

function updateGoalProgress() {
    let totalGoals = dailyGoals.length
    let completedGoals = dailyGoals.filter((g) => g.completed).length

    goalProgress.textContent = `${completedGoals} of ${totalGoals} completed`
}

goalAddBtn.addEventListener("click", () => {
    let goalText = goalInput.value.trim()

    if (goalText === "") {
        return
    }

    let newGoal = {
        id: Date.now(),
        text: goalText,
        details: goalTextarea.value.trim(),
        completed: false
    }

    dailyGoals.push(newGoal)
    renderGoals()

    goalInput.value = ""
    goalTextarea.value = ""
})

goalList.addEventListener("click", (e) => {
    let clickedCard = e.target.closest(".goal-card")

    if (!clickedCard) return

    let goalId = Number(clickedCard.getAttribute("data-id"))

    if (e.target.classList.contains("goal-done-btn")) {
        let goal = dailyGoals.find((g) => g.id === goalId)
        goal.completed = !goal.completed
        renderGoals()
    }

    if (e.target.classList.contains("read-more-btn")) {
        let goal = dailyGoals.find((g) => g.id === goalId)
        goal.expanded = !goal.expanded
        renderGoals()
    }
})

renderGoals()

goalClearAllBtn.addEventListener("click", () => {
    dailyGoals = []
    localStorage.removeItem("dailyGoals")
    renderGoals()
})