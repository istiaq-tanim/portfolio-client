import About from "../Components/About";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Home from "../Components/Home";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import SocialLinks from "../Components/SocialLinks";

const HomePage = () => {
      return (
            <div>
                  <Home></Home>
                  <SocialLinks></SocialLinks>
                  <About></About>
                  <Education></Education>
                  <Projects></Projects>
                  <Skills></Skills>
                  <Contact></Contact>
            </div>
      );
};

export default HomePage;