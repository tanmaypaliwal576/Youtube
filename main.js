// Selecting the Elements
const Activebuttons = document.querySelectorAll("[data-user-container]");
const Dropdowns = document.querySelectorAll("[data-user-dropdown]");
const profile = document.querySelector(".profile-dropdown");
const button = document.querySelector(".profile");
const nav = document.querySelector(".side-navbar");
const shortnav = document.querySelector(".short-side-navbar");
const btnnav = document.querySelector(".header--nav");
const main = document.querySelector("main");
const ytvideos = document.querySelector(".youtube-videos");
const ytvideo = document.querySelector(".youtube-video");
button.addEventListener("click", (e) => {
  profile.classList.toggle("active");
});

btnnav.addEventListener("click", (e) => {
  shortnav.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("active");
  ytvideos.classList.toggle("active");
  ytvideo.classList.toggle("active");
});

/*----- videos -----*/
const videos = document.querySelectorAll(".thumbnail");
const shortvideos = document.querySelectorAll(".short-thumbnail");
const progressBar = document.querySelector(".duration-timer");
videos.forEach((video) => {
  const v = video.querySelector(".video");
  video.addEventListener("mouseenter", () => {
    v.muted = true;
    v.play();
  });

  video.addEventListener("mouseleave", () => {
    v.muted = true;
    v.pause();
  });

  v.addEventListener("timeupdate", () => {
    const percent = (v.currentTime / v.duration) * 100;
    progressBar.style.width = `${percent}%`;
  });
});

shortvideos.forEach((shortvideo) => {
  const short = shortvideo.querySelector(".short-video");
  shortvideo.addEventListener("mouseenter", () => {
    short.muted = true;
    short.play();
  });

  shortvideo.addEventListener("mouseleave", () => {
    short.muted = true;
    short.pause();
  });
});

/*----Timers----*/
