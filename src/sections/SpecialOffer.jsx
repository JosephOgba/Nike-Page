import React from 'react'
import Button from '../components/button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687} 
        className='object-contain w-full'/>
      </div>

        <div className='flex flex-1 flex-col'>
     
     <h2 className='font-palanquin text-4xl capitalize 
     font-bold lg:max-w-lg'> 
      Special  
       <span className='text-coral-red '> Offer</span> 
     </h2>
     <p className='mt-4 lg:max-w-lg info-text'>Embarking ona shopping that redifines your esperiences with unbeatable deals. From premier selections to incredible savings, we offer unparelleled value that sets us apart </p>
     <p className='mt-6 lg:max-w-lg info-text'> 
       Navigating a realm of possibilities designed to fulfill your unique desire , surpassing the loftiest expectings. Your jouney with us is nothing short of exeptional.
     </p>
     <div className='mt-11 flex flex-wrap gap-4'><Button label="Shop now" iconURL={arrowRight}/></div>
     </div>
    </section>
  )
}

export default SpecialOffer