import Lottie from "lottie-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import groovyWalkAnimation from "../../src/assets/Animation - 1719989394339.json";
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


            <div>
                  <div className="hero bg-base-200">
                        <div className="hero-content flex w-full max-h-screen gap-20 justify-center items-center overflow-hidden">
                              <div>
                                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                              </div>
                              <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                                    <h1 className="text-3xl text-center font-bold mt-5">Login now!</h1>
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body py-20">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
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



                              </div>
                        </div>
                  </div>
            </div>

      );
};

export default Login;