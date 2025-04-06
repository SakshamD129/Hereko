"use client";
import React, { useRef, useState } from 'react'
import './about.css';
function page() {
    const [data, setData] = useState([]);
    const re = useRef();
    async function Fetching(word) {
        const a = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const response = await a.json();
        re.current.value = "";
        setData(response);
    }
    return (
        <div>
            Dictionary: Search and Get the Results
            <input type="text" ref={re} />
            <button onClick={() => Fetching(re.current.value)}>Search</button>
            <div>
                {
                    data.map(item => (
                        <div key={item.word}>
                            <div>Word:{item.word}</div>
                            {item.meanings.map((mean, meanIndex) => (
                                <div key={meanIndex}>
                                    <div>Meanings:</div>
                                    {mean.definitions.map((def, defIndex) => (
                                        <div key={defIndex}>
                                            <div>{defIndex + 1}.{def.definition}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default page
