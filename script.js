document.addEventListener("DOMContentLoaded", () => {
    // Element References
    const loadingScreen = document.getElementById("loading-screen");
    const loveScreen = document.getElementById("love-screen");
    const secondConfirmationScreen = document.getElementById("second-confirmation-screen");
    const noLoveScreen = document.getElementById("no-love-screen");
    const finalScreen = document.getElementById("final-screen");
    const bgMusic = document.getElementById("bg-music");
    const loveMusic = document.getElementById("love-music");
    const finalMusic = document.getElementById("final-music");

    // Play Background Music and Show Loading Screen
    bgMusic.play();
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        loveScreen.classList.remove("hidden");
        bgMusic.pause(); // หยุดเพลงพื้นหลัง
        loveMusic.play();
    }, 5000); // Wait 5 seconds for loading

    // Handle Love Button
    document.getElementById("love-button").addEventListener("click", () => {
        loveScreen.classList.add("hidden");
        secondConfirmationScreen.classList.remove("hidden");
    });

    // Handle No Love Button
    document.getElementById("no-love-button").addEventListener("click", () => {
        loveScreen.classList.add("hidden");
        noLoveScreen.classList.remove("hidden");
    });

    // Handle Sure Button (Confirmation)
    document.getElementById("sure-button").addEventListener("click", () => {
        secondConfirmationScreen.classList.add("hidden");
        finalScreen.classList.remove("hidden");
        loveMusic.pause(); // หยุดเพลงรัก
        finalMusic.play();
    });

    // Handle Unsure Button (Go to No Love Screen)
    document.getElementById("unsure-button").addEventListener("click", () => {
        secondConfirmationScreen.classList.add("hidden");
        noLoveScreen.classList.remove("hidden");
    });

    // Handle Pout Button (Exit Website)
    document.getElementById("pout-button").addEventListener("click", () => {
        window.close(); // Close the browser window
    });
});
