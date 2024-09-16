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
      

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#615EFC] text-white">
              <th className="text-lg md:text-xl">#</th>
              <th className="text-lg md:text-xl">Image</th>
              <th className="text-lg md:text-xl">Quantity</th>
              <th className="text-lg md:text-xl">Email</th>
              <th className="text-lg md:text-xl">Price</th>
              <th className="text-lg md:text-xl">Action</th>
            </tr>
          </thead>

          {cart.map((item, index) => (
            <tr className='' key={item._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.photo} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>{item.quantity}</td>
              <td>{item.email}</td>
              <td className='text-semibold'>${item.price * item.quantity}</td>
              
              <th>
                <button onClick={()=>hanDelete(item._id)} className="btn text-[#615EFC] text-xl"><RiDeleteBin6Line /></button>
              </th>
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