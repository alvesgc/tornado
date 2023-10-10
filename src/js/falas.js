let playButton = document.getElementById("toninho");
let audioStart = document.getElementById("audioStart");

function msuciOn() {
  playButton.addEventListener("click", () => {
    if (audioStart.paused) {
      audioStart.play();
    } else {
      audioStart.pause();
    }
  });
}
msuciOn()