import React from 'react';
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const Statistics = () => {

    const data = [
        { name: "Assignment 1", value: 40 },
        { name: "Assignment 2", value: 0 },
        { name: "Assignment 3", value: 26 },
        { name: "Assignment 4", value: 15 },
        { name: "Assignment 5", value: 22 },
        { name: "Assignment 6", value: 12 },
        { name: "Assignment 7", value: 27 },
        { name: "Assignment 8", value: 16 }
    ]

    return (
        <div className='m-58'>

            <h1 className='bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent text-5xl font-bold text-center'>8 Ass Mark Representation</h1>
            <hr className='mt-10 mb-10' />

            <div className='justify-center'>
                <PieChart width={1600} height={800}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        
                        outerRadius={200}
                        fill='#9e0404'
                        label
                    ></Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>

        </div>
    );
};

export default Statistics;