
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const { user, logOut } = useContext(AuthContext)
      const handleLogout = () => {
            logOut()
                  .then(() => { })
                  .catch(error => console.log(error.message))
      }
      return (
            <div className="bg-gray-300 opacity-90 px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sticky top-0 z-50">
                  <div className="relative flex items-center justify-between">
                        <Link to="/" className="inline-flex items-center">
                              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                                    Kazi <span className="text-[#5AB2FF]">Istiaq Mahmaud</span>
                              </span>
                        </Link>

                        <ul className="items-center hidden space-x-8 lg:flex">
                              <li className="hover:scale-105 duration-200">
                                    <Link to="/">Home</Link>
                              </li>

                              <li className="hover:scale-105 duration-200">
                                    <Link to="/blogs">Blogs</Link>
                              </li>

                              <li className="hover:scale-105 duration-200">
                                    <Link to="/dashboard/createProject">Dashboard</Link>
                              </li>

                              {user ?
                                    <li className="flex items-center gap-2">
                                          <p className="hover:scale-105 duration-200">{user.email}</p>
                                          <button onClick={handleLogout} className="bg-[#5AB2FF] p-2 rounded-lg hover:scale-105 duration-200">Sign out</button>
                                    </li>
                                    :
                                    <li>
                                          <NavLink
                                                to='/login'>
                                                Login
                                          </NavLink>
                                    </li>
                              }
                        </ul>

                        <div className="lg:hidden">
                              <button onClick={() => setIsMenuOpen(true)}>
                                    <FaBars className="w-5 text-gray-600" />
                              </button>
                              {isMenuOpen && (
                                    <div className="absolute top-0 left-0 w-full z-10">
                                          <div className="p-5 bg-white border rounded shadow-sm">
                                                <div className="flex items-center justify-between mb-4">
                                                      <div>
                                                            <Link href="/" className="inline-flex items-center">
                                                                  <span className="text-xl font-bold tracking-wide text-gray-800">
                                                                        Kazi <span className="text-blue-500">Istiaq Mahamud</span>
                                                                  </span>
                                                            </Link>
                                                      </div>

                                                      <div>
                                                            <button onClick={() => setIsMenuOpen(false)}>
                                                                  {" "}
                                                                  <HiMiniXMark className="w-5 text-gray-600" />
                                                            </button>
                                                      </div>
                                                </div>

                                                <nav>
                                                      <ul className="space-y-4">
                                                            <li>
                                                                  <Link to="/">Home</Link>
                                                            </li>
                                                            <li>
                                                                  <Link to="/blogs">blogs</Link>
                                                            </li>
                                                            {
                                                                  user && <li className="hover:scale-105 duration-200">
                                                                        <Link to="/dashboard/createProject">Dashboard</Link>
                                                                  </li>
                                                            }
                                                            {user ?
                                                                  <li>
                                                                        <p className="hover:scale-105 duration-200">{user.email}</p>
                                                                        <button onClick={handleLogout} className="bg-sky-300 p-2 rounded-lg hover:scale-105 duration-200 mt-2">Sign out</button>
                                                                  </li>
                                                                  :
                                                                  <li>
                                                                        <NavLink
                                                                              to='/login'>
                                                                              Login
                                                                        </NavLink>
                                                                  </li>
                                                            }

                                                      </ul>
                                                </nav>
                                          </div>
                                    </div>
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default Header;