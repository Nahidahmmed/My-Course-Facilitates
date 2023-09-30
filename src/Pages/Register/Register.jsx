import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        // const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        
    }
    return (
        <div className="bg-purple-800 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl font-semibold text-purple-800 mb-6">Register</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">

                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-400"
                            placeholder="Choose a username"
                            required
                        />
                    </div>
                    <div className="mb-4">

                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">

                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-400"
                            placeholder="Choose a password"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input className="w-full bg-yellow-400 btn text-purple-800 py-2 rounded-full hover:bg-yellow-500 transition duration-300" type="submit" value="Register" />

                    </div>
                </form>

                <p className="text-gray-600 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-purple-800 hover:underline">
                        Login here
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;