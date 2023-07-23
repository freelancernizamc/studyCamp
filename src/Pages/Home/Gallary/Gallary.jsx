import React from 'react';
import { Gallery } from "react-grid-gallery";


const Gallary = () => {
    const images = [
        {
            src: "https://i.ibb.co/q94Vx4V/banner2.jpg",
            width: 320,
            height: 174,
            isSelected: true,
            caption: "Students of North Central College",
        },
        {
            src: "https://i.ibb.co/Jmb3fwq/students.png",
            width: 320,
            height: 212,
            tags: [
                { value: "students", title: "Students" },
                { value: "North Carolina College", title: "North Carolina College" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },

        {
            src: "https://i.ibb.co/6w2dGkw/gallary3.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://i.ibb.co/HTHpyYn/gallary4.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://i.ibb.co/2ymyJDD/gallary5.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://i.ibb.co/D8D0VPW/gallary7.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://i.ibb.co/2ymyJDD/gallary5.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://i.ibb.co/7XKRdnT/gallary8.jpg",
            width: 320,
            height: 212,
        },
    ];
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-10'>Gallary</h1>

            <div className='ml-10'>
                <Gallery images={images} />
            </div>


        </div>
    );
};

export default Gallary;