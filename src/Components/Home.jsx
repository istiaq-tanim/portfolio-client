import { useEffect } from "react";
import resume from "../../public/resume.pdf";
import image from "../../src/assets/istiaq.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from "react-awesome-reveal";
const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);


    return (
        <div name="home" className="w-full h-[420px]">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center space-around h-full px-4 md:flex-row">
                <div data-aos="fade-down" className="flex mt-20 sm:overflow-x-hidden flex-col justify-center items-center h-full basis-1/2">

                    <h3 className="font-bold text-xl"> I am <Fade className="text-[#f9004d]" delay={1e3} cascade damping={1e-1}>
                        MERN Stack Developer
                    </Fade> </h3>


                    <p className="my-5 max-w-md text-center">I am Kazi Istiaq Mahamud,I have One Year experience,
                        Now I am working on web Application using technologies like REACT,Tailwind,Node,Express,MongoDb</p>
                    <div>
                        <button className="flex group justify-center items-center text-[#fff] w-fit my-2 py-3 px-6 rounded-md bg-gradient-to-r from-[#f1477d] to-[#f9004d] cursor-pointer">
                            <a href={resume} download>Download Resume</a>
                        </button>
                    </div>

                </div>
                <div data-aos="fade-up" className="basis-1/2 sm:overflow-x-hidden my-5">
                    <img src={image} className="w-3/4 mx-auto rounded-2xl" alt="my-image" />
                </div>
            </div>
        </div>
    );
};

export default Home;