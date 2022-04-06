import headerStyles from "./header.module.css"
import Link from 'next/link';

const pathLeft = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'Blog', id: 2, path: '/blog' },
  { uid: 41, name: 'About', id: 3, path: '/about' }
];

const pathRight = [
    { uid: 41, name: 'Login', id: 3, path: '/login' },
    { uid: 41, name: 'Register', id: 3, path: '/register' }
  ];

export default function Header(){
    return (        
        <header className={headerStyles.header}>
            <nav>
                <div className="col">
                    <ul>
                        {pathLeft.map((value) => {
                            return (
                            <li key={value.uid}>
                                <Link href={value.path}>
                                <a className={headerStyles.a}> {value.name} </a>
                                </Link>
                            </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        {pathRight.map((value) => {
                            return (
                            <li key={value.uid}>
                                <Link href={value.path}>
                                <a className={headerStyles.a}> {value.name} </a>
                                </Link>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>  
    )
}