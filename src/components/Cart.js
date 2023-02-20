import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartCard from "./CartCard";


const Cart = () => {

    // const [cart, setCart] = useState([]);

    const data = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());    
    }


    return (data?.length === 0) ?
        <div className="flex grow p-6">
            <h1 className="font-semibold text-5xl mb-4 ">Empty</h1>
        </div>
        : (
            <div className="grow p-2">

                 <button className="bg-orange-300 px-2 font-bold rounded-md text-gray-900 hover:bg-red-400"
                 onClick={()=>{handleClearCart()}}>Clear Cart</button>

            <div className="flex grow p-6 flex-wrap justify-center">

                {data.map((item) => { return <CartCard key={item.id} {...item} /> })}


            </div>
            </div>

        )

}

export default Cart;