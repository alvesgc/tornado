let playButton = document.getElementById("toninho");
let audioStart = document.getElementById("audioStart");

function musicOn() {
  playButton.addEventListener("click", () => {
    if (audioStart.paused) {
      audioStart.play();
    } else {
      audioStart.pause();
    }
  });
}
musicOn()