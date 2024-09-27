import React, { useState } from 'react';
import useAxios, { AxiosSource } from '../../component/Axios/useAxios';
import { FaUsers } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Users = () => {
    const axiosLink = useAxios(AxiosSource)

    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosLink.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosLink.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className="">
                <table className="table my-4">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#615EFC] text-white'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, idx) =>
                            <tbody key={idx}>
                                <tr>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn bg-[#615EFC]">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}</td>
                                </tr>

                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default Users;