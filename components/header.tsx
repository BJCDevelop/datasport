import headerStyles from "./header.module.css"
import Link from 'next/link';

const path = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'Blog', id: 2, path: '/blog' },
  { uid: 41, name: 'About', id: 3, path: '/about' }
];

export default function Header(){
    return (        
        <header className={headerStyles.header}>
            <nav>
                <ul>
                {path.map((value) => {
                    return (
                    <li key={value.uid}>
                        <Link href={value.path}>
                        <a className={headerStyles.a}> {value.name} </a>
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </nav>
        </header>  
    )
}