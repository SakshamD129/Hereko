"use client";
import React, { useRef, useState } from 'react'
import './about.css';
function page() {
    const [data, setData] = useState([]);
    const re = useRef();
    async function Fetching(word) {
        try {
            const a = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!a.ok) {
                throw new Error("Word not found");
            }
            const response = await a.json();
            console.log(response);
            re.current.value = "";
            setData(response);
        }
        catch (err) {
            alert("Word Not found");
            setData([]);
        }

    }
    return (
        <div>
            Dictionary: Search and Get the Results
            <br />
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
