import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 shadow-2xl bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
                <h1 className=" text-3xl font-semibold text-center text-gray-300">
                    Sign Up to Hyrule
                    <span className="text-yellow-500"> Chat</span>
                </h1>
                <form>
                    <div>
                        <label htmlFor="fullname" className="label p-2">
                            <span className=" text-base label-text text-white">Full Name</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="enter fullname" 
                            className="w-full input h-10 bg-opacity-50 focus:border-gray-100 focus:text-gray-100 text-gray-100"
                            id="fullname"
                            name="fullname"
                            autoComplete="name"
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className="label p-2">
                            <span className=" text-base label-text text-white">Username</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="enter username" 
                            className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
                            id="username"
                            name="usename"
                            autoComplete="username"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="label p-2">
                            <span className=" text-base label-text text-white">Email</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="enter email" 
                            className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
                            id="email"
                            name="email"
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="enter password"
                            className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
                            id="password"
                            name="password"
                            autoComplete="new-password"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm_password" className="label p-2">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="confirm password"
                            className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
                            id="confirm_password"
                            name="confirm_password"
                            autoComplete="new-password"
                        />
                    </div>

                    <GenderCheckBox />

                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-5 text-gray-100 bg-opacity-50 border-0">Login</button>
                    </div>

                    <a href="#" className="text-sm hover:underline text-gray-100 mt-2 inline-block">Already have an account?</a>
                </form>
            </div>
        </div>
    )
};
export default SignUp;

// const SignUp = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 shadow-2xl bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
//                 <h1 className=" text-3xl font-semibold text-center text-gray-300">
//                     Sign Up to Hyrule
//                     <span className="text-yellow-500"> Chat</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label htmlFor="fullname" className="label p-2">
//                             <span className=" text-base label-text text-white">Full Name</span>
//                         </label>
//                         <input 
//                             type="text" 
//                             placeholder="enter fullname" 
//                             className="w-full input h-10 bg-opacity-50 focus:border-gray-100 focus:text-gray-100 text-gray-100"
//                             id="fullname"
//                             name="fullname"
//                             autoComplete="name"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="username" className="label p-2">
//                             <span className=" text-base label-text text-white">Username</span>
//                         </label>
//                         <input 
//                             type="text" 
//                             placeholder="enter username" 
//                             className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
//                             id="username"
//                             name="usename"
//                             autoComplete="username"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="email" className="label p-2">
//                             <span className=" text-base label-text text-white">Email</span>
//                         </label>
//                         <input 
//                             type="text" 
//                             placeholder="enter email" 
//                             className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
//                             id="email"
//                             name="email"
//                             autoComplete="email"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="password" className="label p-2">
//                             <span className="text-base label-text text-white">Password</span>
//                         </label>
//                         <input 
//                             type="password" 
//                             placeholder="enter password"
//                             className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
//                             id="password"
//                             name="password"
//                             autoComplete="new-password"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="confirm_password" className="label p-2">
//                             <span className="text-base label-text text-white">Confirm Password</span>
//                         </label>
//                         <input 
//                             type="password" 
//                             placeholder="confirm password"
//                             className="w-full input h-10 bg-opacity-50 focus:border-gray-300 focus:text-gray-100 text-gray-100"
//                             id="confirm_password"
//                             name="confirm_password"
//                             autoComplete="new-password"
//                         />
//                     </div>

//                     <GenderCheckBox />

//                     <div>
//                         <button className="btn btn-block btn-sm mt-5 text-gray-100 bg-opacity-50 border-0">Login</button>
//                     </div>

//                     <a href="#" className="text-sm hover:underline text-gray-100 mt-2 inline-block">Already have an account?</a>
//                 </form>
//             </div>
//         </div>
//     )
// };
