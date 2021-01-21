// JSONPlaceholderを使ったWebAPIの練習
// titleを取得してブラウザに表示する;

const URL = "https://jsonplaceholder.typicode.com/posts/";

const textArea = document.getElementsByName("textarea");
const titleListButton = document.getElementById("titleList");
const addTitleButton = document.getElementById("addTitle");
const main = document.querySelector("main");

//titleタグの作成
function CreateTitle(item) {
  const article = document.createElement("article");
  article.innerText = item["title"];
  return article;
}

titleListButton.addEventListener("click", async () => {
  try {
    const res = await fetch(URL);
    const items = await res.json();
    items.forEach((item) => {
      // console.log(item);
      // console.log(item["userId"].toString());
      console.log(item["title"]);
      const article = CreateTitle(item);
      main.appendChild(article);
    });
  } catch (error) {
    alert("読み込み失敗");
  }
});

addTitleButton.addEventListener("click", async () => {
  try {
    const data = {
      title: textArea[0].value,
      // body: 1,
      // userId: 1,
    };
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const post = CreateTitle(await res.json());
    main.prepend(post); //先頭に追加
  } catch (error) {
    alert("データ追加に失敗");
  }
});
