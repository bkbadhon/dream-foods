import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxios, { AxiosSource } from '../../component/Axios/useAxios';
import useCart from '../../component/Hook/useCart';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const CheckoutForm = () => {
    const [error,setError] =useState('')
    const {user} = useContext(AuthContext)
    const [clientSecret, setClientSecret]=useState('')
    const stripe = useStripe();
    const elements = useElements()
    const axiosLink = useAxios(AxiosSource)
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    useEffect(() => {
        if(totalPrice > 0){
          axiosLink.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
            setClientSecret(res.data.clientSecret)
        })
        }
            
        
    }, [axiosLink,totalPrice]);
   const handleSubmit =async(event)=>{
    event.preventDefault()
    if(!stripe || !elements){
        return
    }
    const card = elements.getElement(CardElement)
    if(card === null){
        return
    }
    const {error, paymentMethod} =await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        setError(error.message)
        console.log('error', error)
    }
    else{
        console.log('payment method',paymentMethod)
        setError('')
    }

    const {paymentIntent, error:confirmError}= await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card : card,
        billing_details:{
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous"
        }
      }
    })
    if(confirmError){
      console.log('comfirmError')
    }
    else{
      console.log('paymentIntent', paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        Swal.fire("Payment Successfull");

      }
      const payment ={
        email : user.email,
        price: totalPrice,
        date : new Date(),
        cartId : cart.map(item => item._id),
        menuID : cart.map(item => item.menuId),
        status : "pending",
        transactionId : paymentIntent.id
      }
      const res = await axiosLink.post('/payments', payment)
      console.log(res.data)
      refetch()
    }
   }
    return (
       <form className='my-4' onSubmit={handleSubmit}>
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn-sm my-4 rounded-xl p-1 px-4 text-white bg-[#615EFC]' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-400'>{error}</p>

       </form>
    );
};

export default CheckoutForm;