import React from 'react';
import { Fade } from "react-awesome-reveal";
import image from "../../public/1658740130.jpg";
const Education = () => {
      return (
            <section className="py-12 max-w-screen-xl mx-auto px-4 flex flex-col justify-center h-full w-full">
                  <Fade className="text-4xl text-slate-600 font-bold inline border-zinc-500 text-center" delay={1e3} cascade damping={1e-1}>
                        Education
                  </Fade>
                  <div className="max-w-full mx-auto mt-10">
                        <div
                              className="bg-gradient-to-r from-[#c4cfde] shadow-xl rounded-lg p-6 mb-6 grid lg:grid-cols-3 gap-5">
                              <div className='flex justify-center items-center'>
                                    <img src={image} className="lg:w-96 w-full object-cover transform transition duration-500 hover:scale-105 rounded-xl" />
                              </div>
                              <div className='lg:col-span-2'>
                                    <p className='bg-[#f9004d] w-32 text-center text-slate-200 p-2 rounded-2xl'>2016-2021</p>
                                    <h2 className='text-3xl py-3 font-semibold'>
                                          BSc in Computer Science
                                    </h2>
                                    <h3 className='text-xl text-[#3c3e41] font-thin'>
                                          International University of Business Agriculture and Technology
                                    </h3>
                                    <p className='py-4 text-lg'>4 Embankment Drive Road,Sector-10, Uttara Model Town, Dhaka-1230.</p>

                              </div>
                        </div>

                  </div>

                  <div>

                  </div>
            </section>
      );
};

export default Education;