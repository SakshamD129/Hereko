"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import "./dstyling.css";

const DeletePageContent = () => {
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

    if (!product.length) return <div>Loading...</div>;

    return (
        <div className="individual-product">
            {product.map((item) => (
                <div key={item.productId}>
                    <div><b>Name:</b> {item.name}</div>
                    <div><b>Price:</b> {item.price}</div>
                    <div><b>Stock:</b> {item.stock}</div>
                </div>
            ))}
        </div>
    );
};

const DeletePage = () => (
    <Suspense fallback={<div>Loading search params...</div>}>
        <DeletePageContent />
    </Suspense>
);

export default DeletePage;
