import React from 'react';
import animation1 from '../../../public/Animation - 1725218825752.json'
import animation2 from '../../../public/Animation - 1725219010664.json'
import animation3 from '../../../public/Animation - 1725219096406.json'
import animation4 from '../../../public/Animation - 1725219173993.json'
import animation5 from '../../../public/Animation - 1725219257298.json'
import Lottie from 'lottie-react';
const Service = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center my-16'>
                <h2 className='text-4xl font-bold mb-2'>Our <span className='text-[#615EFC]'> Services</span></h2>
                <p>Explore new tastes, enjoy limited-time offerings and savor the exceptional.</p>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-2 items-center my-8 lg:gap-24 gap-8'>
                <div className='text-center mx-auto shadow-xl p-2 rounded-xl'>
                    <Lottie className='w-40 h-36' animationData={animation1} loop={true}></Lottie>
                    <h2 className='text-xl mb-2 font-semibold'>Air condition</h2>
                </div>
                <div className='text-center mx-auto shadow-xl p-2 rounded-xl'>
                    <Lottie className='w-40 h-36' animationData={animation2} loop={true}></Lottie>
                    <h2 className='text-xl mb-2 font-semibold'>Free Wifi</h2>
                </div>
                <div className='text-center mx-auto shadow-xl p-2 rounded-xl'>
                    <Lottie className='w-40 h-36' animationData={animation3} loop={true}></Lottie>
                    <h2 className='text-xl mb-2 font-semibold'>Discount Price</h2>
                </div>
                <div className='text-center mx-auto shadow-xl p-2 rounded-xl'>
                    <Lottie className='w-40 h-36' animationData={animation4} loop={true}></Lottie>
                    <h2 className='text-xl mb-2 font-semibold'>Good Serve</h2>
                </div>
                <div className='text-center mx-auto shadow-xl p-2 rounded-xl'>
                    <Lottie className='w-40 h-36' animationData={animation5} loop={true}></Lottie>
                    <h2 className='text-xl mb-2 font-semibold'>Online Order</h2>
                </div>
            </div>
        </div>
    );
};

export default Service;