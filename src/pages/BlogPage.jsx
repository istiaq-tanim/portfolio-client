import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogCard from "../Components/BlogCard";
import Loader from "../Components/Loader";

const retrievedSkills = async () => {
      const response = await axios.get("https://portfolio-new-server-phi.vercel.app/blogs")
      return response.data.response
}

const BlogPage = () => {
      const { data: blogs, isLoading, error } = useQuery({
            queryKey: "blogs",
            queryFn: retrievedSkills
      })

      if (isLoading) {
            return <Loader></Loader>
      }

      if (error) {
            return <span>Error: {error.message}</span>
      }

      return (
            <div className="grid lg:grid-cols-3 gap-10 px-5 max-w-[1280px] mx-auto mt-10">
                  {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                  }
            </div>
      );
};

export default BlogPage;