import React from "react";
import img from "../../../public/pizza2.jpg";
import drink from "../../../public/drink.jpg";
import salad from "../../../public/salad1.jpg";
import biryani from "../../../public/Biryani.jpg";
const Offer = () => {
  return (
    <div className="my-24">
      <div className="relative">
        <img
          className="w-full md:h-72 h-48 bg-[#0000008c] object-cover"
          src={img}
          alt=""
        />
        <div className="absolute md:flex justify-around items-center inset-0 text-white bg-black opacity-70">
          <div>
            <h2 className="italic ml-2 text-3xl my-4">
              Celebrate at one of the most awarded restaurant
            </h2>
            <p className="text-lg ml-2 mb-4">only this year our business launch</p>
          </div>
          <div className="">
            <button className="btn-sm ml-2  bg-[#7E8EF1] hover:bg-white duration-1000 hover:text-[#7E8EF1] rounded-2xl">
              Get Order
            </button>
          </div>
        </div>
      </div>

      <div className="my-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our <span className="text-[#615EFC]">Daily</span> Offers
          </h2>
          <p className="mt-4">
            Explore new tastes, enjoy limited-time offerings, and savor the
            exceptional with our <br />
            ever-evolving selection of specials. Join us and indulge in a
            memorable meal that celebrates innovation and quality.
          </p>
        </div>

        <div className="md:flex w-11/12 mx-auto p-2 gap-4 my-8 items-center">
          <div className="md:w-1/2 mb-4">
            <img src={img} alt="" />
          </div>

          <div className="md:w-1/2">
            <div className="flex justify-between mb-6 items-center">
              <img className="w-48 h-40" src={biryani} alt="" />

                <div className="flex gap-4 md:gap-20">
                  <h2 className="font-semibold">Spicy Club</h2>

                  <h2>$42</h2>
                </div>
            </div>
            <div className="flex justify-between mb-6 items-center">
              <img className="w-48 h-40" src={salad} alt="" />
                <div className="flex gap-4 md:gap-20">
                  <h2 className="font-semibold">Spicy Club</h2>

                  <h2>$42</h2>
                </div>
            </div>
            <div className="flex justify-between  items-center">
              <img className="w-48 h-40" src={drink} alt="" />
              <div className="flex gap-4 md:gap-20">
                  <h2 className="font-semibold">Spicy Club</h2>

                  <h2>$42</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
