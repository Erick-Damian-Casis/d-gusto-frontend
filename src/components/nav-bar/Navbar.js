import logo from "../../assets/logo.png";
import {useState} from "react";

export default function NavBar(){

    const [navBar, setNavBar]=useState(false);

    const handleOption=()=>{
        setNavBar(!navBar)
    }
    return(
        <div>
            <nav className="flex w-auto px-5 h-20 bg-green-500 relative flex items-center justify-between">
                <img src={logo} alt="" className="h-9"/>
                <div>
                    <button type="button"  onClick={handleOption}
                            className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="14 w-14 rounded-full"
                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""/>
                    </button>
                    {navBar && <div className="mx-5 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                        <a href="src/components/nav-bar/Navbar#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                           id="user-menu-item-0">Your Profile</a>
                        <a href="src/components/nav-bar/Navbar#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                           id="user-menu-item-1">Settings</a>
                        <a href="src/components/nav-bar/Navbar#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                           id="user-menu-item-2">Sign out</a>
                    </div>}
                </div>
            </nav>
        </div>
    )
}
