const submitBtn = document.querySelector("#btn")
const input = document.querySelector("#email")
const notification = document.querySelector("#notification")
const errorIcon = document.querySelector("#error-icon")

const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return validRegex.test(email)
}

input.addEventListener("keydown", () => {
    notification.textContent = ""
    errorIcon.classList.add("hidden")
    input.parentElement.classList.remove("ring-1", "ring-soft-red")
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let email = input.value

    if (validateEmail(email)) {
        alert("Email sent!")
        notification.textContent = ""
        errorIcon.classList.add("hidden")
        input.value = ""
    } else {
        notification.innerHTML = "Please provide a valid email"
        input.parentElement.classList.add("ring-1", "ring-soft-red")
        errorIcon.classList.remove("hidden")
    }   
})