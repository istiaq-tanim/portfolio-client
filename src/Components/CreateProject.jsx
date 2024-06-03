import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const CreateProject = () => {
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const queryClient = useQueryClient()

      const { isSuccess, mutate } = useMutation({
            mutationFn: (project) => {
                  return axios.post("https://portfolio-server-puce-three.vercel.app/projects", project)
            },
            onSuccess: () => {
                  queryClient.invalidateQueries(["projects"])
            }
      })
      const onSubmit = (data) => {
            mutate(data)
            reset()
      };

      if (isSuccess) {
            Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Projects Posted Successfully',
                  showConfirmButton: false,
                  timer: 1000
            })
      }
      return (
            <div>
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-[#e3e0e0] mt-10">
                        <div className="form-control w-full px-5 pt-5">
                              <label className="label">
                                    <span className="label-text font-medium text-lg">Project Title</span>
                              </label>
                              <input
                                    type="text"
                                    placeholder="Type here"
                                    {...register("name", { required: true })}
                                    className="input input-bordered w-full"
                              />
                        </div>

                        <div className="flex flex-col lg:flex-row">
                              <div className="form-control w-full px-5">
                                    <label className="label">
                                          <span className="label-text font-medium text-lg">Live Link</span>
                                    </label>
                                    <input
                                          type="text"
                                          placeholder="Type here"
                                          {...register("liveLink", { required: true })}
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
                        <div className="flex flex-col lg:flex-row">
                              <div className="form-control w-full px-5">
                                    <label className="label">
                                          <span className="label-text font-medium text-lg">GitHub Client</span>
                                    </label>
                                    <input
                                          type="text"
                                          placeholder="Type here"
                                          {...register("client", { required: true })}
                                          className="input input-bordered w-full px-2"
                                    />
                              </div>
                              <div className="form-control w-full px-5">
                                    <label className="label">
                                          <span className="label-text font-medium text-lg">GitHub Server</span>
                                    </label>
                                    <input
                                          type="text"
                                          placeholder="Type here"
                                          {...register("server", { required: true })}
                                          className="input input-bordered w-full px-2"
                                    />
                              </div>

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

export default CreateProject;