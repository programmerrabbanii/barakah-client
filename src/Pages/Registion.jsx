import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";

const Registion = () => {
  const { createUser, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const registeredInfo = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters!",
      });
      return;
    }

    try {
      await createUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You have been registered successfully.",
      });
      navigate("/login"); // ✅ রেজিস্ট্রেশন হলে লগইন পেজে রিডাইরেক্ট করবে
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

  // ✅ Google Login Function
  const handleGoogleLogin = async () => {
    try {
      await loginGoogle();
      Swal.fire({
        icon: "success",
        title: "Google Login Successful!",
      });
      navigate("/"); // Google Login হলে হোম পেজে নিয়ে যাবে
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12">
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
          Register Now!
        </motion.h2>

        {/* ✅ Form */}
        <form onSubmit={registeredInfo}>
          <motion.fieldset
            className="mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
              placeholder="Enter Your Name"
              required
            />
          </motion.fieldset>

          <motion.fieldset
            className="mb-2"
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
              className="input input-bordered w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
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
              className="input input-bordered w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
              placeholder="Enter your password (6+ characters)"
              required
            />
          </motion.fieldset>

          <motion.button
            type="submit"
            className="btn bg-purple-600 w-full p-3 rounded-md text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 transition-all ease-in-out duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>

        {/* ✅ Google Login Button */}
        <motion.button
          onClick={handleGoogleLogin}
          className="btn border-2 border-gray-300 w-full p-3 rounded-md text-gray-700 font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 flex items-center justify-center gap-3 transition-all ease-in-out duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <FcGoogle />
          Register with Google
        </motion.button>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-semibold hover:text-purple-700 transition-all"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Registion;
