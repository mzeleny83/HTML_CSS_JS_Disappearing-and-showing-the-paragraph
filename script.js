const allArticles = document.querySelectorAll(".switch-article");
const button = document.querySelector(".btn");
allArticles.forEach((oneArticle) => {
  oneArticle.addEventListener("click", () => {
    oneArticle.classList.toggle("disappear");
  });
});
button.addEventListener("click", () => {
  allArticles.forEach((oneArticle) => {
    oneArticle.classList.remove("disappear");
  });
});
