"use client";
import React from "react";
import useCart from "../cart/cart-data";
import './yesko.css'
function Waiting() {
    return (
        <>
            <div className="no-cart"></div>
        </>
    )
}
function Page() {
    const { herek } = useCart();

    if (herek.size === 0) {
        return <Waiting />;
    }

    return (
        <div className="cart-items-true">
            {[...herek].map(([item, count]) => (
                <div key={item.productId} className="cart-items-products">
                    <div>{item.name}</div>
                    <div>Quantity: {count}</div>
                </div>
            ))}
        </div>
    );
}

export default Page;
