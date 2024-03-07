function Message() {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img 
                        src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" 
                        alt="Tailwind CSS chat bubble component" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-gray-500">
                Hi hi, what's up?
            </div>
            <div className="chat-footer text-black text-xs flex gap-1 items-center">
                15:32
            </div>
        </div>
    );
};
export default Message;

// function Message() {
//     return (
//         <div className="chat chat-end">
//             <div className="chat-image avatar">
//                 <div className="w-10 rounded-full">
//                     <img 
//                         src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" 
//                         alt="Tailwind CSS chat bubble component" />
//                 </div>
//             </div>
//             <div className="chat-bubble text-white bg-gray-500">
//                 Hi hi, what's up?
//             </div>
//             <div className="chat-footer text-black text-xs flex gap-1 items-center">
//                 15:32
//             </div>
//         </div>
//     );
// };
// export default Message;