import React from 'react';

const CollegeBanner = () => {

    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-yellow-500 uppercase rounded-full bg-teal-accent-400">
                                We Provide
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Best Education Services
                            <br className="hidden md:block" />
                            For You{' '}

                        </h2>
                        <p className="text-base text-white md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-[#3420B4] hover:bg-[#100831] focus:shadow-outline focus:outline-none"
                        >
                            Contact Now
                        </a>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-full lg:shadow-none sm:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
        </div>
    );
};

export default CollegeBanner;