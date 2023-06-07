import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return <>
        <nav>
            <div className="logo">
                <Image src='/logo.png' alt="picture of ninja" width={128} height={77} />

            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/Ninjas">Ninja Listing</Link>
        </nav>
    </>
}