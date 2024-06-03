import React from 'react';
import { Fade } from "react-awesome-reveal";
const Education = () => {
      const educationData = [
            {
                  institution: 'International University of Business Agriculture and Technology',
                  degree: 'BSC',
                  fieldOfStudy: 'Computer Science',
                  startDate: '1st May, 2016',
                  endDate: '1st October,2020',
            },

      ];

      return (
            <section className="py-12 px-4">
                  <Fade className="text-4xl text-slate-600 inline text-center font-bold mt-10 border-b-4 border-zinc-500" delay={1e3} cascade damping={1e-1}>
                        <h3 className='text-center'>Education</h3>
                  </Fade>

                  <div className="max-w-4xl mx-auto mt-5">
                        {educationData.map((edu, index) => (
                              <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-6 mb-6 transform transition duration-500 hover:scale-105 hover:bg-blue-50"
                              >
                                    <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                                    <p className="text-gray-700"><strong>Degree:</strong> {edu.degree}</p>
                                    <p className="text-gray-700"><strong>Field of Study:</strong> {edu.fieldOfStudy}</p>
                                    <p className="text-gray-700"><strong>Duration:</strong> {edu.startDate} - {edu.endDate}</p>
                                    <p className="text-gray-700 mt-2">{edu.description}</p>
                              </div>
                        ))}
                  </div>
            </section>
      );
};

export default Education;