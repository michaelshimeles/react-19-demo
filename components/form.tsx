"use client"
import { createPost } from "@/actions/posts";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useActionState } from "react";

export default function DataForm() {
    const [state, formAction, isPending] = useActionState(createPost, null);

    return (
        <div>
            <form action={formAction} className="flex flex-col gap-2">
                <Input type="text" name="title" placeholder="Title" />
                <Input type="text" name="body" placeholder="Body" />
                {state?.error && <p className="text-red-500">{state.error}</p>}
                <Button disabled={isPending} type="submit">Create Post</Button>
            </form>
        </div>);
}