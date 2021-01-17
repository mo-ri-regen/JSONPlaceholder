// JSONPlaceholderを使ったWebAPIの練習
// titleを取得してブラウザに表示する;

const URL = "https://jsonplaceholder.typicode.com/posts/";

const userdataButton = document.getElementById("userdata");

userdataButton.addEventListener("click", async () => {
  const res = await fetch(URL);
  const items = await res.json();
  items.forEach((item) => {
    // console.log(item);
    // console.log(item["userId"].toString());
    console.log(item["title"]);
  });
});
