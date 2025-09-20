import React, { useState } from 'react'
import { assets } from '../Assest/assets'

//Input Field Component
const InputField = ({type, placeholder, name, handleChange, address})=>(
    <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500
    focus:border-green-500 transition'
    type={type} 
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value ={address[name]}
    required />
)

const AddAddress = () => {
    const [address, setAddresses]= useState(
        {
            firstName:'',
            lastName:'',
            email:'',
            street : '',
            city :'',
            state :'',
            zipCode :'',
            Country: '',
            phone:'',
      }
    )

    const handleChange =(e)=>{
       const {name, value} = e.target;
       setAddresses((prevAddress)=>({
        ...prevAddress,
        [name]:value,
       }))
    }

    const onSubmitHandler =async (e)=>{
        e.preventDefault();
    }

  return (
    <div className='mt-16 pb-16 gap-2'>
        <div className='flex gap-2'>
      <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping</p>
      <span className='text-green-500 text-2xl md:text-3xl font-semibold'>Address</span>
</div>
<div className='flex-col-reverse flex md:flex-row justify-between mt-10'>
    <div className='flex-1 max-w-md'>
     <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
        <div className='grid grid-cols-2 gap-4'>
            <InputField handleChange={handleChange} address={address} name='firstName' type="text" placeholder='First Name'/>
             <InputField handleChange={handleChange} address={address} name='lastName' type="text" placeholder='Last Name'/>
              
        </div>
         <InputField handleChange={handleChange} address={address} name='email' type="email" placeholder='Email Address'/>
         <InputField handleChange={handleChange} address={address} name='street' type="text" placeholder='street'/>
       <div className='grid grid-cols-2 gap-4'>
        <InputField handleChange={handleChange} address={address} name='city' type="text" placeholder='City'/>
         <InputField handleChange={handleChange} address={address} name='country' type="text" placeholder='Country'/>
       </div>
     
     <div className='grid grid-cols-2 gap-4'>
        <InputField handleChange={handleChange} address={address} name='zipCode' type="number" placeholder='Zip Code'/>
         <InputField handleChange={handleChange} address={address} name='country' type="text" placeholder='Country'/>
       </div>
       <InputField handleChange={handleChange} address={address} name='phoneNumber' type="number" placeholder='Country'/>
       <button type='submit' className='w-full mt-6 bg-green-500 text-white py-3 transition uppercase cursor-pointer hover:bg-green-800/90' >Save Address </button>
     </form>
    </div>
    <img src={assets.add_address_iamge} alt='Addaddress' className='md:mr-16 mb-16 md:mt-0'></img>
</div>

    </div>
  )
}

export default AddAddress
