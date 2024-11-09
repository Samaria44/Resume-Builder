// Get the toggle button and skills section
const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");

// Function to toggle visibility of the skills section
function toggleSkillsVisibility(): void {
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        } else {
            skillsSection.style.display = "none";
        }
    }
}

// Add event listener to the button
toggleSkillsButton?.addEventListener("click", toggleSkillsVisibility);
