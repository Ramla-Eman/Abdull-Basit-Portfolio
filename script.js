// Download CV functionality
function downloadCV() {
    const link = document.createElement("a");
    link.href = "-";
    link.download = "Abdull Basit CV.pdf";
    link.click();
}

document.getElementById("downloadCV").addEventListener("click", downloadCV);