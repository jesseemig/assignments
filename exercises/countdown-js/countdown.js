var timer = document.getElementById("timer");
var countdown = 10;
var intervalId;

function updateTime() {
    timer.textContent = countdown;
    countdown--;
    if (countdown === 0) {
        clearInterval(intervalId);
        document.body.style.background = "url(image)";
        timer.style.color = "white";
        var audio = new Audio ('explode.mp3');
        audio.play();
    }
}
intervalId = setInterval(updateTime, 1000); // 1000 is 1 second