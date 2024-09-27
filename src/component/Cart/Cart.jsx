import React, { useState } from 'react';
import useCart from '../Hook/useCart';
import useAxios, { AxiosSource } from '../Axios/useAxios';
import Swal from 'sweetalert2';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total,item)=> total + item.price * item.quantity, 0)

    const axiosLink = useAxios(AxiosSource)

    
    
  
    const hanDelete = id =>{
      Swal.fire({
          title: "Are you sure?",
          text: "Do you want to remove it ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "##615EFC",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, remove it!"
        }).then((result) => {
          if (result.isConfirmed) {
  
              axiosLink.delete(`/cart/${id}`)
              .then(res=>{
  
                  if(res.data.deletedCount > 0){
                      refetch()
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your item has been removed.",
                          icon: "success"
                        });
  
                  }
              }
              )
          }
        });
  
    }
    return (
        <div className="my-4 w-11/12 mx-auto">
      

      <div className="overflow-hidden">
        <table className="md:table w-full table-sm">
          {/* head */}
          <thead className=''>
            <tr className="bg-[#615EFC]  text-white">
              <th className="text-xs md:text-xl ">#</th>
              <th className="text-xs md:text-xl ">Image</th>
              <th className="text-xs md:text-xl ">Quantity</th>
              <th className="text-xs hidden md:block md:text-xl ">Email</th>
              <th className="text-xs md:text-xl ">Price</th>
              <th className="text-xs md:text-xl ">Action</th>
            </tr>
          </thead>

          {cart.map((item, index) => (
            <tr className='' key={item._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center md:gap-3 gap-1">
                  <div className="avatar">
                    <div className="mask mask-squircle md:h-12 md:w-12 h-8 w-8">
                      <img src={item.photo} />
                    </div>
                  </div>
                  <div>
                    <div className="md:font-bold md:text-xl text-xs">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>{item.quantity}</td>
              <td className='hidden md:block'>{item.email}</td>
              <td className='text-semibold'>${item.price * item.quantity}</td>
              <td>
                <button onClick={()=>hanDelete(item._id)} className="btn-sm p-2 text-[#615EFC] text-xs md:text-xl"><RiDeleteBin6Line /></button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="divider divider-primary"></div>
      <div className="text-end">
        
        <div>
          <h2 className=" md:text-2xl mb-4 font-semibold ">
            Total Price : ${totalPrice}
          </h2>
        </div>
        <div>
          <Link to={'/order'}>
            <button className="md:text-lg p-1 rounded-xl px-2 md:px-4 bg-[#615EFC] duration-700 hover:bg-[#4744ee] text-white">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      
    </div>
    );
};

export default Cart;