import { Navbar } from "@/components/Navbar.js";
import Head from "next/head";


export default function about() {
    return (
        <>
            <Head>
                <title>NinjaList | About</title>
                <meta name="keywords" content="about-ninjas" />
            </Head>
            <div>
                {/* <Navbar /> */}
                <h1>Hellow About World</h1>
                <p>I love when you come About!</p>
            </div>
        </>
    )
}  