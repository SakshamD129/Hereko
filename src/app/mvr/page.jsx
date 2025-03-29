"use client";
import { useEffect, useRef, useState } from "react";

function page() {
    const [data, setData] = useState([]);
    async function Hello() {
        const a = await fetch("/dbtest");
        const response = await a.json();
        setData(response);
    }
    const reference = useRef();
    async function Biralo(value) {
        const a = await fetch(`/dbtest?value=${value}`);
        const vhi = await a.json();
        setData(vhi);
    }
    async function Addition(value) {
        if (value == "" || value == " ") {
            return;
        }
        const a = await fetch("/dbtest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: value, email: value }),
        });
        reference.current.value = "";
        return a.json();
    }
    useEffect(() => {
        Hello();
    }, [])
    return (
        <div>
            Search
            <input type="text" onChange={(e) => Biralo(e.target.value)} />
            <input ref={reference} type="text" placeholder="Addition" />
            <button onClick={() => Addition(reference.current.value)}>Add</button>
            {data.map(item => (
                <div key={item._id}>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <br />
                </div>
            ))}
        </div>
    )
}

export default page
