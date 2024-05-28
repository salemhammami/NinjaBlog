import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {isPending && <div> Loading... </div>}

      {blog && (
        <div>
          <h2>Blog details {id} </h2>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      )}
      {error && <div> {error}</div>}
    </div>
  );
};

export default BlogDetails;
