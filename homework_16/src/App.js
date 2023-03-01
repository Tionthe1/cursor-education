import "./App.css";
import Post from "./components/post/Post";

const ANAKIN_IMAGE =
  "https://exploringyourmind.com/wp-content/uploads/2018/08/anakin-skywalker-768x430.jpg";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const postsData = [
  {
    author_name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр.",
  },
];

function App() {
  return (
    <div className="App">
      <Post
        nickname={postsData[0].nickname}
        date={postsData[0].date}
        author_name={postsData[0].author_name}
        content={postsData[0].content}
        photo={postsData[0].photo}
        image={postsData[0].image}
      />
    </div>
  );
}

export default App;
