document.addEventListener("DOMContentLoaded", function () {
    let showBtn = document.getElementById("showBtn");
    let hideBtn = document.getElementById("hideBtn");
    let content = document.getElementById("accordionContent");

    showBtn.addEventListener("click", function () {
        content.style.display = "block";  
        showBtn.classList.add("hidden");  
        hideBtn.classList.remove("hidden"); 
    });

    hideBtn.addEventListener("click", function () {
        content.style.display = "none";  
        hideBtn.classList.add("hidden"); 
        showBtn.classList.remove("hidden"); 
    });
});

