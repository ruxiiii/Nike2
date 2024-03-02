import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center gap-5 flex-col'>
      <img src = {imgURL} alt='Profile Picture' width = {100} height = {100} className='rounded-full object-cover '/>
      <p className='font-montserrat text-slate-gray leading-normal'>{feedback}</p>
      <div className='flex gap-2'>
        <img src= {star} width = {24} height={24} className='object-contain'/>
        <p>({rating})</p>
      </div>
      <h3 className='font-bold font-palanquin text-xl'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
