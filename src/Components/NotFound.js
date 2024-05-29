import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>that page does not exist</p>
      <Link to="/"> Go back to home page</Link>
    </div>
  );
};

export default NotFound;
