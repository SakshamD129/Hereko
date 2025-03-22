"use client"
import { useState, useEffect } from "react";
import { Suspense } from "react";
function Page() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function Hello() {
            const a = await fetch('/hello');
            const value = await a.json();
            setData(value);
        }

        Hello();
    }, []);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {data.map(item => (
                    <div key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                    </div>
                ))}
            </Suspense>
        </>
    );
}

export default Page;
