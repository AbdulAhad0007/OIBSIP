document.addEventListener("DOMContentLoaded", function() {
    const dropdownIcons = document.querySelectorAll(".dropdown-icon");

    dropdownIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const dropPara = this.nextElementSibling;
            if (dropPara.style.display === "none") {
                dropPara.style.display = "block";
            } else {
                dropPara.style.display = "none";
            }
        });
    });
});
