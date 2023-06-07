import Head from "next/head";
import styles from '../../styles/Ninja.module.css'
import Link from "next/link";


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}


export default function Ninjas({ ninjas }) {

    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={'/Ninjas/' + ninja.id} key={ninja.id}>
                    <span className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </span>
                </Link>
            ))}
        </div>
    );
}
