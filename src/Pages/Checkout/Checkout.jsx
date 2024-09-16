import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div className='md:w-1/2 mx-auto'>
            <h2 className='text-center text-4xl font-bold my-6'>
            Welcome To CheckOut
            </h2>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Checkout;