import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPaper = () => {
    return (
        <div>
            <h1 className='md:text-5xl text-center font-bold my-20 underline'>See Some Research Paper of Our Students</h1>
            <div className='ml-20 text-3xl w-[800px]'>
                <div className='bg-indigo-950 hover:bg-gray-900 my-2'>
                    <Link to='https://myperfectwords.com/blog/research-paper-examples/college-research-paper-example.pdf'>Social Media And Social Media Marketing</Link></div>
                <div className='bg-indigo-950 hover:bg-gray-900 my-2'>
                    <Link to='https://myperfectwords.com/blog/research-paper-examples/apa-research-paper-example.pdf'>Effects of Food Deprivation of Concentration and Preserverance</Link></div>
                <div className='bg-indigo-950 hover:bg-gray-900 my-2'>
                    <Link to='https://myperfectwords.com/blog/research-paper-examples/example-of-research-proposal-paper.pdf'>View Research Proposal Example Here</Link></div>
            </div>
        </div>
    );
};

export default ResearchPaper;