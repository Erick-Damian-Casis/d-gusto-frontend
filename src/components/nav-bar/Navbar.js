import logo from "../../assets/logo.png";

export default function NavBar(){

    return(
        <div>
            <nav className="flex w-auto px-5 h-20 bg-green-500 relative flex items-center justify-between">
                <img src={logo} alt="" className="h-9"/>
                <div>
                    <button type="button"
                            className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="14 w-14 rounded-full"
                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""/>
                    </button>
                </div>
            </nav>
        </div>
    )
}
