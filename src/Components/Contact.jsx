import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_whxkckq', 'template_nxrilju', form.current, 'nWtVM74K3OCfRRuGL')
            .then((result) => {
                if (result.status) {
                    Swal.fire({

                        position: 'top-end',
                        icon: 'success',
                        title: 'Email Sent Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    if (form.current) {
                        form.current.reset();
                    }
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section name="contact" className="py-32 lg:py-6 px-3 text-white w-full h-screen">
            <div className="text-center mt-8">
                <Fade className="text-4xl text-slate-600 font-bold inline border-b-4 border-zinc-500 text-center" delay={1e3} cascade damping={1e-1}>
                    Contact Me
                </Fade>

                <p className="text-gray-700 mt-3 text-lg">Contact with Us</p>

                <div
                    className="mt-10 flex md:flex-row flex-col
                                             gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
                >
                    <form onSubmit={sendEmail} ref={form} className="flex flex-col flex-1 gap-5">
                        <input type="text" name="from_name" placeholder="Your Name" className="px-2 py-3 text-black" />
                        <input type="Email" name="email" className="px-2 py-3 text-black"
                            placeholder="Your Email Address" />
                        <textarea placeholder="Your Message" name="message" className="px-2 py-1 text-black" rows={10}></textarea>
                        <input type="submit" className="flex group justify-center items-center mx-auto w-fit my-2 py-3 px-6 rounded-md bg-gradient-to-r from-sky-400 to-cyan-800 cursor-pointer" value="Let's Talk" />
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact
