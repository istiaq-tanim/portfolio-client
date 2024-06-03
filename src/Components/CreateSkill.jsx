import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const CreateSkill = () => {
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const queryClient = useQueryClient()

      const { isSuccess, mutate } = useMutation({
            mutationFn: (skill) => {
                  return axios.post("https://portfolio-new-server-phi.vercel.app/skills", skill)
            },
            onSuccess: () => {
                  queryClient.invalidateQueries(["skills"])
            }
      })
      const onSubmit = (data) => {
            const newData = { ...data, style: "shadow-orange-500" }
            mutate(newData)
            reset()
      };

      if (isSuccess) {
            Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Skills Posted Successfully',
                  showConfirmButton: false,
                  timer: 1000
            })
      }


      return (
            <div>
                  <div className='text-center mt-10'>
                        <h3 className='font-bold text-2xl'>Add Skill</h3>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-[#e3e0e0] mt-10">
                        <div className="form-control w-full px-5 pt-5">
                              <label className="label">
                                    <span className="label-text font-medium text-lg">Skill Title</span>
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
                                          <span className="label-text font-medium text-lg">Skill Image </span>
                                    </label>
                                    <input
                                          type="text"
                                          placeholder="Type here"
                                          {...register("image", { required: true })}
                                          className="input input-bordered w-full px-2"
                                    />
                              </div>


                        </div>




                        <input className="m-5 btn bg-green-300" type="submit" value="Submit" />
                  </form>
            </div>
      );
};

export default CreateSkill;