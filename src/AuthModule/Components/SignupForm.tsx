"use client";

import AuthWrapper from "@/app/Components/AuthWrapper";
import { useState } from "react";

export default function SignupForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // Save user locally (temporary)
    localStorage.setItem("user", JSON.stringify(form));
    setSuccess(true);
  };

  return (
    <AuthWrapper>
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Create Account</h2>

      {success ? (
        <p className="text-center text-green-600 font-semibold">✅ Signup successful!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      )}

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </AuthWrapper>
  );
}
