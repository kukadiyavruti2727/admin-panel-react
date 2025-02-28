import React from 'react'
import Title from '../../Title/Title'
import { recentActivities } from '../../Constants'
import {motion} from 'framer-motion'


export const Activity = ({variants}) => {
  return (
    <motion.div 
     variants={variants}
    className='rounded-xl bg-white p-5 dark:bg-slate-600 dark:text-slate-300 xl:w-[400px]'>
        <Title>Recent Activities</Title>

        <ul>
            {
                recentActivities.map((activity)=>(
                    <li key={activity.id} className='flex items-center gap-4'>
                        <img src={activity.img} alt={activity.name}  className='h-10 w-10 rounded-full border-2 border-teal-600'/>
                        <div className='m-2'>
                            <h3 className='font-medium'>{activity.name}</h3>
                            <p className='text-sm text-slate-400'>{activity.activity}</p>
                        </div>
                    </li>
                ))
            }
        </ul>

    </motion.div>
  )
}
