import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const Register = () => {
      const { register, handleSubmit } = useForm()
      const { createUser } = useContext(AuthContext)
      const onSubmit = (data) => {
            createUser(data.email, data.password)
                  .then(result => console.log(result))
                  .catch(error => {
                        console.log(error)
                  })
      };
      return (

            <div>
                  <div className="hero bg-base-200">
                        <div className="hero-content flex w-full gap-20">
                              <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100 my-32">
                                    <h1 className="text-3xl text-center font-bold mt-3">Register Now!</h1>
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' {...register("name")} placeholder="User Name" className="input input-bordered" />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />

                                          </div>

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                          </div>
                                          <div className="form-control mt-2">
                                                <button className="btn btn-info text-white">Sign Up</button>
                                          </div>

                                    </form>

                                    <p className='text-center'>Already Have an Account?<Link to="/login"><button className="btn btn-active px-1 py-0 btn-link">Please Login</button></Link></p>

                              </div>
                        </div>
                  </div>

            </div>

      );
};

export default Register;