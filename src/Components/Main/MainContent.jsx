import React from 'react'
import {motion} from 'framer-motion'

import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';
import { CustomBarChart } from '../../Charts/CustomBarChart';
import { CustomPieCharts } from '../../Charts/CustomPieCharts';
import { Table } from '../Table/Table';
import { Activity } from '../Activity/Activity';

export const containerVaiants = {
  hidden:{opacity:0 , scale:0.9},
  visible:{
    opacity:1,
    scale:1,
    transition :{
      type:'spring',
      stiffness:80,
      damping:20,
      staggerChildren :0.3,
    }
  }
}

export const itemVariants ={
  hidden:{opacity:0 , y:20},
  visible:{
    opacity:1,
    y:0,

    transition :{
      duration :0.5,
      ease:"easeOut"
    }
  }
}

export const MainContent = ({isOpen ,darkMode,toggleDarkMode}) => {
  return (
    <div className={`flex-1 bg-slate-200 ${isOpen ? 'md:ml-44' : 'ml-16'} transition-all duration-300 dark:bg-slate-800`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        <Cards/>

        <motion.div className='translate-all flex flex-col gap-4 p-4 duration-300 sm:px-7 sm:py-1 xl:flex-row '
        variants={containerVaiants}
        initial="hidden"
        animate="visible"
        >
          <CustomBarChart variants={itemVariants}/>
          <CustomPieCharts variants={itemVariants}/>
        </motion.div>



  {/* table activity */}

        <motion.div className='translate-all flex flex-col gap-4 p-4 duration-300 sm:px-7 sm:py-1 xl:flex-row '
        variants={containerVaiants}
        initial="hidden"
        animate="visible"
        >
           <Table variants={itemVariants}/>
           <Activity variants={itemVariants}/>
        </motion.div>
    </div>
  )
}
export default MainContent;
