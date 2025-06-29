"use client";

import Link from "next/link";
import { useActionState } from "react";
import {register} from "../../Actions/auth"

export default function Register() {
  const [state, action, isLoading] = useActionState(register, undefined);

  return (
    <div className="container w-1/2">
      <h1 className="title">Register</h1>

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
          {state?.errors?.email 
            && (<p className="error">
                {state.errors.email}
              </p>)
          }
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            defaultValue={state?.password}
          />
          {state?.errors?.password 
            && (<div className="error">
                  <p>Password must:</p>
                  <ul className="list-disc list-inside ml-4">
                    {state.errors.password.map(err =>(
                      <li key={err}>{err}</li>
                    ))}
                  </ul>  
                </div>)
          }
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            id="confirmPassword" 
            type="password" 
            name="confirmPassword" 
            defaultValue={state?.confirmPassword}
          />
          {state?.errors?.confirmPassword 
            && (<p className="error">
                {state.errors.confirmPassword}
              </p>)
          }
        </div>

        <div>
          <button 
            className="btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading
              ? "Loading..."
              : "Register"
            }
          </button>
        </div>
        <div className="flex justify-center space-x-1.5">
          <span>Do you have an account?</span>
          <Link 
            href="/"
            className="text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};