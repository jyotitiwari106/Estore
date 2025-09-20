import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import { dummyOrders } from '../Assest/assets'

const MyOrders = () => {

    const [myOrders, setMyOrders]= useState([])
    const{currency}= useAppContext()

    const fetchMyOrders = async ()=>{
        setMyOrders(dummyOrders)
    }
    useEffect(()=>{
     fetchMyOrders()
    },[])
  return (
    <div className='mt-16 pb-16'>
        <div className='flex flex-col items-end w-max mb-8'>
              <p className='text-2xl font-bold uppercase'>My Orders</p>
              <div className='w-16 h-0.5 bg-green-500 rounded-full'> </div>
        </div>
        {myOrders.map((order, index)=>(
            <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl'>
                <p>
                <span> OrderId: {order._id} </span>
                <span>Payment : {order.paymentType} </span>
                <span>Total Amount:{currency}{order.amount} </span>
                    
                </p>
                {order.items.map((items,index)=>(
                    <div>
                        <div>
                            <div>
                                <img src={items.product[0]} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ))}
    
    </div>
  )
}

export default MyOrders
