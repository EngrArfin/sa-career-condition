import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import { CurrencyDollarIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Home = () => {


    const fromData = useLoaderData();

    return (
        <div className='section-oneStep '>

            <div className='flex items-center bg-slate-300'>

                <div>
                    <div className='ms-60 title w-70' >
                        <h1 className='text-6xl font-bold'>One Step <br />
                            Closer To Your <br />
                            <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black'>Dream Job</span>
                        </h1>
                        <p className='mt-5 mb-6'>Explore thousands of job opportunities with all the information you need. Manage all your job application from start to finish. </p>

                    </div>
                    <button type="button" class="ms-60 text-white font-medium rounded-md text-sm bg-gradient-to-r from-indigo-500 to-pink-500 mb-6">Get Stated</button>
                </div>

                <div className='ms-72'>

                    <img className='image-men' src="https://i.ibb.co/bbRSLsP/P3-OLGJ1-copy-1.png" alt="P3-OLGJ1-copy-1" border="0"></img>
                </div>


            </div>

            <div className='my-container text-center'>
                <h1 className='text-4xl font-bold mb-5'>Job Category List</h1>

                <p>Explore you favorite work from our list. It is the future of yours.</p>
            </div>

            <div>
                <div className='job-container justify-center'>{fromData.map(job => (

                    <div className='cursor-pointer border p-5 bg-emerald-600 rounded-xl justify-center w-50 h-50 text-slate-300   bg-gradient-to-t from-purple-400 to-purple-700'>
                        <img className='w-20 h-20 justify-center p-2 bg-purple-400 rounded-md' src={job.catListPicture} alt="" />
                        <h1 className='mt-5 font-semibold text-slate-900' key={job.jobId}>{job.catListName}</h1>
                        <p className='text-xs'>{job.catListJobVacancy} Jobs Available</p>
                    </div>
                ))}
                </div>
            </div>

            <div className='text-center mt-20'>
                <h1 className='text-5xl font-bold mb-5'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='job-container justify-center mt-20'>{fromData.map(job => (

                <div className='border bg-gray-100 p-5 opacity-100 rounded-xl justify-center w-50 h-50 text-black'>

                    <img className='w-40 h-10' src={job.logo} alt="" />

                    <h1 className='font-bold mt-4 mb-4'>{job.title}</h1>

                    <p>{job.type}</p>

                    <div className='flex gap-10 mt-8'>
                        <button className='p-2 text-xs w-20 h-10 mb-6'>{job.officeType}
                        </button>

                        <button className='p-2 text-xs w-24 h-10 mb-6'>{job.officeType2}
                        </button>
                    </div>

                    <div className='flex text-xs justify-between items-center'>
                        <div className='flex'>
                            <MapPinIcon className='w-4'></MapPinIcon>
                            <p>{job.location}</p>
                        </div>
                        <div className='flex'>
                            <CurrencyDollarIcon className='w-4'></CurrencyDollarIcon>
                            <p>{job.salary}</p>
                        </div>
                    </div>
                    <button className='mt-5 text-white hover:bg-purple-800 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'><Link to="/seeDetails">See Details</Link></button>
                </div>
            ))}
            </div>

            <div className='text-center mt-10 mb-6'>
                <button className='mb-6 text-white focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:hover:bg-purple-700 dark:focus:ring-purple-900  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Home;