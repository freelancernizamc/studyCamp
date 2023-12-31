

const SearchBar = () => {
    return (
        <div className="flex items-center ml-[400px]">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-8 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-[#3420b4] rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>

            </div>&emsp;
            <h1 className="text-2xl font-bold">Search Your Desired College</h1>
        </div>
    );
};

export default SearchBar;