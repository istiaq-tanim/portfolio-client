import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
      return (
            <div className="card w-full bg-base-100 shadow-xl">
                  <figure>
                        <img className="rounded-xl h-64 pt-5" src={blog.image} alt="" />
                  </figure>
                  <div className="card-body">

                        <h2 className="card-title">
                              {blog.title}
                        </h2>
                        <p className="text-gray-500 text-justify">
                              {blog.description}
                        </p>
                        <div className="flex justify-between items-center mt-5">
                              <div className="avatar items-center">
                                    <span>{blog.authorName}</span>
                              </div>

                              <div className="flex items-center">
                                    <FaThumbsUp className="text-accent text-xl" />
                                    <p className='pl-1'>{blog.likes}
                                          {" "}
                                          Likes</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BlogCard;