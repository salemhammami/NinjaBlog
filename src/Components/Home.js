import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);

  //https://fakestoreapi.com/products
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  const [isOpened, setIsOpened] = useState(true);
  const toggle = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="home">
      {error && <div> {error} </div>}
      <button onClick={toggle}> {isOpened ? "Close" : "Open"} </button>
      {isPending && <div> Loading...</div>}
      {isOpened && blogs && <BlogList blogs={blogs} />}
    </div>
  );
};
export default Home;
