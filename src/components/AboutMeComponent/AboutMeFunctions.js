export const Animate = () => {
  var video = document.querySelector("#AboutMe_Video");
  video.currentTime = 0;
  video.play();
  document.querySelectorAll(".Letter").forEach((item) => {
    item.classList.remove("revealAnimation");
    item.classList.remove("hideAnimation");
    item.classList.add("revealAnimation");
  });
};

export const DeAnimate = () => {
  var video = document.querySelector("#AboutMe_Video");
  video.currentTime = 0;
  video.play();
  document.querySelectorAll(".Letter").forEach((item) => {
    item.classList.remove("revealAnimation");
    item.classList.remove("hideAnimation");

    item.classList.add("hideAnimation");
  });
};
