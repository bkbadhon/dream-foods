import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { IoStar } from "react-icons/io5";
import { FaArrowAltCircleRight, FaFacebook, FaInstagram, FaShare, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Rating from "react-rating";
import { IoIosStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../Hook/useCart";

const MenuView = () => {
  const [menus, setMenus] = useState([]);
  const [, refetch] =useCart()
  const axiosLink = useAxios(AxiosSource);

  // const [phones, setPhones] = useState([]);
  const { id } = useParams();

  const {user} = useContext(AuthContext)

  useEffect(() => {
    axiosLink
      .get("/menu")
      .then((res) => {
        const findService = res.data.find((item) => item._id == id);
        setMenus(findService);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosLink, id]);

    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {  // Prevent the quantity from going below 1
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };

    const [rating, setRating] = useState(0);
    const textRef = useRef()


    const handleCart =()=>{
      if(user && user.email){
       const cartItem = {
         menuId: menus._id,
         email: user.email,
         name: menus.name,
         price: menus.price,
         photo: menus.photo,
         menu: menus.menu,
         details: menus.details,
         quantity: quantity,

       }
       axiosLink
        .post("/cart", cartItem)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            refetch()
            Swal.fire({
              title: "Good job!",
              text: `${menus.name} Added to Cart`,
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
      }

    
  const handleReview = (e) =>{
    e.preventDefault()
    if (user && user.email) {
      
      const reviewItem = {
        menuId: menus._id,
        userName: user?.displayName,
        email: user.email,
        userPhoto: user?.photoURL,
        name: menus.name,
        price: menus.price,
        photo: menus.photo,
        menu: menus.menu,
        rating: rating,
        comment :textRef.current.value,

      }
      console.log(reviewItem)
      axiosLink
        .post("/reviews", reviewItem)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: `${menus.name} Added your review`,
              icon: "success",
            });
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const [review, setReview] =useState([])

  axiosLink.get('/reviews')
  .then(res => setReview(res.data.filter(item=> item.menuId == id)))
  .catch(err=> console.log(err))
  return (
    <div className="w-11/12 mx-auto my-4">
      <div className="card-title px-4 md:text-2xl my-8 text-xl font-bold">
        <h2>
          Foods / {menus.menu} / {menus.name}
        </h2>
      </div>
      <div className="md:flex justify-around my-8 items-center lg:gap-24 gap-8">
        <div className="md:w-1/2 bg-gray-200 shadow-lg rounded-xl">
          <img className="p-16" src={menus.photo} alt="" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl text-center font-semibold uppercase">
            {menus.menu} / {menus.name}
          </h2>
          <div className="divider divider-primary"></div>
          <div className="flex gap-8 mb-4 items-center">
            <h2 className="text-warning font-semibold opacity-50 text-xl">in stock</h2>
            <div className="flex gap-1 text-warning">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <h2>(20 Reviews)</h2>
          </div>
          <h2 className="mb-4">{menus.details}</h2>
          <div className="mb-4 flex gap-4">
            <h2 className=" text-2xl font-semibold">
              ${menus.price - 3.00}
            </h2>
            <h2 className="font-semibold line-through text-gray-400 text-2xl">${menus.price}</h2>
          </div>
          <h2 className="text-lg mb-4 font-semibold">Quantity :</h2>
          <div className="flex mb-8 gap-2">
          <button
            onClick={handleDecrement}
            className="bg-gray-300 text-gray-800 p-1 text-2xl px-4 font-bold rounded-xl hover:bg-gray-400"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-8 text-center border-t ml-1 border-b border-gray-300 py-2"
          />
          <button
            onClick={handleIncrement}
            className="bg-gray-300 text-gray-800 p-1 text-2xl px-4 font-bold rounded-xl hover:bg-gray-400"
          >
            +
          </button>
          </div>
          <div className="flex gap-4 mb-8 text-[#615EFC] items-center">
            <FaShare/>
            <h2 className="font-semibold text-xl">Share on</h2>
            <FaFacebook className="text-2xl "/>
            <FaWhatsapp className="text-2xl"/>
            <FaInstagram className="text-2xl"/>
            <FaTwitter className="text-2xl"/>
          </div>
          <button onClick={handleCart} className="w-full font-semibold p-2 duration-700 hover:bg-[#7E8EF1] text-center text-white bg-[#615EFC]">Add To Cart</button>
        </div>
      </div>
      <div>
      <div className="text-left p-8">
      <div className="flex text-xl text-[#615EFC] items-center gap-2">
        <FaShare/>
        <h2 className=" mb-4 text-[#615EFC]">Share Your Feedback</h2>
      </div>
      <div className="flex items-center gap-4">

        <Rating
          emptySymbol={
            <CiStar className="text-2xl text-orange-500"/>
          }
          fullSymbol={
            <IoIosStar className="text-2xl text-orange-600"/>
          }
            onChange={(value) => setRating(value)}
        />
        <p className="text-2xl flex items-center text-orange-500">({rating} <IoIosStar/>)</p>
      </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold mt-2">Write your comment here :</h2>
          <textarea className="border-2 border-[#615EFC] outline-none mb-2 h-20 w-full" ref={textRef} placeholder="Write...." name="textarea" id=""></textarea>
          <button onClick={handleReview} className="p-2 rounded-xl bg-[#615EFC] text-white font-semibold duration-700 hover:bg-[#7E8EF1]">Submit</button>
        </div>
      </div>
      </div>
      <div className="ml-8 mb-4">
        <h2 className="text-xl mb-4 text-[#615EFC]">Others Feedback :</h2>
        {
          review.map((item,_id)=>
          <div className="my-4 mb-" key={_id}>
            <div className="flex gap-2 items-center">
              <img className="w-8 h-8 rounded-full object-cover" src={item.userPhoto} alt="" />
              <div>
                <h2 className="text-lg font-semibold">{item.userName}</h2>
                <h2 className="text-xs">{item.comment}</h2>
              </div>
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default MenuView;
