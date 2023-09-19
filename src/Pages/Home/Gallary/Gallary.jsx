import React from 'react';
import { Gallery } from "react-grid-gallery";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallary = () => {
    useEffect(() => {
        AOS.init();
    }, [])

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
            src: "https://i.ibb.co/cy21z8p/banner1.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://i.ibb.co/FXbbW7P/banner3.png",
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
            <h1 className='md:text-5xl text-center font-bold my-20 underline'>Gallary</h1>

            <div className='ml-5' >
                <div data-aos="flip-left" data-aos-duration="3000">
                    <Gallery images={images} />
                </div>
            </div>


        </div>
    );
};

export default Gallary;