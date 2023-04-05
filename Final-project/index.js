const photoArea = document.getElementById("Photo-area");
const generateBtn = document.getElementById("photo-gen");

generateBtn.addEventListener("click", () => {
  fetch("https://picsum.photos/200/300")
    .then((response) => {
      photoArea.innerHTML = `<img src="${response.url}" alt="Generated Photo">`;
    })
    .catch((error) => {
      console.log(error);
    });
});

const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");
let likes = 0;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = `${likes} ${likes === 1 ? 'like' : 'likes'}`;
  likeBtn.classList.add("liked");
});


