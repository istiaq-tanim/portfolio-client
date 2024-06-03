import { Fade } from "react-awesome-reveal";
const About = () => {
    return (
        <div name="about" className="w-full mb-32">
            <div className="max-w-screen-lg mx-auto px-4 flex justify-center flex-col w-full h-full">
                <div className="pb-8">
                    <Fade className="text-4xl text-slate-600 font-bold inline mt-20 border-b-4 border-zinc-500 text-center" delay={1e3} cascade damping={1e-1}>
                        About
                    </Fade>
                </div>
                <div>
                    <p className="text-lg pb-8 text-justify">I am Kazi Istiaq Mahamud, a highly motivated MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a deep passion for web development. With one year of experience in the field, I have honed my skills and expertise to deliver outstanding results. I am committed to creating robust and scalable applications while ensuring exceptional user experiences.As a MERN stack developer, I possess a comprehensive understanding of each component of the stack. I am proficient in MongoDB, a NoSQL database, which allows me to design efficient and flexible data structures for web applications. Additionally, I am skilled in using Express.js to develop scalable server-side applications and RESTful APIs, ensuring smooth communication between the front-end and back-end.In terms of front-end development, I am proficient in React.js, a popular JavaScript library for building dynamic user interfaces. Leveraging React.js, I create interactive and responsive UI components that deliver seamless user experiences.


                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;