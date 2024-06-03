import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const retrievedProjects = async ({ queryKey }) => {
      const response = await axios.get(`https://portfolio-new-server-phi.vercel.app/${queryKey[0]}/${queryKey[1]}`);
      return response.data.response
}

const ProjectDetails = () => {
      const { id } = useParams()

      const { data: project, isLoading, error } = useQuery({
            queryKey: ["projects", id],
            queryFn: retrievedProjects
      })

      if (isLoading) {
            return <Loader></Loader>
      }

      if (error) {
            return <span>Error: {error.message}</span>
      }


      return (
            <div className="w-full h-full max-w-7xl mx-auto px-10 lg:px-0">
                  <section className='mt-10'>
                        <div>
                              <img
                                    className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                                    src={project?.image}
                                    alt=""
                              />
                        </div>

                        <div className="grid lg:grid-cols-12 py-12 gap-8">
                              <div className="col-span-2 hidden lg:block">
                                    <img src={project?.image} alt="" />
                              </div>
                              <div className="col-span-8">
                                    <h2 className="font-bold text-slate-800 text-2xl">
                                          {project?.title}
                                    </h2>
                                    <p className="my-2 text-slate-800 italic">
                                          {project?.description}
                                    </p>
                                    <ul className="text-slate-800 space-x-4 my-8">
                                          <a
                                                href={project.client}
                                                target="_blank" rel="noreferrer"
                                                className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                          >
                                                GitHub Client
                                          </a>
                                          <a
                                                href={project.server}
                                                target="_blank" rel="noreferrer"
                                                className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                          >
                                                GitHub Server
                                          </a>
                                          <a
                                                href={project.liveLink}
                                                target="_blank" rel="noreferrer"
                                                className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                          >
                                                Live Demo
                                          </a>
                                    </ul>
                              </div>

                        </div>
                  </section>
            </div>

      );
};

export default ProjectDetails;