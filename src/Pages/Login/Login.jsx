import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
        <div className="bg-purple-800 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96"> 
          <h2 className="text-3xl font-semibold text-purple-800 mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-400"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
                <input  className="w-full bg-yellow-400 btn text-purple-800 py-2 rounded-full hover:bg-yellow-500 transition duration-300" type="submit" value="Login" />
            </div>
          </form>
          
          {/* Message for registration */}
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-purple-800 hover:underline">
              Register here
            </Link>
            .
          </p>
        </div>
      </div>
    );
};

export default Login;