import { BsSend } from "react-icons/bs";

function MessageInput() {
    return (
        <form className="px-4 my-3">
            <div className="w-full relative">
                <input 
                    type="text" 
                    className="border text-sm rounded-lg block w-full p-2.5 bg-black bg-opacity-50 border-black border-opacity-50 text-white"
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 pr-4">
                    <BsSend />
                </button>
            </div>
        </form>
    );
};
export default MessageInput;

// import { BsSend } from "react-icons/bs";

// function MessageInput() {
//     return (
//         <form className="px-4 my-3">
//             <div className="w-full">
//                 <input 
//                     type="text" 
//                     className="border text-sm rounded-lg block w-full p-2.5 bg-black bg-opacity-50 border-black border-opacity-50 text-white"
//                 />
//                 <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//                     <BsSend />
//                 </button>
//             </div>
//         </form>
//     );
// };
// export default MessageInput;