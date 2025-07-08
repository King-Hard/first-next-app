"use client";

import { useActionState } from "react";

export default function BlogForm({handler}){
const [state, action, isPending] = useActionState(handler, undefined);

    return(
        <form 
            action={action}
            className="space-y-4"
        >
            <div>
                <label htmlFor="title">Title</label>
                <input 
                    id="title" 
                    type="text" 
                    name="title" 
                />

                {state?.errors?.title && (
                    <p className="error">{state.errors.title}</p>
                )}
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <textarea 
                    rows="6"
                    name="content"
                ></textarea>

                {state?.errors?.title && (
                    <p className="error">{state.errors.title}</p>
                )}
            </div>

            <div className="flex justify-center">
            <button 
                className="btn-primary w-full"
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Submit"}
            </button>
            </div>
        </form>
    );
};