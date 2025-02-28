import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Title } from '../Title/Title'
import { monthData } from '../Constants'
import { motion } from 'framer-motion'

export const CustomBarChart = ({variants}) => {
    return (
        < motion.div
         variants={variants}
        className='h-[450px] w-full rounded-xl bg-white p-5 pb-20 dark:bg-slate-600 dark:text-slate-300 xl:flex-1'>
            <Title >Sales and Revenue</Title>
            <ResponsiveContainer>
                <BarChart data={monthData}> 
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="sales" fill='#14b8a6'/>
                    <Bar dataKey="revenue" fill='#0f766e'/>
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    )
}
