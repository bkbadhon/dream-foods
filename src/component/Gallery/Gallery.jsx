import React from 'react';
import biryani from '../../../public/Biryani.jpg'
import drink from '../../../public/drink.jpg'
import pizza1 from '../../../public/pizza2.jpg'
import roast from '../../../public/Roast.jpg'
import salad from '../../../public/salad1.jpg'
import pizza from '../../../public/pizza.jpg'

const Gallery = () => {
    return (
        <div className='w-11/12 my-8 mx-auto'>
            <h2 className='text-center text-4xl mb-2 font-bold'>Our Food <span className='text-[#615EFC]'>Gallery </span></h2>
            <p className='text-center mb-8'>Explore new tastes, enjoy limited-time offerings and savor the exceptional.</p>

            <div className='grid md:grid-cols-4 gap-8'>

            <div className='col-span-2'><img className='lg:h-80 md:h-60  rounded-2xl w-full object-cover' src={biryani} alt="" /></div>
            <div ><img className='lg:h-80 md:h-60 h-24 object-cover rounded-2xl w-full' src={pizza} alt="" /></div>
            <div> <img className='lg:h-80 md:h-60 h-24 object-cover rounded-2xl w-full' src={salad} alt="" /></div>
            <div><img className='lg:h-80 md:h-60 h-24 object-cover rounded-2xl w-full' src={drink} alt="" /></div>
            <div><img className='lg:h-80 md:h-60 h-24 object-cover rounded-2xl w-full' src={roast} alt="" /></div>
            <div className='col-span-2'><img className='lg:h-80 md:h-60 rounded-2xl w-full object-cover' src={pizza1} alt="" /></div>
            

            </div>
        </div>
    );
};

export default Gallery;