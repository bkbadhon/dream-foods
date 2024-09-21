import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-11/12 flex gap-4 mx-auto'>
            <div className='w-3/12 min-h-screen my-2 bg-[#615EFC]'>

                <div className='text-xl text-white'>
                    <li className='list-none px-4 py-2'>
                        <NavLink to={"/"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }
                        >Home</NavLink>
                    </li>
                    <li className='list-none px-4 my-4'>
                        <NavLink to={"/dashboard/myProduct"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }
                        >My Products</NavLink>
                    </li>

                    <li className='list-none px-4 my-4'>
                        <NavLink to={"/dashboard/add"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }
                        >Add Food</NavLink>
                    </li>
                    <li className='list-none my-2 px-4'>
                        <NavLink to={"/dashboard/users"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }
                        >Manage Users</NavLink>
                    </li>
                </div>

            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
                {/* <Users></Users> */}
            </div>

        </div>
    );
};

export default Dashboard;