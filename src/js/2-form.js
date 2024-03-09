const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");

form.addEventListener("input", event => {
    event.preventDefault();
    const email = input.value.trim();
    const message = textarea.value.trim();
    const data = JSON.stringify({ email, message });
    localStorage.setItem(STORAGE_KEY, data);
});

form.addEventListener("submit", event => {
    event.preventDefault();
    const email = input.value.trim();
    const message = textarea.value.trim();
    if (email === "" || message === "") {
        return alert("Будь-ласка, заповніть всі поля форми")
    }
    console.log(`email: ${email}, message: ${message}`);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

