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
                    defaultValue={state?.title}
                />

                {state?.errors?.title && (
                    <p className="error">{state.errors.title}</p>
                )}
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <textarea 
                    rows="6"
                    type="text"
                    name="content"
                    defaultValue={state?.content}
                ></textarea>

                {state?.errors?.content && (
                    <p className="error">{state.errors.content}</p>
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