
import React, { useState, useEffect, useRef } from "react";
import img from '../../public/pizza2.jpg';
import useAxios, { AxiosSource } from "../component/Axios/useAxios";
import { Link } from "react-router-dom";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filterMenu, setFilterMenu] = useState([]); // Will hold the filtered menu items
  const axiosLink = useAxios(AxiosSource);

  // Fetch menu data on component mount
  useEffect(() => {
    axiosLink.get('/menu')
      .then(res => {
        setMenu(res.data);
        setFilterMenu(res.data.filter(food => food.menu === 'pizza')); // Show only pizza items by default
      })
      .catch(err => {
        console.log(err);
      });
  }, [axiosLink]);

  // Handle button click to filter menu items
  const handleButtonClick = (id) => {
    const filteredItems = menu.filter(food => food.menu === id);
    setFilterMenu(filteredItems);
  };

  const searchRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();

    const search = menu.filter((e) =>
      e.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setFilterMenu([...search]);
    if (searchRef.current.value.length < 1) {
      setFilterMenu([...filterMenu]);
    }
  };
  return (
    <div>
      <div className="relative">
        <img className="w-full h-60 bg-[#0000008c] object-cover" src={img} alt="" />
        <div className="absolute inset-0 text-white bg-black opacity-80">
          <div className="text-center mt-24 items-center">
            <h2 className="text-4xl mb-4 font-bold">Our Menu</h2>
            <p className="text-lg mb-4">Only this year our business launched</p>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto my-8">
        <div className="flex justify-around items-center">
          <input
            className="w-1/2 p-2 outline-none rounded-2xl border-[#7E8EF1] border-2"
            type="text"
            ref={searchRef}
            placeholder="Search here"
          />
          <button onClick={handleSearch} className="btn-xl p-2 px-4 bg-[#7E8EF1] hover:bg-[#615EFC] duration-800 rounded-xl text-white">
            Search
          </button>
        </div>

        <div className="md:flex mb-2 justify-left my-4 md:gap-12 gap-2">
          <button
            onClick={() => handleButtonClick('pizza')}
            className="btn-sm rounded-2xl text-white font-semibold hover:bg-[#615EFC] duration-600 bg-[#7E8EF1]"
          >
            Pizza
          </button>
          <button
            onClick={() => handleButtonClick('roast')}
            className="btn-sm rounded-2xl text-white font-semibold hover:bg-[#615EFC] duration-600 bg-[#7E8EF1]"
          >
            Roast
          </button>
          <button
            onClick={() => handleButtonClick('drinks')}
            className="btn-sm rounded-2xl text-white font-semibold hover:bg-[#615EFC] duration-600 bg-[#7E8EF1]"
          >
            Drink
          </button>
          <button
            onClick={() => handleButtonClick('salad')}
            className="btn-sm rounded-2xl text-white font-semibold hover:bg-[#615EFC] duration-600 bg-[#7E8EF1]"
          >
            Salad
          </button>
          <button
            onClick={() => handleButtonClick('biryani')}
            className="btn-sm rounded-2xl text-white mb-3 font-semibold hover:bg-[#615EFC] duration-600 bg-[#7E8EF1]"
          >
            Biryani
          </button>
          <button
            onClick={() => handleButtonClick('burger')}
            className="btn-sm rounded-2xl text-white  font-semibold hover:bg-[#615EFC] duration-600 bg-[#7E8EF1]"
          >
            Burger
          </button>
        </div>

        <div className="divider divider-primary"></div>
      </div>

      <div className="w-11/12 mx-auto justify-center grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-16 gap-4 items-center">
        {filterMenu.map((item, index) => (
          <div key={index}>
            <div className="shadow-lg rounded-xl my-4 p-4 mx-auto">
              <img className="w-full md:h-40 h-32 rounded-xl" src={item?.photo} alt={item.name} />
              <div className="text-center my-2">
                <h2 className="md:text-lg text-xs mb-2 font-semibold">{item.name}</h2>
                <h2 className="mb-2  font-semibold">Price: ${item.price}</h2>
                <Link to={`/menu/${item._id}`}>
                    <button className="bg-[#7E8EF1] hover:bg-[#615EFC] duration-600 btn-sm rounded-xl mx-auto text-white font-semibold">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
