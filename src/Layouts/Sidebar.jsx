import { FaPlusSquare, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
      return (
            <div className="flex flex-col w-full h-screen p-2  bg-green-100 text-gray-800 font-semibold">
                  <div className="space-y-3">
                        <div className="flex-1">
                              <ul className="pt-2 pb-4 space-y-1 text-sm">
                                    <li className="rounded-sm">
                                          <NavLink
                                                rel="noopener noreferrer"
                                                to="/"
                                                className={({ isActive }) =>
                                                      isActive
                                                            ? "flex items-center p-2 space-x-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                            : "text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                }
                                          >
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 512 512"
                                                      className="w-5 h-5 fill-current"
                                                >
                                                      <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                                </svg>
                                                <span>Home</span>
                                          </NavLink>
                                    </li>

                                    <li className="rounded-sm">
                                          <NavLink
                                                rel="noopener noreferrer"
                                                to="/dashboard/createProject"
                                                className={({ isActive }) =>
                                                      isActive
                                                            ? "flex items-center p-2 space-x-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                            : "text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                }
                                          >
                                                <FaPlusSquare className="w-5 h-5 fill-current dark:text-gray-600"></FaPlusSquare>
                                                <span>Create Project </span>
                                          </NavLink>
                                    </li>
                                    <li className="rounded-sm">
                                          <NavLink
                                                rel="noopener noreferrer"
                                                to="/dashboard/createSkill"
                                                className={({ isActive }) =>
                                                      isActive
                                                            ? "flex items-center p-2 space-x-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                            : "text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                }
                                          >
                                                <FaPlusSquare className="w-5 h-5 fill-current dark:text-gray-600"></FaPlusSquare>
                                                <span>Create Skill </span>
                                          </NavLink>
                                    </li>

                                    <li className="rounded-sm">
                                          <NavLink
                                                rel="noopener noreferrer"
                                                to="/dashboard/createBlog"
                                                className={({ isActive }) =>
                                                      isActive
                                                            ? "flex items-center p-2 space-x-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                            : "text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                }
                                          >
                                                <FaPlusSquare className="w-5 h-5 fill-current dark:text-gray-600"></FaPlusSquare>
                                                <span>Create Blog </span>
                                          </NavLink>
                                    </li>

                                    <li className="rounded-sm">
                                          <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                className="text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                          >
                                                <FaSignOutAlt className="w-5 h-5 fill-current" />
                                                <span>Logout</span>
                                          </a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default Sidebar;