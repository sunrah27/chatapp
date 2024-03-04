import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
    return (
        <form className="flex items-center gap-2">
            <input 
                type="text"
                id="search"
                placeholder="search..."
                className="input input-bordered rounded-full bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
            />
            <button 
                type="submit" 
                className="btn btn-circle text-gray-100 bg-opacity-50 border-0"
            >
                <IoSearchSharp className="w-6 h-6 outline-none"/>
            </button>
        </form>
    );
};
export default SearchInput;

// import { IoSearchSharp } from "react-icons/io5";

// function SearchInput() {
//     return (
//         <form className="flex items-center gap-2">
//             <input type="text" placeholder="search..." className="input input-bordered rounded-full bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"/>
//             <button type="submit" className="btn btn-circle text-gray-100 bg-opacity-50 border-0">
//                 <IoSearchSharp className="w-6 h-6 outline-none"/>
//             </button>
//         </form>
//     );
// };