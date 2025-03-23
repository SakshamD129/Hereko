"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import './dstyling.css';
const DeletePage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const response = await fetch(`/delete/api?id=${id}`);
                const data = await response.json();
                setProduct(data);
            };

            fetchProduct();
        }
    }, [id]);
    if (!product) <div>Waiting</div>

    return (
        <div className="individual-product" >
            {product.map(item => (
                <div key={item.productId}>
                    <div> <b>Name:</b>{item.name}</div>
                    <div>Price:{item.price}</div>
                    <div><b>Stock:</b>{item.stock}</div>
                </div>
            ))}
        </div>
    );
};

export default DeletePage;
