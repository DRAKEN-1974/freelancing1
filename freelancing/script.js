// JavaScript to toggle between Dark Mode and Light Mode
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement('div');
    toggleButton.classList.add('dark-mode-toggle');
    toggleButton.innerText = "Toggle Dark Mode";
    document.body.appendChild(toggleButton);

    // Function to toggle dark mode
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.innerText = "Switch to Light Mode";
        } else {
            toggleButton.innerText = "Switch to Dark Mode";
        }
    });
});
