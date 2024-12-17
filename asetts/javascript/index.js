// mobile-header movement
const mobileBodyElement = document.getElementById("mobile-body");
const mobileBodyBtn = document.getElementById("mobile-body-btn");
const [line1, line2, line3] = document.querySelectorAll(".line");
function mobileHeaderMove() {
    if (mobileBodyElement.style.display === "flex") {
        mobileBodyElement.style.display = "none";
        line1.style.transform = "rotate(0deg)";
        line2.style.transform = "rotate(0deg)";
        line2.style.marginTop = "0";
        line3.style.display = "block";
    } else {
        mobileBodyElement.style.display = "flex";
        line1.style.transform = "rotate(45deg)";
        line2.style.transform = "rotate(-45deg)";
        line2.style.marginTop = "-14px";
        line3.style.display = "none";
    }
}
mobileBodyBtn.addEventListener("click", () => {
    mobileHeaderMove();
});

// view-more movement
const voiceMoreElement = document.getElementById("voice-more");
const voiceMoreBtn = document.getElementById("voice-more-btn");

voiceMoreBtn.addEventListener("click", () => {
    if (voiceMoreElement.style.display === "flex") {
        voiceMoreElement.style.display = "none";
        voiceMoreBtn.textContent = "もっとみる";
    } else {
        voiceMoreElement.style.display = "flex";
        voiceMoreBtn.textContent = "閉じる";
    }
});