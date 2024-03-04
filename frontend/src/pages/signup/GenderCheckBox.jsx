const GenderCheckBox = () => {
    return (
        <div className="flex mt-4">
            <div className="form-control">
                <label htmlFor="male" className="label gap-2 cursor-pointer">
                    <span className="label-text text-white">Male</span>
                    <input type="checkbox" className="checkbox input h-8 bg-opacity-50 border-gray-500 focus:border-gray-300 focus:text-gray-100 text-gray-100" id="male" name="male" autoComplete="male"/>
                </label>
            </div>
            <div htmlFor="female" className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text text-white">Female</span>
                    <input type="checkbox" className="checkbox input h-8 bg-opacity-50 border-gray-500 focus:border-gray-300 focus:text-gray-100 text-gray-100" id="female" name="female" autoComplete="female"/>
                </label>
            </div>
        </div>
    );
};
export default GenderCheckBox;

// const GenderCheckBox = () => {
//     return (
//         <div className="flex mt-4">
//             <div className="form-control">
//                 <label htmlFor="male" className="label gap-2 cursor-pointer">
//                     <span className="label-text text-white">Male</span>
//                     <input type="checkbox" className="checkbox input h-8 bg-opacity-50 border-gray-500 focus:border-gray-300 focus:text-gray-100 text-gray-100" id="male" name="male" autoComplete="male"/>
//                 </label>
//             </div>
//             <div htmlFor="female" className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text text-white">Female</span>
//                     <input type="checkbox" className="checkbox input h-8 bg-opacity-50 border-gray-500 focus:border-gray-300 focus:text-gray-100 text-gray-100" id="female" name="female" autoComplete="female"/>
//                 </label>
//             </div>
//         </div>
//     );
// };