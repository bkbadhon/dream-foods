import React, { useState } from "react";
import salad from "../../../public/salad1.jpg";
import roast from "../../../public/Roast.jpg";
import biriyani from "../../../public/Biryani.jpg";
import pizza from "../../../public/pizza2.jpg";
import drink from "../../../public/drink.jpg";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
const Brands = () => {

    const [rating , setRating] = useState()
  return (
    <div className='w-10/12 mx-auto my-8'>
      <div className="text-center my-16">
        <h2 className="text-4xl my-2 font-bold">
          Our <span className="text-[#615EFC]">Special</span> Menu
        </h2>
        <p>
          Explore new tastes, enjoy limited-time offerings, and savor the
          exceptional with our <br /> ever-evolving selection of specials. Join
          us and indulge in a memorable meal that celebrates innovation and
          quality.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
        <div className="shadow-lg border-2 py-2 rounded-xl duration-1000 hover:text-white hover:bg-[#7E8EF1] hover:border-[#615EFC] my-auto">
          <img className="w-40 object-cover h-40 mx-auto rounded-full" src={pizza} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">
            Special Pizza
          </h2>
          <div className="text-center mb-4">
            <Rating className="items-center"
              emptySymbol={<CiStar className="text-2xl text-orange-500" />}
              fullSymbol={<IoIosStar className="text-2xl text-orange-600" />}
              onChange={(value) => setRating(value)}
            />
          </div>
        </div>
        <div className="shadow-lg border-2 py-2 rounded-xl duration-1000 hover:text-white hover:bg-[#7E8EF1] hover:border-[#615EFC] my-auto">
          <img className="w-40 object-cover h-40 mx-auto rounded-full" src={roast} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">Chicken Roast</h2>
          <div className="text-center mb-4">
            <Rating className="items-center"
              emptySymbol={<CiStar className="text-2xl text-orange-500" />}
              fullSymbol={<IoIosStar className="text-2xl text-orange-600" />}
              onChange={(value) => setRating(value)}
            />
          </div>
        </div>
        <div className="shadow-lg border-2 py-2 rounded-xl duration-1000 hover:text-white hover:bg-[#7E8EF1] hover:border-[#615EFC] my-auto">
          <img className="w-40 object-cover h-40 mx-auto rounded-full" src={salad} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">Beautiful Salad</h2>
          <div className="text-center mb-4">
            <Rating className="items-center"
              emptySymbol={<CiStar className="text-2xl text-orange-500" />}
              fullSymbol={<IoIosStar className="text-2xl text-orange-600" />}
              onChange={(value) => setRating(value)}
            />
          </div>
        </div>
        <div className="shadow-lg border-2 py-2 rounded-xl duration-1000 hover:text-white hover:bg-[#7E8EF1] hover:border-[#615EFC] my-auto">
          <img className="w-40 object-cover h-40 mx-auto rounded-full" src={drink} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">Special Drinks</h2>
          <div className="text-center mb-4">
            <Rating className="items-center"
              emptySymbol={<CiStar className="text-2xl text-orange-500" />}
              fullSymbol={<IoIosStar className="text-2xl text-orange-600" />}
              onChange={(value) => setRating(value)}
            />
          </div>
        </div>
        <div className="shadow-lg border-2 py-2 rounded-xl duration-1000 hover:text-white hover:bg-[#7E8EF1] hover:border-[#615EFC] my-auto">
          <img className="w-40 object-cover h-40 mx-auto rounded-full" src={biriyani} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">Chicken Biryani</h2>
          <div className="text-center mb-4">
            <Rating className="items-center"
              emptySymbol={<CiStar className="text-2xl text-orange-500" />}
              fullSymbol={<IoIosStar className="text-2xl text-orange-600" />}
              onChange={(value) => setRating(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
