// Dodanie zmiennych, które pobierają wartości po określonych id
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Dodanie "nasłuchu" na przycisk, który po kliknięciu sprawdza, 
// czy użytkownik wprowadził login/hasło zgadzające się z podanymi poniżej, jeśli są poprawne wyświetla alert i odświeża stronę,
// w przeciwnym wypadku wyświetla napis

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "student" && password === "test") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.innerHTML = "Wrong login or password"
        loginErrorMsg.style.opacity = 1;
    }
})