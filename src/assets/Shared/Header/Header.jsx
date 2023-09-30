import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div>



            <header className="bg-purple-800 drop-shadow-md fixed w-full z-10 py-6">
                <nav className="container mx-auto flex items-center justify-between">
                    <div className="text-white text-3xl font-semibold">
                        My Course Facilitates
                    </div>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to={'/'} className="text-white hover:text-yellow-400 transition duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/courses"}
                                href="#"
                                className="text-white hover:text-yellow-400 transition duration-300"
                            >
                                courses
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-300 transition duration-300"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-300 transition duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="bg-purple-600 text-white rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-purple-400"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 8.293 6.707a1 1 0 010-1.414zM9 2a7 7 0 016.937 6H17a1 1 0 110 2h-1.063A7 7 0 119 2zm0 4a3 3 0 100 6 3 3 0 000-6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {
                            user ?

                                <div>
                                    <button
                                        className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition duration-300 mr-4"
                                    >
                                        {user?.displayName}
                                    </button>
                                    <button
                                        onClick={handleLogOut}
                                        className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition duration-300"
                                    >
                                        Logout
                                    </button>
                                </div> :
                                <Link
                                    to={'/login'}
                                    className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition duration-300"
                                >
                                    Login
                                </Link>
                        }

                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;