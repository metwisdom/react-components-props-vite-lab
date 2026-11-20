import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App min-h-screen bg-black px-5 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <Header name={blogData.name} />
        <About image={blogData.image} about={blogData.about} />
        <ArticleList posts={blogData.posts} />
      </div>
    </div>
  );
}

export default App;