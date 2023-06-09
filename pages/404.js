import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router.js";


export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    },
        [])
    return (
        <div className="not-found">
            <h1>Oooooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><span>Homepage</span></Link></p>
        </div>
    )
}