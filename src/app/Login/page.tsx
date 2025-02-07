'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggedIn(true); // Allow any email & password
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoggedIn ? (
        <div className="bg-green-100 p-6 rounded shadow-md text-center">
          <h1 className="text-2xl font-bold text-green-700">Login Successful!</h1>
          <p className="text-gray-700 mt-2">Welcome to the dashboard.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-[#da7509]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-[#da7509]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#da7509] text-white py-2 px-4 rounded hover:bg-[#da7509c7]"
          >
            Log In
          </button>
        </form>
      )}
    </div>
  );
}
