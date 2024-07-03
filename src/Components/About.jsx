import { Fade } from "react-awesome-reveal";
import image from "../../public/istockphoto-635978124-612x612.jpg";
const About = () => {
    return (
        <div className="pb-4 max-w-screen-xl mx-auto h-full px-4 md:flex-row">

            <Fade delay={1e3} cascade damping={1e-1}>
                <h2 className="lg:my-10 my-20 text-center text-4xl">About Me
                </h2>
            </Fade>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-4">
                    <div className="flex justify-center items-center">
                        <img className="rounded-lg" src={image} alt="about" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:items-start text-justify">
                        <p className="my-2 max-w-xl py-6">
                            I am Kazi Istiaq Mahamud, a highly motivated MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a deep passion for web development. With one year of experience in the field, I have honed my skills and expertise to deliver outstanding results. I am committed to creating robust and scalable applications while ensuring exceptional user experiences.As a MERN stack developer, I possess a comprehensive understanding of each component of the stack. I am proficient in MongoDB, a NoSQL database, which allows me to design efficient and flexible data structures for web applications. Additionally, I am skilled in using Express.js to develop scalable server-side applications and RESTful APIs, ensuring smooth communication between the front-end and back-end.In terms of front-end development, I am proficient in React.js, a popular JavaScript library for building dynamic user interfaces. Leveraging React.js, I create interactive and responsive UI components that deliver seamless user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;