import React, { useState } from "react";
import logo from "/erp-logo.svg";
import { useNavigate } from "react-router-dom";
import signupImage from "../../assets/images/kelly-sikkema-iiaUVel-cJE-unsplash.jpg";


const Signup: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // TODO: Implement actual signup logic (API call)
        alert("Signup successful!");
    };

    return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4" style={{ backgroundImage: `url(${signupImage})` }}>
      <div className="backdrop-blur-xl bg-white/30 border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-24 w-24" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          Create Account
        </h1>
        {error && (
            <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-xl bg-white/50 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl bg-white/50 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-white/50 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-3 rounded-xl bg-white/50 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-xl font-semibold shadow-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="text-white text-sm mt-6 text-center">
          Already have an account? <a href="#" className="underline" onClick={() => navigate("/login")}>Log in</a>
        </p>
      </div>
    </div>
        // <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
        //     <h2>Sign Up</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div style={{ marginBottom: 16 }}>
        //             <label>
        //                 Name
        //                 <input
        //                     type="text"
        //                     name="name"
        //                     value={form.name}
        //                     onChange={handleChange}
        //                     style={{ width: "100%", padding: 8, marginTop: 4 }}
        //                     required
        //                 />
        //             </label>
        //         </div>
        //         <div style={{ marginBottom: 16 }}>
        //             <label>
        //                 Email
        //                 <input
        //                     type="email"
        //                     name="email"
        //                     value={form.email}
        //                     onChange={handleChange}
        //                     style={{ width: "100%", padding: 8, marginTop: 4 }}
        //                     required
        //                 />
        //             </label>
        //         </div>
        //         <div style={{ marginBottom: 16 }}>
        //             <label>
        //                 Password
        //                 <input
        //                     type="password"
        //                     name="password"
        //                     value={form.password}
        //                     onChange={handleChange}
        //                     style={{ width: "100%", padding: 8, marginTop: 4 }}
        //                     required
        //                 />
        //             </label>
        //         </div>
        //         <div style={{ marginBottom: 16 }}>
        //             <label>
        //                 Confirm Password
        //                 <input
        //                     type="password"
        //                     name="confirmPassword"
        //                     value={form.confirmPassword}
        //                     onChange={handleChange}
        //                     style={{ width: "100%", padding: 8, marginTop: 4 }}
        //                     required
        //                 />
        //             </label>
        //         </div>
        //         {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        //         <button type="submit" style={{ width: "100%", padding: 10, background: "#007bff", color: "#fff", border: "none", borderRadius: 4 }}>
        //             Sign Up
        //         </button>
        //     </form>
        // </div>
    );
};

export default Signup;