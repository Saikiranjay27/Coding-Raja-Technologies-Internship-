document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const songTitle = document.getElementById("song-title");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const volumeSlider = document.getElementById("volume-slider");
    const shuffleBtn = document.getElementById("shuffle-btn");
    const repeatBtn = document.getElementById("repeat-btn");

    const tracks = document.querySelectorAll(".track");

    let currentTrackIndex = 0;
    let isShuffle = false;
    let isRepeat = false;

    const loadTrack = (index) => {
        const track = tracks[index];
        audio.src = track.getAttribute("data-src");
        songTitle.textContent = track.querySelector("h3").textContent;
    };

    const updatePlayPauseIcon = () => {
        if (audio.paused) {
            playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
        } else {
            playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
        }
    };

    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayPauseIcon();
    });

    prevBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        audio.play();
        updatePlayPauseIcon();
    });

    nextBtn.addEventListener("click", () => {
        if (isShuffle) {
            currentTrackIndex = Math.floor(Math.random() * tracks.length);
        } else {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        }
        loadTrack(currentTrackIndex);
        audio.play();
        updatePlayPauseIcon();
    });

    volumeSlider.addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });

    shuffleBtn.addEventListener("click", () => {
        isShuffle = !isShuffle;
        shuffleBtn.classList.toggle("active", isShuffle);
    });

    repeatBtn.addEventListener("click", () => {
        isRepeat = !isRepeat;
        repeatBtn.classList.toggle("active", isRepeat);
    });

    audio.addEventListener("ended", () => {
        if (isRepeat) {
            audio.play();
        } else {
            nextBtn.click();
        }
    });

    tracks.forEach((track, index) => {
        track.addEventListener("click", () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            audio.play();
            updatePlayPauseIcon();
        });
    });

    // Initialize the first track
    loadTrack(currentTrackIndex);
    updatePlayPauseIcon();
});


