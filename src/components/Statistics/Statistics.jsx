import React from 'react';
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const Statistics = () => {

    const data = [
        { name: "Assignment 1", value: 47 },
        { name: "Assignment 2", value: 0 },
        { name: "Assignment 3", value: 42 },
        { name: "Assignment 4", value: 0 },
        { name: "Assignment 5", value: 42 },
        { name: "Assignment 6", value: 40 },
        { name: "Assignment 7", value: 27 },
        { name: "Assignment 8", value: 24 }
    ]

    return (
        <div className='m-28'>

            <h1 className='bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-bold text-center'>Here is the Seven Assignment Mark Representation</h1>
            <hr className='mt-10 mb-10' />

            <div className='justify-center'>
                <PieChart width={1500} height={500}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        
                        outerRadius={80}
                        fill='#8884d8'
                        label
                    ></Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>

        </div>
    );
};

export default Statistics;