import React, { useContext, useState } from 'react';
import img from '../../../public/pizza.jpg'
import { FaCcMastercard, FaCcPaypal, FaCreditCard, FaGooglePay, FaLock, FaPaypal } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import useCart from '../../component/Hook/useCart';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxios, { AxiosSource } from '../../component/Axios/useAxios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
const Order = () => {
    // const [cart] = useCart()
    const { user } = useContext(AuthContext)
    // const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    // const [value, setValue] = useState('');

    // const handleChange = (e) => {
    //     // Get the new value
    //     const newValue = e.target.value;

    //     // Only allow digits and limit length to 4
    //     if (/^\d{0,4}$/.test(newValue)) {
    //         setValue(newValue);
    //     }
    // };

    // const [cardValue, setCardValue] = useState('');

    // const formatCardNumber = (number) => {
    //   // Remove non-digit characters and format with spaces every 4 digits
    //   return number
    //     .replace(/\D/g, '') // Remove all non-digit characters
    //     .replace(/(\d{4})(?=\d)/g, '$1 '); // Add space every 4 digits
    // };

    // const handleCardChange = (e) => {
    //   const rawValue = e.target.value;
    //   setCardValue(formatCardNumber(rawValue));
    // };
    // console.log(value,cardValue)

    const navigate = useNavigate()
    const axiosLink = useAxios(AxiosSource);
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const country = form.country.value;
        const delivery = form.delivery.value;
        const postcode = parseInt(form.postcode.value);
        const street = form.street.value;
        const phone = form.phone.value;
        const city = form.city.value;
        const userEmail = user?.email;

        const newAddress = { name, email, phone, country, delivery, postcode, street, city, userEmail }

        axiosLink.post("/orderAddress", newAddress)
            .then((res) => {
                console.log(res);
                if (res.data.insertedId) {
                    navigate("/order/payment")
                    // refetch()
                    Swal.fire({
                        title: "Good job!",
                        text: `Address Added Successfully`,
                        icon: "success",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(newAddress)
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="relative mb-8">
                <img className="w-full h-48 bg-[#0000008c] object-cover" src={img} alt="" />
                <div className="absolute inset-0 text-white bg-black opacity-80">
                    <div className="text-center mt-16 items-center">
                        <h2 className="text-4xl tracking-widest mb-4 font-bold">Express Order</h2>
                    </div>
                </div>
            </div>
            <div className='flex bg-gray-200 justify-center py-8 mb-8 items-center gap-16'>
                <FaCcPaypal className='text-5xl text-[#615EFC]' />
                <FaGooglePay className='text-[#615EFC] text-5xl' />
                <FaCreditCard className=' text-[#615EFC] text-5xl' />
                <FaCcMastercard className=' text-[#615EFC] text-5xl' />
            </div>

            <div className=' gap-4'>
                <div className='md:w-1/2 mx-auto'>
                    <h1 className='text-2xl ml-4 font-semibold uppercase text-[#615EFC]'>Delivery Address</h1>
                    <p className='ml-4'>All fields are required *</p>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name *</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address *</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number *</span>
                            </label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone number"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country *</span>
                            </label>
                            <input
                                type="text"
                                name="country"
                                placeholder="country name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery Address *</span>
                            </label>
                            <input
                                type="text"
                                name="delivery"
                                placeholder="delivery address"
                                className="input input-bordered"
                                required
                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Street Address *</span>
                            </label>
                            <input
                                type="text"
                                name="street"
                                placeholder="street address"
                                className="input input-bordered"
                                required
                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Town/City *</span>
                            </label>
                            <input
                                type="text"
                                name="city"
                                placeholder="town/city"
                                className="input input-bordered"
                                required
                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Postcode/Zipcode *</span>
                            </label>
                            <input
                                type="text"
                                name="postcode"
                                placeholder="postcode"
                                className="input input-bordered"
                                required
                            />

                        </div>
                            <input className='w-full p-2 my-4  bg-[#615EFC] font-semibold text-white' type="submit" value="Continue" />

                    </form>
                </div>
                {/* <div>
                    <div className='flex gap-36 mb-2 items-center'>
                        <h2 className='text-2xl ml-4 font-semibold uppercase text-[#615EFC]'>2. Select payment method</h2>
                        <FaLock className='text-end text-[#615EFC]' />
                    </div>
                    <div className='w-11/12 mx-auto p-4 bg-gray-200'>

                        <div className="collapse border-2 border-[#615EFC] collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium"><FaCreditCard className='text-2xl' /></div>
                            <div className="collapse-content">
                                <form action="">
                                    <div className='mb-2'>
                                        <label className='font-semibold' htmlFor="cardNUmber">Card Number :</label><br />
                                        <input className='border-2 w-full border-[#615EFC] p-2' maxLength="19" value={cardValue}
                                            onChange={handleCardChange} type="text" name="cardnumber" id="" required placeholder='card number' />
                                    </div>
                                    <div>
                                        <label className='font-semibold' htmlFor="cardNUmber">Expiration Date :</label><br />

                                        <div className='flex items-center gap-4'>
                                            <input className='border-2 w-1/2 border-[#615EFC] p-2' min="1"
                                                max="12"
                                                step="1" type="number" name="cardnumber" id="" placeholder='MM' required />
                                            <span> / </span>
                                            <input className='border-2 w-1/2 border-[#615EFC] p-2'
                                                type="text" name="cardnumber" onChange={handleChange} value={value} required id="" maxLength="4" placeholder='YY' />

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="collapse border-2 border-[#615EFC] collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium"><FaPaypal className='text-2xl' /></div>
                            <div className="collapse-content">
                                <p>Sorry !! This payment method not included</p>
                            </div>
                        </div>
                        <div className="collapse border-2 border-[#615EFC] collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium"><FaGooglePay className='text-2xl' /></div>
                            <div className="collapse-content">
                                <p>Sorry !! This payment method not included</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-2xl ml-4 mb-8 font-semibold uppercase text-[#615EFC]'>2. order summary</h2>
                        <div className='w-11/12 mx-auto bg-gray-200 p-4'>
                            {
                                cart.map((item, idx) =>
                                    <div key={idx}>
                                        <div className='flex justify-between'>
                                            <h2 className='mb-2'><span className='text-xl font-bold'> {idx + 1}. </span><span className='text-xl capitalize font-semibold'>{item.menu} </span>/ <span className='text-[#615EFC] font-semibold'></span> {item.name}-Qnt-{item.quantity}</h2>
                                            <h2 className='font-semibold'>Price: $ {item.quantity * item.price}</h2>
                                        </div>
                                        <div>
                                        </div>
                                    </div>

                                )
                            }
                            <div className="divider divider-primary"></div>
                            <div className='flex justify-between'>
                                <h2 className='text-2xl font-semibold'>Total Price :</h2>
                                <h2 className='text-2xl font-semibold'>${totalPrice}</h2>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input className='' type="checkbox" name="" id="" required />
                                <h2>Accept all for order</h2>
                            </div>

                            

                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Order;