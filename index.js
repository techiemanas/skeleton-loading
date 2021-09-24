async function fetchPosts() {
  return await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
}
const postList = document.querySelector(".post-list");
for (let i = 0; i < 11; i++) {
  const skeletonTemplate = document
    .getElementById("skeleton-template")
    .content.cloneNode(true);
  postList.appendChild(skeletonTemplate);
}
fetchPosts().then((data) => {
  postList.innerHTML = "";
  data.map((post) => {
    const cardTemplate = document
      .getElementById("card-template")
      .content.cloneNode(true);
    cardTemplate.querySelector(".card-title").textContent = post.title;
    cardTemplate.querySelector(".card-body").textContent = post.body;
    postList.appendChild(cardTemplate);
  });
});
