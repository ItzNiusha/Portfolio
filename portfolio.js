document.addEventListener("DOMContentLoaded", function () {
    // Get the button and the target section
    const glitchButton = document.getElementById("glitchButton");
    const scrollTarget = document.getElementById("scrollTarget");

    // Add a click event listener to the button
    glitchButton.addEventListener("click", function () {
        // Scroll to the target section when the button is clicked
        scrollTarget.scrollIntoView({ behavior: "smooth" });
    });
});
