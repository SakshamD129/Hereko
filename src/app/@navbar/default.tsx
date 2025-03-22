"use client";
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/navigation'
import useCart from '../cart/page';
function Default() {
    const { count } = useCart();
    const router = useRouter();
    return (
        <div className='navbar'>
            <Image className='rocket' src="/astro.png" alt='photo' width={40} height={40} onClick={() => router.push("/")} priority></Image>

            <button className="navbar-button" onClick={() => router.push('/just')}>About</button>
            <button className="navbar-button" onClick={() => router.push("/reality")}>List</button>
            <div className="cart-img" onClick={() => router.push("/cart-items")}><Image src="./cartbelow.svg" alt='Cart:' width={20} height={50}></Image>{count}</div>
        </div>
    )
}

export default Default
