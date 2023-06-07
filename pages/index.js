import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css"


export default function Home() {
    return (
        <>
            {/* react fragments have to be used in order to add Head to Homepage */}
            <><Head>
                <meta name="keywords" content="ninjas" />
                <title>NinjaList | Home</title>
            </Head></>
            <div>
                <h1 className={styles.title}>Hellow Home World</h1>
                <p className={styles.text}>I love when you come Home!</p>
                <p className={styles.text}>Loving life is a profound and enriching experience that encompasses an appreciation for the beauty and wonders of existence. It is an outlook that embraces gratitude, positivity, and the ability to find joy in both the simplest and most extraordinary moments. Loving life involves cherishing the relationships, connections, and experiences that bring meaning and purpose to our journey. It encourages us to embrace our passions, pursue personal growth, and savor the present moment. With a loving attitude towards life, we cultivate resilience in the face of challenges, find inspiration in the world around us, and foster a deep sense of fulfillment and contentment. Ultimately, loving life is a continuous celebration of the gift of existence and a commitment to living it to the fullest.</p>

                <Link href="/Ninjas" className={styles.btn}>See Ninja Listing</Link>
            </div>
        </>
    )
}


// ! Export function can also be written as follows:
// const Home = () => {
//     return <>
            // <Navbar />
//         <h1>Hellow Home World</h1>
//         <p>I love when you come Home!</p>
            // <Footer />
//     </>
// }  

// export default Home