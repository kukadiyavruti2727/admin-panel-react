import React from 'react'
import Title from '../Title/Title'
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { chartData01, chartData02 } from '../Constants';
import { motion } from 'framer-motion'


export const CustomPieCharts = ({variants}) => {
    return (
        <motion.div variants={variants} className='h-96 rounded-xl bg-white p-5 dark:bg-slate-600 dark:text-slate-300 sm:h-[450px] xl:w-[400px]'>

            <Title>Sales by Category</Title>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={chartData01}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill='#8884d8'
                        nameKey="name"
                        label />
                    <Pie data={chartData02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        fill='#82ca9d'
                        nameKey="name"
                        label />
                </PieChart>
            </ResponsiveContainer>

        </motion.div>
    )
}
export default CustomPieCharts;
