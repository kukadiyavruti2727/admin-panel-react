import React from 'react'
import { motion } from 'framer-motion'
import { cardItems } from '../../Constants'
import { CardItem } from './CardItem'
import containerVaiants from '../Main/MainContent'
import itemVariants from '../Main/MainContent'

export const Cards = () => {
  return (
    <motion.div className='translate-all flex flex-wrap gap-3 p-4 duration-300 sm:px-7'
        variants={containerVaiants}
        initial="hidden"
        animate="show"
    >
        {
            cardItems.map((item,index)=>(
                <CardItem item={item} key={index} variants={itemVariants}/>
            ))
        }
    </motion.div>
  )
}
