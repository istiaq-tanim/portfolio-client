import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const SocialLinks = () => {
    const links =
        [
            {
                id: 1,
                child:
                    (
                        <>
                            Linkedin <FaLinkedin size={25}></FaLinkedin>
                        </>
                    ),
                href: "https://www.linkedin.com/in/kazi-istiaq-mahmud-2370981a5/",
                style: "rounded-tr-md"
            },
            {
                id: 2,
                child:
                    (
                        <>
                            Github <FaGithub size={25}></FaGithub>
                        </>
                    ),
                href: "https://github.com/istiaq-tanim",

            },
            {
                id: 4,
                child:
                    (
                        <>
                            Resume <BsPersonLinesFill size={25}></BsPersonLinesFill>
                        </>
                    ),

                href: "/resume.pdf",
                style: "rounded-br-md",
                download: true
            }
        ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map(({ id, style, href, download, child }) => (
                        <li key={id} className={`flex justify-between items-center w-40 h-10 px-4 bg-[#4d9ee4] ml-[-115px] hover:ml-[-10px] hover:rounded-md duration-500 , ${style}`}>
                            <a href={href} className="flex justify-between items-center w-full text-white gap-2"
                                download={download} target="_blank" rel="noreferrer"
                            >
                                {child}

                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default SocialLinks;