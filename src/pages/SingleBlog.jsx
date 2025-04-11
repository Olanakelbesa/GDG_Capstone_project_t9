import React from "react";
import { useParams } from "react-router-dom";
import BlogDetailsMain from "./BlogDetails_main";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div>
       <BlogDetailsMain />
    </div>
  );
};

export default BlogDetails;
