import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const { logInUser } = useContext(AuthContext)
      const navigate = useNavigate()
      const onSubmit = (data) => {
            logInUser(data.email, data.password)
                  .then(response => {
                        const user = response.user;
                        console.log(user)
                        reset()
                        Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'User logged in Successfully',
                              showConfirmButton: false,
                              timer: 1000
                        })
                        navigate("/");
                  })
                  .catch(error => {
                        console.log(error)
                        Swal.fire({
                              position: 'center',
                              icon: 'error',
                              title: 'Please Provide Your Actual Credential',
                              showConfirmButton: false,
                              timer: 1000
                        })
                  })
      };
      return (
            <div className="hero bg-base-200">
                  <div className="hero-content flex w-full gap-20">
                        <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100 my-32">
                              <h1 className="text-3xl text-center font-bold mt-3">Login now!</h1>
                              <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" name='email'
                                                {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                          {errors.email && <span className="text-red-500">Email is required</span>}
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input type="password" name='password' {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                          {errors.password && <span className="text-red-500">Password is required</span>}
                                    </div>
                                    <div className="form-control mt-2">
                                          <button className="btn btn-info text-white">Login</button>
                                    </div>

                              </form>
                              <p className='text-center'>New Member?<Link to="/register"><button className="btn btn-active px-1 py-0 btn-link">Please Register</button></Link></p>

                        </div>
                  </div>
            </div>
      );
};

export default Login;