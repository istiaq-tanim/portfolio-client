import { useQuery } from '@tanstack/react-query';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Loader from './Loader';

const retrievedSkills = async () => {
    const response = await axios.get("https://portfolio-server-puce-three.vercel.app/skills")
    return response.data.response
}

const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }, [])

    const { data: skills, isLoading, error } = useQuery({
        queryKey: "skills",
        queryFn: retrievedSkills
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    if (error) {
        return <span>Error: {error.message}</span>
    }
    return (
        <div name="skills" className="w-full">
            <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full w-full text-center">
                <div>

                    <Fade className="text-4xl text-slate-600 font-bold inline border-b-4 border-zinc-500 text-center" delay={1e3} cascade damping={1e-1}>
                        My Skills
                    </Fade>
                    <p className="py-5">
                        These are the Technology I have worked with</p>
                </div>

                <div className="grid grid-cols-2 w-full sm:grid-cols-3 gap-8 text-center py-6 px-8 sm:px-0">
                    {
                        skills.map(({ _id, image, title, style }) =>
                            <div key={_id} data-aos="flip-right" className={`shadow-xl hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                                <img className="w-20 mx-auto" src={image} alt="" />
                                <p className="mt-4">{title}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;