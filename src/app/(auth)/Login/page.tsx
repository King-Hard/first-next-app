"use client";

import { login } from "@/app/Actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function Login() {

  const [state, action, isLoading] = useActionState(login, undefined);

  return (
    <div className="container w-1/2">
      <h1 className="title">Login</h1>

      <form 
        className="space-y-4"
        action={action}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="text" 
            name="email" 
            defaultValue={state?.email}
          />

          {state?.errors?.email && (
            <p className="error">{state.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
          />
          
          {state?.errors?.password && (
            <p className="error">{state.errors.password}</p>
          )}
        </div>

        <div>
          <button 
            className="btn-primary w-full flex justify-center"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="flex justify-center space-x-1.5">
          <span>You don't have an account?</span>
          <Link 
            href="/Register"
            className="text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};