import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Seedetails = () => {

    const fromData = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl text-center font-bold p-10'>Job Details</h1>
            <div className='p-10'>{fromData.map(job => (

                <div>
                    <div>
                        {job.title}
                    </div>
                    <div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Seedetails;