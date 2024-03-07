import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

function MessageContainer() {
    const noChatSelected = true;
    return (
        <div className="md:min-w-[450px] lg:min-w-[650px] xl:min-w-[850px] flex flex-col">
            { noChatSelected ? <NoChatSelected /> : (
                <>
                    {/* Header */}
                    <div className="input bg-opacity-50 px-4 py-2 rounded-none">
                        <span className="label-text">To:</span> <span className="label-text text-white font-bold">John Doe</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};
export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <>
                <div className="px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2">
                    <p>Welcome John Doe</p>
                    <p>Select a chat to start messaging</p>
                    <TiMessages className="text-3xl md:text-6x1 text-center" />
                </div>
            </>
        </div>
    )
}

// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// function MessageContainer() {
//     return (
//         <div className="md:min-w-[450px] lg:min-w-[650px] xl:min-w-[850px] flex flex-col">
//             <>
//                 {/* Header */}
//                 <div className="input bg-opacity-50 px-4 py-2 rounded-none">
//                     <span className="label-text">To:</span> <span className="label-text text-white font-bold">John Doe</span>
//                 </div>
//                 <Messages />
//                 <MessageInput />
//             </>
//         </div>
//     );
// };
// export default MessageContainer;