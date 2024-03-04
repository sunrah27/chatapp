import './App.css';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';

function App() {
    return <div className="p-4 h-screen flex items-center justify-center">
                <Login />
                <SignUp />
            </div>;
}

export default App;
