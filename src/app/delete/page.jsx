"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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


    return (
        <div className="delete-page">
            {product.map(item => (
                <div key={item.productId}>
                    <div>Name:{item.name}</div>
                    <div>Price:{item.price}</div>
                    <div><b>Stock:</b>{item.stock}</div>
                </div>
            ))}
        </div>
    );
};

export default DeletePage;
