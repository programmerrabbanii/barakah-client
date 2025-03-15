import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
  const { loginUser, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await loginUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginGoogle();
      Swal.fire({
        icon: "success",
        title: "Google Login Successful!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-6">
      <motion.div
        className="card bg-white shadow-2xl rounded-lg w-full max-w-lg p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-center text-4xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Login
        </motion.h2>

        <form onSubmit={handleLogin}>
          <motion.fieldset
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </motion.fieldset>

          <motion.fieldset
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </motion.fieldset>

          <motion.button
            type="submit"
            className="btn bg-purple-600 w-full p-3 rounded-md text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 transition-all ease-in-out duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        <motion.button
          onClick={handleGoogleLogin}
          className="btn  bg-purple-600 w-full p-3 rounded-md text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 transition-all ease-in-out duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <FcGoogle />
          Login with Google
        </motion.button>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:text-green-700 transition-all"
            >
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
