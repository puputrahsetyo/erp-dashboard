import React, { useState } from "react";
import loginImage from "../../assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import logo from "/erp-logo.svg";
import { useNavigate } from "react-router-dom";

/**
 * Login component for user authentication.
 * This component provides a simple login form with email and password fields.
 * It includes basic validation and error handling.
 * @component
 * @returns {JSX.Element} The Login component displaying the login form.
 * @example
 * return <Login />;
 */

interface LoginProps {
    onLogin: () => void;
}

/**
 * Dummy credentials for demonstration purposes.
 * You can use these email/password combinations to log in:
 * 
 * Email: user@example.com
 * Password: password123
 * 
 * Email: admin@example.com
 * Password: adminpass
 * 
 * Note: The current implementation does not check credentials,
 * any non-empty email and password will allow login.
 */

const Login: React.FC<LoginProps> = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    // Table of valid credentials
    const credentials = [
        { email: "user@mail.com", password: "pass123" },
        { email: "admin@mail.com", password: "adminpass" },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        const isValid = credentials.some(
            cred => cred.email === email && cred.password === password
        );

        if (!isValid) {
            setError("Invalid email or password.");
            return;
        }

        setError("");
        onLogin();
        window.location.href = "/";
    };

    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4" style={{ backgroundImage: `url(${loginImage})` }}>
      <div className="backdrop-blur-xl bg-white/30 border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-24 w-24" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          Welcome Back
        </h1>
        {error && (
            <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl bg-white/50 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-white/50 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-xl font-semibold shadow-lg"
            disabled={!email || !password} // Disable button if fields are empty
          >
            Log In
          </button>
        </form>
        <p className="text-white text-sm mt-6 text-center">
          Don't have an account? <a href="#" className="underline" onClick={handleSignUp}>Sign up</a>
        </p>
      </div>
    </div>
        // <div className="flex flex-row h-screen w-full">
        //     <div className="flex items-center justify-center w-full md:w-1/2 bg-gray-100">
        //         <div className="max-w-md bg-white rounded-lg shadow-md p-8">
        //             <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        //             {error && (
        //                 <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        //             )}
        //             <form onSubmit={handleSubmit} className="space-y-5">
        //                 <div>
        //                     <label className="block text-gray-700 mb-1" htmlFor="email">
        //                         Email
        //                     </label>
        //                     <input
        //                         id="email"
        //                         type="email"
        //                         className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                         value={email}
        //                         onChange={e => setEmail(e.target.value)}
        //                         autoComplete="username"
        //                         required
        //                     />
        //                 </div>
        //                 <div>
        //                     <label className="block text-gray-700 mb-1" htmlFor="password">
        //                         Password
        //                     </label>
        //                     <input
        //                         id="password"
        //                         type="password"
        //                         className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                         value={password}
        //                         onChange={e => setPassword(e.target.value)}
        //                         autoComplete="current-password"
        //                         required
        //                     />
        //                 </div>
        //                 <button
        //                     type="submit"
        //                     className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        //                 >
        //                     Login
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        //     <div className="hidden md:flex items-center justify-center bg-blue-100">
        //         <div className="flex items-center justify-center h-full">
        //             <img
        //                 src={loginImage}
        //                 alt="Login Illustration"
        //                 className="h-full z-0 rounded-lg shadow-lg"
        //             />
        //         </div>
        //     </div>
        // </div>
    );
};

export default Login;