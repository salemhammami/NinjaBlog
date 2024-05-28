import { click } from "@testing-library/user-event/dist/click";
import React, { useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* <img src={blog.image} alt="hello" width={"100px"} /> */}
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>Written by: {blog.author}</p>
          <h3>{blog.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
