import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
      return (


            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl transform transition duration-500 hover:scale-105">
                  <img className="w-full object-cover h-64" src={project.image} alt="" />
                  <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{project.name}</h3>
                        <p className="text-[#575A6E] text-sm mb-2 text-justify">{project.description.slice(0, 80)}...</p>

                        <Link
                              className="bg-[#5AB2FF] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                              to={`/projects/${project._id}`}
                        >
                              <span>Details</span>
                        </Link>
                  </figcaption>
            </figure>



      );
};

export default ProjectCard;