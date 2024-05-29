import React from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  const history = useHistory();

  return (
    <div className="blog-details">
      {isPending && <div> Loading... </div>}

      {blog && (
        <div>
          <h2>Blog details {id} </h2>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      {error && <div> {error}</div>}
    </div>
  );
};

export default BlogDetails;
