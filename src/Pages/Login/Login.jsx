/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from 'sweetalert2'



const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login successful. ',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      })

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
              required
            />
          </div>
          <div className="mb-4">

            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <input className="w-full bg-yellow-400 btn text-purple-800 py-2 rounded-full hover:bg-yellow-500 transition duration-300" type="submit" value="Login" />
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