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
            <div className='dictop'>
                <div className='insidetop'>Dictionary: Search and Get the Results</div>
            </div>
            <br />
            <div className='vitrako'>
                <input type="text" ref={re} placeholder="Search" />
                <button onClick={() => Fetching(re.current.value)}>Search</button>
            </div>
            <div>
                {
                    data.map(item => (
                        <div key={item.word} className='dictmain'>
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
