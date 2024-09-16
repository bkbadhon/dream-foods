import { useContext } from "react";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
  const axiosLink = useAxios(AxiosSource)
  const {user} = useContext(AuthContext)
  const {refetch, data : cart =[]} = useQuery({
    queryKey:['cart', user?.email],
    queryFn : async ()=>{
        const res = await axiosLink.get(`/cart?email=${user.email}`)
        return res.data;
    }
  })
  return[cart, refetch]
};

export default useCart;