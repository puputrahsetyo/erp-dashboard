import React, { useState } from "react";

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

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && (
                    <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoComplete="username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;