import Link from 'next/link';

export default function Header(){
    return(
        <>
           <div className="navbar">
               <Link href="/">
                    Coding Effects
                </Link>
                <Link href="/projects">Clones</Link>
                <Link href="/blog">Originals</Link>
                <Link href="">Apps</Link>
            </div>
        </>
    );
}