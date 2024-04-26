import "../index.css"
import Home from "./Home";
import Readme from "./Readme";

function Navigation() 
{
    return (
        <div className="navBarUpper flex flex-row flex-grow space-x-4 p-4 poppins backdrop-blur-sm max-w-screen max-h-24 sticky border-slate-700 bg-slate-500 bg-opacity-50 shadow-md">
             <Home></Home>
             <Readme></Readme>
        </div>
    );
}

export default Navigation;