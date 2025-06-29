document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu li.nav-item a");

    // Remove active from all
    menuLinks.forEach(link => link.classList.remove("active"));

    // Highlight based on current page URL path
    menuLinks.forEach(link => {
        if (link.pathname === window.location.pathname) {
            link.classList.add("active");
        }
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode input[type="checkbox"]');

    // Check localStorage and apply dark mode if set
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
