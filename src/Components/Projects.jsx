import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";
import Loader from "./Loader";
import ProjectCard from "./ProjectCard";


const retrievedProjects = async () => {
    const response = await axios.get("https://portfolio-server-puce-three.vercel.app/projects");
    return response.data.response
}

const Projects = () => {

    const { data: projects, isLoading, error } = useQuery({
        queryKey: "projects",
        queryFn: retrievedProjects
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    if (error) {
        return <span>Error: {error.message}</span>
    }


    return (
        <div name="projects" className="w-full mb-32">
            <div className="text-center">
                <h3 className="text-4xl font-semibold inline border-b-4 text-slate-600 border-zinc-500 text-center">
                    <Fade className="text-4xl text-slate-600 font-bold inline border-b-4 border-zinc-500 text-center" delay={1e3} cascade damping={1e-1}>
                        My Projects
                    </Fade>

                </h3>

            </div>
            <br />

            <div className="grid lg:grid-cols-3 max-w-6xl gap-10 px-5 mx-auto items-center mt-10 relative">
                {projects.map((project) => (
                    <ProjectCard key={project} project={project}></ProjectCard>

                ))}

            </div>

        </div>
    );
};

export default Projects;