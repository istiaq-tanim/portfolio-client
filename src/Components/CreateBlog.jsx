import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CreateBlog = () => {
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const queryClient = useQueryClient()

      const { isSuccess, mutate } = useMutation({
            mutationFn: (blog) => {
                  return axios.post("https://portfolio-server-puce-three.vercel.app/blogs", blog)
            },
            onSuccess: () => {
                  queryClient.invalidateQueries(["blogs"])
            }
      })
      const onSubmit = (data) => {
            const newData = { ...data, likes: parseInt(data.likes) }
            mutate(newData)
            // reset()
      };

      if (isSuccess) {
            Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Blogs Posted Successfully',
                  showConfirmButton: false,
                  timer: 1000
            })
      }
      return (
            <div>
                  <div className='text-center mt-10'>
                        <h3 className='font-bold text-2xl'>Add Blog</h3>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-[#e3e0e0] mt-10">
                        <div className="form-control w-full px-5 pt-5">
                              <label className="label">
                                    <span className="label-text font-medium text-lg">Blog Title</span>
                              </label>
                              <input
                                    type="text"
                                    placeholder="Type here"
                                    {...register("title", { required: true })}
                                    className="input input-bordered w-full"
                              />
                        </div>

                        <div className="flex flex-col lg:flex-row">
                              <div className="form-control w-full px-5">
                                    <label className="label">
                                          <span className="label-text font-medium text-lg">Author Name</span>
                                    </label>
                                    <input
                                          type="text"
                                          placeholder="Type here"
                                          {...register("authorName", { required: true })}
                                          className="input input-bordered w-full px-2"
                                    />
                              </div>
                              <div className="form-control w-full px-5">
                                    <label className="label">
                                          <span className="label-text font-medium text-lg">Image URL</span>
                                    </label>
                                    <input
                                          type="text"
                                          placeholder="Type here"
                                          {...register("image", { required: true })}
                                          className="input input-bordered w-full px-2"
                                    />
                              </div>

                        </div>

                        <div className="form-control w-full px-5 pt-5">
                              <label className="label">
                                    <span className="label-text font-medium text-lg">Likes</span>
                              </label>
                              <input
                                    type="number"
                                    placeholder="Type here"
                                    {...register("likes", { required: true })}
                                    className="input input-bordered w-full"
                              />
                        </div>

                        <div className="form-control px-5">
                              <label className="label">
                                    <span className="label-text font-medium text-lg">Description</span>
                              </label>
                              <textarea
                                    className="textarea textarea-bordered h-24"
                                    {...register("description", { required: true })}
                                    placeholder="Description"
                              ></textarea>
                        </div>


                        <input className="m-5 btn bg-green-300" type="submit" value="Submit" />
                  </form>
            </div>
      );
};

export default CreateBlog;