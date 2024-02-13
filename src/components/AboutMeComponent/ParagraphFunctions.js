export const BlurAboutParagraph = () => {
  document.querySelectorAll(".About_paragraph").forEach((item) => {
    item.classList.remove("unblurParagraph");
    item.classList.add("blurParagraph");
  });
};

export const UnblurAboutParagraph = () => {
  document.querySelectorAll(".About_paragraph").forEach((item) => {
    item.classList.remove("blurParagraph");
    item.classList.add("unblurParagraph");
  });
};
