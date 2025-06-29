const saveBtn = document.getElementById("saveBtn");
const form = document.getElementById("ticketForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent immediate page load

    saveBtn.classList.add("loading");

    setTimeout(() => {
        saveBtn.classList.remove("loading");
        saveBtn.classList.add("success");

        // After success, wait a moment, then redirect
        setTimeout(() => {
            window.location.href = form.getAttribute("action");
        }, 1500);
    }, 2000);
});