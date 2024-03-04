const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 shadow-2xl bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
                <h1 className=" text-3xl font-semibold text-center text-gray-300">
                    Hyrule
                    <span className="text-yellow-500"> Chat</span>
                </h1>

                <form>
                    <div>
                        <label htmlFor="username" className="label p-2">
                            <span className=" text-base label-text text-white">username</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="enter username" 
                            className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
                            id="username"
                            name="username"
                            autoComplete="username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className=" text-base label-text text-white">password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="enter passowrd" 
                            className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
                            id="password"
                            name="password"
                            autoComplete="password"
                        />
                    </div>
                    <div>
                        <button className="btn btn-block btn-sm mt-5 text-gray-100 bg-opacity-50 border-0">Login</button>
                    </div>
                    <a href="#" className="text-sm hover:underline text-gray-100 mt-2 inline-block"> {"Don't"} have an account?</a>
                </form>
            </div>
        </div>
    )
};
export default Login;

// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 shadow-2xl bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
//                 <h1 className=" text-3xl font-semibold text-center text-gray-300">
//                     Hyrule
//                     <span className="text-yellow-500"> Chat</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label htmlFor="username" className="label p-2">
//                             <span className=" text-base label-text text-white">username</span>
//                         </label>
//                         <input 
//                             type="text" 
//                             placeholder="enter username" 
//                             className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
//                             id="username"
//                             name="username"
//                             autoComplete="username"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="label p-2">
//                             <span className=" text-base label-text text-white">password</span>
//                         </label>
//                         <input 
//                             type="password" 
//                             placeholder="enter passowrd" 
//                             className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
//                             id="password"
//                             name="password"
//                             autoComplete="password"
//                         />
//                     </div>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-5 text-gray-100 bg-opacity-50 border-0">Login</button>
//                     </div>
//                     <a href="#" className="text-sm hover:underline text-gray-100 mt-2 inline-block"> {"Don't"} have an account?</a>
//                 </form>
//             </div>
//         </div>
//     )
// };