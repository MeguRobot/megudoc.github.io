import "../index.css"
import Home from "./Home";
import Readme from "./Readme";
import Searchbar from "./Searchbar";
import Modebutton from "./Modebutton";

function Navigation() 
{
    return (
        <div className="navBarUpper flex flex-row flex-grow space-x-4 p-4 poppins border-1 border-b-red-950 backdrop-blur-sm max-w-screen max-h-24 sticky top-0 shadow-md items-center justify-center h-screen">
             <Searchbar></Searchbar>
             <Modebutton></Modebutton>
             <Home></Home>


             <Readme></Readme>
        </div>
    );
}

export default Navigation;