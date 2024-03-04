import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

function Sidebar() {
    return (
        <div className="border-r border-gray-300 p-4 flex flex-col">
            <SearchInput />
            <div className="divider m-0"></div>
            <Conversations />
            <LogoutButton />
        </div>
    );
};
export default Sidebar;

// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// function Sidebar() {
//     return (
//         <div className="border-r border-gray-300 p-4 flex flex-col">
//             <SearchInput />
//             <div className="divider m-0"></div>
//             <Conversations />
//             <LogoutButton />
//         </div>
//     );
// };