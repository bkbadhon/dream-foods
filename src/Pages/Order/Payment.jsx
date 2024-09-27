import React, { useContext, useState } from 'react';
import useAxios, { AxiosSource } from '../../component/Axios/useAxios';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../../component/Hook/useCart';
import { Link } from 'react-router-dom';

const Payment = () => {
    const { user } = useContext(AuthContext)
    const [orderAddress, setOrderAddress] = useState([])
    const [cart] = useCart()
    const axiosLink = useAxios(AxiosSource)
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    axiosLink.get('/orderAddress')
        .then(res => {
            const order = res.data.filter(item => item.email == user.email)
            setOrderAddress(order)
        })
        .catch(err => {
            console.log(err)
        })
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-center text-3xl my-4 font-semibold'>Welcome to Checkout Page !</h2>
            <div className='md:flex  gap-6'>
                <div className='my-4 md:w-3/5'>
                    {
                        orderAddress.map((order, idx) =>
                            <div key={order._id}>
                                <div className='md:flex gap-2 my-4'>
                                    <h2 className='text-3xl font-semibold text-[#615EFC]'>{idx + 1}.</h2>
                                    <div className='bg-gray-200 rounded-xl w-full px-8 p-4'>
                                        <h2 className='text-2xl font-semibold'>Order Address:</h2>
                                        <h2>Delivery Address : {order.delivery}, {order.country}</h2>
                                        <h2>Street address :{order.street}, {order.city}, {order.postcode}</h2>
                                        <h2>Contact Info : {order.name}, Phone: {order.phone},<br /> Email: {order.email}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='my-4 md:w-2/5'>
                    <h2 className='text-2xl font-semibold text-center '>Your Orders</h2>
                    <div className='divider divider-primary'></div>
                    <div className='bg-gray-200 rounded-xl my-4 p-4 px-8'>
                        {
                            cart.map((item, idx) =>

                                <div className='flex gap-2 items-center' key={item._id}>
                                    <h2 className='text-2xl font-semibold text-[#615EFC]'>{idx + 1}.</h2>
                                    <div className='flex gap-4 p-2 border-b border-white items-center'>
                                        <img className='md:w-20 w-12 object-cover md:h-20 h-12 rounded-xl' src={item.photo} alt="" />
                                        <h2 className='md:text-xl text-xs font-semibold'>{item.name}</h2>
                                        <p className='font-semibold text-[#615EFC]'>Qnt : {item.quantity}</p>
                                        <h2 className='font-semibold ml-8 md:text-2xl'>${item.price * item.quantity}</h2>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='my-4'>
                        <h2 className='text-center font-semibold text-2xl'>Order Summary</h2>
                        <div className='flex my-2 justify-between'>
                            <h2 className='text-lg font-semibold'>Subtotal :</h2>
                            <h2 className='text-lg font-semibold'>${totalPrice}</h2>
                        </div>
                        <div className='flex my-2 justify-between'>
                            <h2 className='text-lg font-semibold'>Shipping : </h2>
                            <h2 className='text-lg font-semibold'>Free</h2>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='text-2xl font-semibold'>Total : </h2>
                            <h2 className='text-2xl font-semibold'>${totalPrice}</h2>
                        </div>
                    </div>
                    <Link to={'/order/payment/checkout'}>
                    <button className='text-xl font-semibold p-2 hover:bg-[#504ef1] duration-500 uppercase bg-[#615EFC] text-white text-center mx-auto w-full'>Go To Checkout</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Payment;