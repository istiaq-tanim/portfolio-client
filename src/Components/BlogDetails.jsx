import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const retrievedProjects = async ({ queryKey }) => {
      const response = await axios.get(`https://portfolio-server-puce-three.vercel.app/${queryKey[0]}/${queryKey[1]}`);
      return response.data.response
}

const BlogDetails = () => {
      const { id } = useParams()

      const { data: blog, isLoading, error } = useQuery({
            queryKey: ["blogs", id],
            queryFn: retrievedProjects
      })

      if (isLoading) {
            return <Loader></Loader>
      }

      if (error) {
            return <span>Error: {error.message}</span>
      }


      return (
            <div className="w-full h-full max-w-7xl mx-auto px-10 lg:px-0">
                  <section className='mt-10'>
                        <div>
                              <img
                                    className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                                    src={blog?.image}
                                    alt=""
                              />
                        </div>

                        <div className="grid lg:grid-cols-12 py-12 gap-8">
                              <div className="col-span-2 hidden lg:block">
                                    <img src={blog?.image} alt="" />
                              </div>
                              <div className="col-span-8">
                                    <h2 className="font-bold text-slate-800 text-2xl">
                                          {blog?.title}
                                    </h2>
                                    <p className="my-2 text-slate-800 italic">
                                          {blog?.description}
                                    </p>
                                    <p className="my-2 text-slate-800 italic">
                                          Author: {blog?.authorName}
                                    </p>

                              </div>

                        </div>
                  </section>
            </div>

      );
};

export default BlogDetails;