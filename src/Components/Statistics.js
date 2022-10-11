import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    let data = useLoaderData();
    data = data.data;
    console.log(data);
    return (
        <div className='grid  md:grid-cols-2 w-10/12 md:w-full lg:w-10/12 md:px-5 mx-auto mt-12 gap-6 mb-12'>
            <div className='text-center  border-2 rounded-lg py-6'>
                <h1 className='text-xl font-semibold text-[#601c7b] mb-2'>AreaChart</h1>
                <ResponsiveContainer width='90%' height={300}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#601c7b" stopOpacity={0.8} />
                                <stop offset="90%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="5 5" />
                        <Tooltip />
                        <Area type="monotone" dataKey="total" name='Question' className='cursor-pointer' stroke="#601c7b" fillOpacity={1} strokeWidth={3} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='text-center  border-2 rounded-lg py-6'>
                <h1 className='text-xl font-semibold text-[#601c7b] mb-2'>BarChart</h1>
                <ResponsiveContainer width='90%' height={300}>
                    <BarChart data={data}>
                        <defs>

                        </defs>
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" name='Question' className='cursor-pointer' fill="#601c7b" fillOpacity='70%' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='text-center  border-2 rounded-lg py-6'>

                <h1 className='text-xl font-semibold text-[#601c7b] mb-2'>PieChart</h1>
                <ResponsiveContainer width='90%' height={200}>
                    <PieChart >
                        <Pie
                            dataKey="total" isAnimationActive={false} data={data} cx="50%" cy="50%" outerRadius={80}
                            fill="#601c7b" fillOpacity='70%' name='question' label />
                        <Tooltip />
                        <Legend iconSize={10} iconType={Area} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='text-center  border-2 rounded-lg py-6'>

                <h1 className='text-xl font-semibold text-[#601c7b] mb-2'>RadarChart</h1>
                <ResponsiveContainer width='90%' height={200}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={45} domain={[0, 15]} />
                        <Radar name="Mike" dataKey="total" stroke="#601c7b" fill="#601c7b" fillOpacity={0.6} />
                        <Legend iconSize={10} iconType={Area} width={120} height={140} layout='horizontal' verticalAlign='middle' align="right" />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;