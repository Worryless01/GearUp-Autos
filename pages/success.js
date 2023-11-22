import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '@/context/SateContext';
import { runFireworks } from '@/Lib/utils';


const Success = () => {
    const { setCartItems, setTotalPrice, settotalQuantities } = useStateContext()
    useEffect(() =>{
        localStorage.clear();
        setCartItems([])
        setTotalPrice(0)
        settotalQuantities(0)
        runFireworks()
    }, [])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for our order!</h2>
            <p className='email-msg'>Check your email inbox for the receipt.</p>
            <p className='description'>
                If you have any questions please email
                <a className='email' href='mailto:swiftstore@gmail.com'>swiftstore@gmail.com</a>
            </p>
            <Link href='/'>
                <button type='button' className='btn' width="300px" >
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success