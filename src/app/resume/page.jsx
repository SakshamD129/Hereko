"use client";
import React, { useRef } from 'react'
import './resume.css'
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
function page() {
    function DownloadHandler() {
        html2canvas(reference.current, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4'); // Use A4 size in millimeters
            const pdfWidth = 210; // A4 width in mm
            const pdfHeight = 297; // A4 height in mm
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;

            // Calculate the ratio to fit the image within A4 dimensions
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const scaledWidth = imgWidth * ratio;
            const scaledHeight = imgHeight * ratio;

            // Center the image on the PDF
            const xOffset = (pdfWidth - scaledWidth) / 2;
            const yOffset = (pdfHeight - scaledHeight) / 2;

            pdf.addImage(imgData, 'PNG', xOffset, yOffset, scaledWidth, scaledHeight);
            pdf.save("resume.pdf");
        });
    }

    const reference = useRef();
    return (
        <>
            <div className='upper-content'>Edit and Download</div>
            <div ref={reference}>
                <div>Name:<div contentEditable="true" aria-placeholder='Edit content' aria-activedescendant='true' className='name-here'></div></div>
                Age:<div contentEditable="true" aria-placeholder='Edit content' aria-activedescendant='true' className='name-here'></div>
                Address:<div contentEditable="true" aria-placeholder='Edit content' aria-activedescendant='true' className='name-here'></div>
                About: <div contentEditable="true" aria-placeholder='Edit content' aria-activedescendant='true' className='name-here'></div>
            </div>
            <div><button onClick={DownloadHandler}>Download</button></div>
        </>
    )
}

export default page
